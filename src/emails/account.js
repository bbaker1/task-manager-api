const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ben.b.baker6@gmail.com',
        subject: 'Welcome to the Task Manager App!',
        text: `Welcome to the app, ${name}. Let me know how it goes!` // ES6 feature with backtics 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ben.b.baker6@gmail.com',
        subject: 'Sad to See You Go',
        text: `Goodbye ${name}, is there anything we could have done better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}