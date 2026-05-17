import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const logMiddleware=(req,res,next)=>{
    const log=`[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    const logfile=path.join(__dirname,'../logs/request.log');
    fs.appendFile(logfile,log,(err)=>{
        if(err) console.error('Error writing to log file',err);
    })
    next();
}
export default logMiddleware;