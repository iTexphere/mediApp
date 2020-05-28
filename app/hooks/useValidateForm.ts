import { useState } from 'react';
import { IPostRegisterDto } from '../src/dto';

export const useValidateForm = (
  cb: any,
  initalState: IPostRegisterDto,
  validate: any
) => {
  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState(<any>{});

  const onChange = (content: string, field: string) => {
    setValues({ ...values, [field]: content });
  };

  const onSubmit = () => {
    const errors = validate(values);
    console.log( "values", values  )
    if (Object.keys(errors).length === 0) {
      cb(values);
      //setValues(initalState);
    } else {
      setErrors(validate(values));
    }
  };

  return {
    onChange,
    onSubmit,
    errors,
    values
  };
};
