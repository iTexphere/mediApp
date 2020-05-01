import { IPostRegisterDto } from '../../../src/dto';
import { EMAIL_REGEX, Phone_REGEX } from '../../../utils';

/**
 * Create Error Objects for the form inputs
 * @param values - current state of the form
 */
export const validator = (values: IPostRegisterDto) => {
  const errors: any = {};

  (Object.keys(values) as Array<keyof typeof values>).map(key => {
    // Ignoring `role` because it is already a contant value
    if (key !== 'role') {
      const value = values[key];
      if (!value || (value && value.length === 0)) {
        errors[key] = `${key} is required`;
      }
      if (key === 'email') {
        const isValid = EMAIL_REGEX.test('' + values['email'].toLowerCase());
        if (!isValid) errors[key] = 'Email is not valid';
      }
      if (key === 'mobile_number') {
        const isValid = Phone_REGEX.test(
          '' + values['mobile_number'].toLowerCase()
        );
        if (!isValid) errors[key] = 'Phone number is not valid';
      }
    }
  });
  return errors;
};
