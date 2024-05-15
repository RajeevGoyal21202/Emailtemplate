import nodemailer from "nodemailer"
export const sendEmail = async({email}:any)=>{

  const {sender,reciever,subject,body} = email;
    try{

 
    
        
        var transport = nodemailer.createTransport({
          service:"gmail",
          host: "smtp.gmail.com",
          auth: {
            user: "3241rajeev@gmail.com",
            pass: "otdl quzo mzmf pocb"
          }
        });
      const mailOptions ={
        from: "3241rajeev@gmail.com", 
        to: reciever,
        subject: subject,
        html: `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f6f6f6;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    overflow: hidden;
                }
                .header {
                    background-color: #007BFF;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .main {
                    padding: 20px;
                }
                .main h2 {
                    color: #333333;
                }
                .main p {
                    color: #666666;
                    line-height: 1.6;
                }
                .footer {
                    background-color: #f1f1f1;
                    color: #666666;
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    margin: 20px 0;
                    color: #ffffff;
                    background-color: #007BFF;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Zenmonk Employee</h1>
                </div>
                <div class="main">
                    <h2>Hello ${body},</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor sit amet nulla hendrerit aliquet. Curabitur ac urna in leo elementum tempor. Fusce quis nulla arcu.
                    </p>
                    <p>
                        Vivamus bibendum dui sed nisi convallis, a condimentum massa fermentum. Integer malesuada lacinia nisl, a feugiat nulla. Donec id metus sit amet urna congue egestas nec sed purus.
                    </p>
                    <a href="#" class="button">Call to Action</a>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                    <p>
                        1234 Street Name, City, State, 56789
                        <br>
                        <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                        <br>
                        <a href="https://zenmonk.tech/">www.yourcompany.com</a>
                    </p>
                </div>
            </div>
        </body>
      
        `
       // html body
      }
      const mailResponse = await transport.sendMail(mailOptions)
      return mailResponse
    }
    catch(err:any){
        throw new Error(err.message)

    }
}