import Joi from "joi";

const storeSchema =Joi.object({
    name: Joi.string().required()
})

export default storeSchema;