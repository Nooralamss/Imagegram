import multer from 'multer';
import multerS3 from"multer-s3";
import {s3} from "./awsConfig.js";
import {AWS_BUKET_NAME} from "./serverConfig.js";

export const s3uploader=multer({
    storage:multerS3({
        s3:s3,
        key:function (req,file,cb){
            console.log(file);
            const uniqueSuffix=Date.now()+ "_"+ matchMedia.round(Math.random()*1e9);
            cb(null, file.fieldname + "_"+ uniqueSuffix + "."+ file.mimetype.split("/")[1]);
            
        }
    })
})