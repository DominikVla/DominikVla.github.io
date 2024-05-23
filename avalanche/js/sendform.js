const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "dominicdomicity12@gmail.com",
    pass: "hyzt osrl byym yqgv",
  },
});

function test() {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <dominicdomicity12@gmail.com>', // sender address
      to: "dominikvlacha@gmail.com", // list of receivers
      subject: "Avalanche New Applicaiton", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);
}