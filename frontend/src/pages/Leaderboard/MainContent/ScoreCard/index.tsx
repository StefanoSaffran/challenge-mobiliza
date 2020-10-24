import React from 'react';

import { FiStar } from 'react-icons/fi';

import { Container } from './styles';

import { USerScore } from '..';

type CardProps = {
  index: number;
  user: USerScore;
  id: string;
};

const ScoreCard = ({ index, user, id }: CardProps) => {
  return (
    <Container highlight={id === user.id}>
      <div>
        <span>{index + 1}</span>
        <span>{user.username}</span>
      </div>
      <div>
        {user.score === 100 && <FiStar size={18} />}
        <span>{user.score}</span>
      </div>
    </Container>
  );
};

export default ScoreCard;
