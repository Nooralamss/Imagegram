import Aws from 'aws-sdk';
import serverConfig from './serverConfig.js';

const s3=new Aws.S3({
    region:'',
    accessKeyId:serverConfig.Aws_Access_key_id,
    secretAccesskey:serverConfig.Aws_Secret_Access_Key,

});
export default S3;