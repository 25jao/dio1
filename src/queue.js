import 'dotenv/config';
import Queue from './app/lib/queue';
import registrationMail from './app/jobs/registrationMailer';

Queue.process(registrationMail);
