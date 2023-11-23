import { Joi, validate } from "express-validation";

const cetagoryValidation = {
    body: Joi.object({
      name: Joi.string().required(),
   
    })
}
export const verifyCeatogory=validate(cetagoryValidation,{},{})