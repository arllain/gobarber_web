import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter your full name'),
  email: Yup.string()
    .email('Please, enter a valid eamil')
    .required('Enter your email'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Enter your password'),
});
export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your passwaord" />
        <button type="submit">Create accout</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
