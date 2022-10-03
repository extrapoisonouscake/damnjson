import { FC } from 'react';
import {
  Button,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';
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
  password:Yup.string().required('Required')
});
const Login: FC = () => {
  return (
    <Box w="100%" maxW={400} m="auto">
      <Heading as="h2" size="xl">
        Sign in
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
            <Button
            mt={4}
            isLoading={props.isSubmitting}
            type='submit'
            disabled={!props.isValid}
            variant="large"
          >
            Sign in
          </Button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/register"><Text mt={4} textAlign="center" color="gray.500" fontSize="md">Register</Text></Link>
    </Box>
  );
};
export default Login;
