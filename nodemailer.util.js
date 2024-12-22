import nodemailer from 'nodemailer'


//helper functions
export const sendVerifyMail=async(name,email,id)=>{
    console.log('inside serndverify util')
    console.log(name,email,id)

    try {

      const transporter=  nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'akashes5753279@gmail.com',
                pass:'requ yygm kkpr sxfa',
            }
        })

        const mailOptions = {
            from: 'akashes5753279@gmail.com',
            to:email,
            subject:'For Verification mail',
            html:'<p>Hi '+ name +' , please click here to <a href="http://127.0.0.1:8080/api/v1/user/verify?id='+id+'"> Verify </a> your mail. </p> '
        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error)
            }else{
                console.log("Email has been sent :- ", info.response)
            }

        })
        
    } catch (error) {
        console.log(error)
        
    }

}
-----------------------------------------------------------------------------
    import nodemailer from 'nodemailer'

const html = `

<h1> Hello world </h>
<p>Isnt nodemailer useful? </p>
<img src='akashes5753279@gmail.com' width="400" />

`

async function main() {
   const transporter= nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure: false,
        requireTLS:true,
        auth:{
          
            user: 'akashes5753279@gmail.com',
            pass:"password"
        }
    })

  const info =  await transporter.sendMail({

    from:"akashes5753279@gmail.com",
    to:"esakash80@gmail.com",
    subject:"Testing 123",
    html:html,
    attachments:[
        {filename: 'image.png', path: './image.png',cid:'akashes5753279@gmail.com'},
    ]

    })
    console.log('message sent', info.messageId)
    
    
}
main().catch(e=>console.log(e))

