import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

import { useAuth } from '~/contexts/auth';
import { removeHashFromColor } from '~/utils';

const AccountDropdown = () => {
  const { username } = useAuth();
  const { lightGrey, primary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(primary)}&name=${username}`}
        alt={`Conta de ${username}`}
      />
    </Container>
  );
};

export default AccountDropdown;
