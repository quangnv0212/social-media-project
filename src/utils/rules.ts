import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

export const loginSchema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });
  export type Schema = yup.InferType<typeof loginSchema>
