import { FC } from 'react';
import {
  Button,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Input from 'components/Forms/Input';
import PasswordInput from 'components/Forms/PasswordInput';
import styles from './index.module.css';
import {
  Formik,
  FormikHelpers,
  Form,
} from 'formik';
interface Values {
  email: string;
  password: string;
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/, "Password must be at least 8 characters long, contain at least one digit, one lowercase and one uppercase letter.").required('Required'),
  repeat_password:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
});
const Login: FC = () => {
  return (
    <Box w="100%" maxW={400} m="auto">
      <Heading as="h2" size="xl">
        Register
      </Heading>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
          actions.setSubmitting(true);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="mrbeauregard@s2e4.com"
            />
            <PasswordInput
              label="Password"
              name="password"
              placeholder="********"
            />
            <PasswordInput
              label="Repeat password"
              name="repeat_password"
              placeholder="********"
            />
            <Button
            mt={4}
            isLoading={props.isSubmitting}
            type='submit'
            disabled={!props.isValid}
            variant="large"
            bg="brand"
          >
            Register
          </Button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/login"><Text mt={4} textAlign="center" color="gray.500" fontSize="md">Sign in</Text></Link>
    </Box>
  );
};
export default Login;
