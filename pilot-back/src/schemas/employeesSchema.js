import Joi from "joi";

const employeeSchema =Joi.object({
    name: Joi.string().required(),
    wage: Joi.number().required(),
})

export default employeeSchema;