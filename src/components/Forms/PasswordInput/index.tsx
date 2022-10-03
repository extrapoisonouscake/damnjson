import { useField, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
interface ICustomFieldProps {
  label: string;
  name: string;
  placeholder?: string;
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
  const [shown, setShown] = useState<boolean>(false);
  return (
    <Field
      name={field.name}
      validate={validate ? (value: string) => validate(value) : undefined}
    >
      {() => (
        <FormControl isInvalid={meta.touched && !!meta.error}>
          <FormLabel>{label}</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={shown ? 'text' : 'password'}
              placeholder={placeholder}
              {...field}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.5rem" size="sm" onClick={() => setShown(!shown)}>
                {shown ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
export default CustomInput;
