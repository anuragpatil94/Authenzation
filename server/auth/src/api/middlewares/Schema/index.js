import Joi from "@hapi/joi";
import { constants } from "../../../util";

const SignUpSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .required(),
  lastName: Joi.string()
    .alphanum()
    .required(),
  middleName: Joi.string().alphanum(),
  username: Joi.string()
    .alphanum()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .strict(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .strict()
});

export default {
  [constants.APIROUTES.AUTH.SIGNUP]: SignUpSchema
};
