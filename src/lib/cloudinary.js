import {v2 as cloudinary} from "cloudinary"
import 'dotenv/config'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME ,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.LOUDINARY_API_SECRE

})

export default cloudinary