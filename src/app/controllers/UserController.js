import nodemon from 'nodemon';
import passwordGenerator from 'password-Generator';
import nail from '../lib/Mail';
import Queue from '../lib/queue';


export default{
    async store(req, res){
        const {name, email} = req.body;
        const user = {
            name,
            email,
            password : passwordGenerator(15, false)
        };

        /*await nail.sendMail({
            text: "Beleza?",
            subject: "Cadastro",
            from: 'Eu <fireshot0x@gmail.com>',
            to: email 
        })*/

        await Queue.add('Resgistration', {user});

        return res.json(user);
    }
}