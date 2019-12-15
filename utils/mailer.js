const nodemailer = require("nodemailer");

module.exports = (req, res, next) => {
    const { email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "brando.endonaa@gmail.com",
            pass: "brandoendona1999!"
        }
    });

    const output = `
        <p>From: <span>${email}</span></p> 
        <p>Subject: <span>${subject}</span></p> 
        <p>Message: <span>${message}</span></p> 
    `;

    const mailOptions = {
        from: "brando.endonaa@gmail.com", // sender address
        to: "brando.endona.dev@gmail.com", // list of receivers
        subject: "EMAIL FROM PORTFOLIO", // Subject line
        html: output // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        res.redirect("/");
    });
};
