import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { transform } from 'framer-motion';

import { ANIMATION } from './animations';
import { AnimatedContainer, Form, SignInButton } from './styles';
import AuthLayout from '../_layouts/auth';

import { Mobiliza } from '~/assets';
import { useAuth } from '~/contexts/auth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');

  const history = useHistory();
  const { colors } = useTheme();
  const { signIn } = useAuth();

  const inputRange = [0, 4];
  const outputRange = [colors.lightGrey, colors.primaryLight];
  const animateBackground = transform(inputRange, outputRange);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signIn(username);
    history.push('/values');
  };

  return (
    <AuthLayout background={animateBackground(username.length)}>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <Mobiliza />
        </h1>

        <h2>Hey there, its nice to see you here! Please, tell me your name.</h2>

        <Form onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <SignInButton type="submit" disabled={!username}>
            Submit
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default Login;
