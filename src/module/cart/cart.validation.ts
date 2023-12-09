import { Joi, validate } from 'express-validation'
const CartValidation = {
  body: Joi.object({
    productId: Joi.string().required(),
  }),
}

export const verifyCart = validate(CartValidation, {}, {})
