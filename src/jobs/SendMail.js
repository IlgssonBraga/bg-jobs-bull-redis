const transporter = require('../config/mail');

module.exports = {
    key: 'sendMail',
    async handle(){
        await transporter.sendMail({
            from: 'alguem <teste@teste.com>',
            to: 'client@gmail.com',
            subject: 'Test subject',
            html: 'Message here'       
        });
    } 
}