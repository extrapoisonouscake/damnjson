import { useField, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FC } from 'react';
interface ICustomFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?:'text' | 'email';
  validate?: (value: string) => string | undefined;
}

const CustomInput: FC<ICustomFieldProps & JSX.IntrinsicElements['input']> = ({
  label,
  validate,
  placeholder,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <Field name={field.name} validate={validate ? (value:string) => validate(value) : undefined}>
      {() => (
        <FormControl isInvalid={meta.touched && !!meta.error}>
          <FormLabel>{label}</FormLabel>
          <Input autoComplete="" type={type} {...field} placeholder={placeholder}  />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
export default CustomInput;
