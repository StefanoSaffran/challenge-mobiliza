import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

import { useAuth } from '~/contexts/auth';
import { removeHashFromColor } from '~/utils';

const User = () => {
  const { user } = useAuth();
  const { lightGrey, primary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(primary)}&name=${user.username}`}
        alt={`Conta de ${user.username}`}
      />
    </Container>
  );
};

export default User;
