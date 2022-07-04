import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup.string().email().required("Email is required!!!"),
  password: yup.string().min(5).max(15).required()
});
