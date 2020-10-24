import React, { useState, useEffect } from 'react';

import { Container, AnimatedContainer } from './styles';
import { CONTAINER_ANIMATION } from './animation';
import ScoreCard from './ScoreCard';

import Loading from '~/components/Loading';
import { useAuth } from '~/contexts/auth';
import api from '~/services/api';

export type USerScore = {
  id: string;
  username: string;
  score: number;
};

const MainContent: React.FC = () => {
  const { user } = useAuth();
  const [scores, setScores] = useState<USerScore[]>([]);

  useEffect(() => {
    api.get<USerScore[]>('/score').then(({ data }) => setScores(data));
  }, []);

  return !scores.length ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <h3>Leaderboard</h3>

      <div>
        {scores.map((userInfo, index) => (
          <ScoreCard
            key={userInfo.id}
            user={userInfo}
            index={index}
            id={user.id || '0'}
          />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default MainContent;
