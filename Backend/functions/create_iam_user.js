const aws = require('aws-sdk');
var iam = new aws.IAM();
var randomstring = require('randomstring');


exports.handler = async (event) => {
  var data = event.inputs || {};
  var data_name = data.name || {};
  var email_user = data.email || {};

  return await new Promise(async (res, rej) => {
    var randomer = randomstring.generate({
      length: 5,
      charset: 'alphabetic'
    });
    var name = `${data_name}_${randomer}`;
    var params = {
      UserName: name
    };
    try {
      const createUser = await iam.createUser(params).promise();
      if (createUser) {
        try {
          var createPassword = {
            Password: `CCC@Pass_${randomer}`,
            PasswordResetRequired: false,
            UserName: name
          };
          var attachToGroup = {
            GroupName: "EVENT_GROUP_NIST_CCC",
            UserName: name
          };
          const createPass = await iam.createLoginProfile(createPassword).promise();
          const addUserGroup = await iam.addUserToGroup(attachToGroup).promise();
          if (addUserGroup && createPass) {
            console.log(createPassword);
            res({ email: email_user, ...createPassword });
          }
        }
        catch (err) {
          rej();
        }
      }
    }
    catch (e) {
      rej('Error');
      console.log(e);
    }
  });
};
