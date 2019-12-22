/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from 'yup';
import { fieldNames } from './enumerations';

export const validationSchema = yup.object().shape({
  [fieldNames.userName]: yup.string().required(),
  [fieldNames.password]: yup.string().required(),
});
