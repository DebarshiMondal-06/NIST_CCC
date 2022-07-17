const AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB.DocumentClient();



const sendResponse = async (data, code) => {
    const response = {
        statusCode: code,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data)
    };
    return response;
};


const getAllData = async () => {
    try {
        var data = await dynamoDB.scan({ TableName: "Register_Event_User" }).promise();
        if (data.Items) {
            return sendResponse(data.Items, 200);
        }
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
};

const delete_one = async (email) => {
    try {
        var delete_user = await dynamoDB.delete({ TableName: "Register_Event_User", Key: { emailId: email } }).promise();
        if (delete_user) {
            return sendResponse({ message: 'Deleted' }, 200);
        }
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
}



const set_hiring_data = async (items) => {
    try {
        var hire_user = await dynamoDB.put({
            Item: {
                ...items
            },
            TableName: "Hiring_Table",
        }).promise();
        if (hire_user) {
            return sendResponse({ message: 'Updated' }, 201);
        };
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
};

const get_hiring_data = async () => {
    try {
        var get_hire_user = await dynamoDB.scan({
            TableName: "Hiring_Table",
            ProjectionExpression: "emailId, fullname, rollno, contact, residence"
        }).promise();
        if (get_hire_user) {
            return sendResponse(get_hire_user.Items, 200);
        };
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
};

const delete_hiring_user = async (email) => {
    try {
        var delete_user = await dynamoDB.delete({ TableName: "Hiring_Table", Key: { emailId: email } }).promise();
        if (delete_user) {
            return sendResponse({ message: 'Deleted' }, 204);
        }
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
}



const send_feedback = async (email, message) => {
    try {
        var feedback = await dynamoDB.update({
            TableName: "Register_Event_User",
            Key: { emailId: email },
            UpdateExpression: `set feedback = :feedback`,
            ExpressionAttributeValues: {
                ":feedback": `${message}`,
            },

        }).promise();
        if (feedback) {
            return sendResponse({ message: 'Updated' }, 200);
        }
    }
    catch (e) {
        return sendResponse({ message: "Error" }, 400);
    }
}




exports.handler = async (event) => {
    const { email } = event.queryStringParameters || {};

    if (event.resource && event.resource === '/selection') {
        const getBodyData = JSON.parse(event.body);
        return set_hiring_data(getBodyData);
    }
    else if (event.resource && event.resource === '/get_hiring') {
        return get_hiring_data();
    }
    else if (event.resource && event.resource === '/delete_hiring') {
        const { emailId } = event.queryStringParameters || {};
        return delete_hiring_user(emailId);
    }
    else if (event.resource && event.resource === '/send_feedback') {
        const { emailId, message } = event.queryStringParameters || {};
        return send_feedback(emailId, message);
    }
    else if (email) return delete_one(email);
    else return getAllData();
};
