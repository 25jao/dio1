import nodemailer from 'nodemailer';
import mailconfig from '../../config/mail';

export default nodemailer.createTransport({
    host: mailconfig.host,
    port: mailconfig.port,
    secure: false,
    auth: {
        user: mailconfig.auth.user,
        pass: mailconfig.auth.pass
    },
    tls: {
        rejectUnauthorized: false
    },
});