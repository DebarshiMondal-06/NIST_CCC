const nodemailer = require('nodemailer');

const mailer = async(to, name, ticketId, type) => {
    var smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "cloudcomputing@nist.edu",
            pass: "CloudCC@Nist_2022"
        }
    });
    if (type === 'dynamodb') {
        var mailOptions = {
            from: 'cloudcomputing@nist.edu',
            to,
            subject: 'NIST CCC | Event Registered',
            html: `
          <div><center>
          <img src="https://i.ibb.co/VBCyyGk/logo-cutted.png" width="80" height="100" alt="nist-ccc" />
          <h1 style="color: green; margin-top: -10px; text-transform: capitalize;">${name}, Registration Confirmed!</h1>
          <p style="font-size: 24px"><b>Event - </b>Brain Teaser</p>    
         
          <p style="font-size: 30px;"><b>TicketID - #${ticketId}</b></p>
          <a href="https://cloudcomputingclub.in/events-details">
          <button style="padding: 10px 25px; background-color: orange; border-radius: 8px; border: none; color: white; font-size: 18px;">
           Event Details </button>
          </a>
          <article style="margin-top: 40px; text-align: 'left'">
          <p  style="font-size: 16px;"><b>Note:</b> We'll verifying your TicketID on the event day, you could also checkout your registration details on the event page.</p>
          <br/>
            With Regards, <br />
            Cloud Computing Club, NIST
          </article>
          </center>
          </div>`,
        };
    }
    else {
        var mailOptions = {
            from: 'cloudcomputing@nist.edu',
            to,
            subject: 'NIST CCC | Thanks for Contacting!',
            html: `
          <div><center>
          <img src="https://i.ibb.co/VBCyyGk/logo-cutted.png" width="80" height="100" alt="nist-ccc" />
          <p style="font-size: 28px;">Hi<b> ${name}</b></p>
          <h3>We are glad to you for reaching us!</h3>
          <p style="font-size: 16px;">We're all a big family here, so make sure you could checkout our upcoming events.</p>
          <a href="https://nist-ccc.vercel.app/events">
          <button style="padding: 10px 25px; background-color: orange; border-radius: 8px; border: none; color: white; font-size: 18px;">
           Check Here </button>
          </a>
          <article style="margin-top: 40px; text-align: 'left'">
            With Regards, <br />
            Cloud Computing Club, NIST
          </article>
          </center>
          </div>`,
        };
    }
    try {
        return await smtpTransport.sendMail(mailOptions);
    }
    catch (e) {
        return null;
    }
};

exports.handler = function(event) {
    const praseData = JSON.parse(event.Records[0].body);
    if (praseData && praseData.ticket) {
        const { email, name, ticket } = praseData;
        return mailer(email, name, ticket, 'dynamodb');
    }
    else if (praseData.inputs && praseData.inputs.check && praseData.inputs.check === 'contact') {
        const { email, fullname } = praseData.inputs || {};
        return mailer(email, fullname);
    }
    else {
        return 0;
    };
};
