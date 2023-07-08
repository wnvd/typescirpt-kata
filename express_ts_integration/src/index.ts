import express, { Request, Response } from 'express';
import { router } from './routes/login';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ajjvl'] }));

app.use(router);


app.listen(3000, () => {
    console.log('listening at port 3000');
});
