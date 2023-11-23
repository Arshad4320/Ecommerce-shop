import { Joi, validate } from 'express-validation'

const productCreateValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().optional(),
        description: Joi.string().required(),
        cetagory: Joi.string().required(),
        size: Joi.string().optional().valid('small', 'medium','large'),
  }),
}

export const verifyCreateProduct = validate(productCreateValidation, {}, {})

const productUpdateValidation = {
    body: Joi.object({
        name: Joi.string().optional(),
        price: Joi.number().optional(),
        image: Joi.string().optional(),
        description: Joi.string().optional(),
        cetagory: Joi.string().optional(),
        size: Joi.string().optional().valid('small', 'medium','large'),
  }),
}

export const verifyUpdateProduct = validate(productUpdateValidation, {}, {})
