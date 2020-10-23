import React, { ChangeEvent, useCallback, useState } from 'react';

import { FiCheck } from 'react-icons/fi';

import {
  AnimatedContainer,
  AnimatedWrapper,
  AnimatedButtonWrapper,
  SubmitButton,
} from './styles';
import {
  CONTAINER_ANIMATION,
  CARDS_ANIMATION,
  BUTTON_ANIMATION,
} from './animation';

import Checkbox from '~/components/Checkbox';
import { useAuth } from '~/contexts/auth';
import { CHECKBOX_OPTIONS } from '~/constants';
import api from '~/services/api';

type Values = {
  [key: string]: boolean;
};

const MainContent: React.FC = () => {
  const { user, addUserID } = useAuth();
  const [selectedValues, setSelectedValues] = useState<Values>({} as Values);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSelectedValues(oldState => ({
        ...oldState,
        [event.target.name]: event.target.checked,
      }));
    },
    [],
  );

  async function handleSubmit() {
    let score = 100;

    const selected = Object.keys(selectedValues).length;

    if (selectedValues['expertise-na-gestao-de-projetos']) {
      score = 0;
    } else {
      switch (selected) {
        case 3:
          score = 75;
          break;
        case 2:
          score = 50;
          break;
        case 1:
          score = 25;
          break;
        case 0:
          score = 0;
          break;
        default:
          break;
      }
    }

    try {
      const { data } = await api.post('/score', {
        username: user.username,
        score,
      });

      addUserID(data.id);
    } catch {}
  }

  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <h3>
        What a beautiful name you have, <b>{user.username}!</b> Now, please
        answer the following question and we&apos;re good.
      </h3>
      <br />
      <p>What are all of Mobiliza core values?</p>

      <div>
        {Object.entries(CHECKBOX_OPTIONS).map(([key, value]) => (
          <AnimatedWrapper key={key} variants={CARDS_ANIMATION}>
            <Checkbox
              id={value.name}
              type="checkbox"
              name={value.name}
              checked={selectedValues[value.name]}
              onChange={handleChange}
            />
            <label htmlFor={value.name}>
              <div>
                <FiCheck size={16} />
              </div>
              {value.label}
            </label>
          </AnimatedWrapper>
        ))}
      </div>

      <AnimatedButtonWrapper variants={BUTTON_ANIMATION}>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </AnimatedButtonWrapper>
    </AnimatedContainer>
  );
};

export default MainContent;
