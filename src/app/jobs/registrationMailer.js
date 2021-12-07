import nail from '../lib/Mail';
export default {
    key: 'Resgistration',
    options:{
        delay: 10,
        priority: 3,
        
    },
    async handle({data}){
        const {user} = data;
        await nail.sendMail({
            text: "Beleza?",
            subject: "Cadastro",
            from: 'Eu <fireshot0x@gmail.com>',
            to: user.email 
        })
    }

}