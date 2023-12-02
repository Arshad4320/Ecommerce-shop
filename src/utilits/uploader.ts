/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer'
import path from 'path'
import { IUploadFile } from '../types'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import config from '../config'

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
})

const DEFAULT_ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png']
const DEFAULT_MAX_FILE_SIZE = 1024 * 1024 * 5 // 5MB

const uploader = ({
  allowedFileTypes = DEFAULT_ALLOWED_FILE_TYPES,
  errorMessage = 'Invalid file type',
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  uploadPath = 'uploads',
}: IUploadFile) => {
  const UPLOADS_FOLDER = path.join(__dirname, `../../public/${uploadPath}`)

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads', // Change this to your desired folder name
      allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
      transformation: [{ width: 500, height: 500, crop: 'limit' }],
    } as Params, // Type assertion
  })

  const fileFilter = (req: any, file: any, cb: any) => {
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error(errorMessage))
    }
  }

  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxFileSize,
    },
  })
  return upload
}

export default uploader
