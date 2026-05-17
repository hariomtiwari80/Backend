import express from 'express';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import publicRoute from './routes/public.route.js';
import privateRoute from './routes/private.route.js';
import logMiddleware from './middleware/logMiddleware.js';

const app = express();
app.use(express.json());

const __filename=fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(!fs.existsSync(path.join(__dirname,'logs'))){
    fs.mkdirSync(path.join(__dirname,'logs'))
}
app.use(logMiddleware);


app.use('/public', publicRoute);
app.use('/private', privateRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});