import { transitions } from 'polished';

import { DEFAULT_TRANSITION } from '~/constants';

export const CONTAINER_ANIMATION = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      ...DEFAULT_TRANSITION,
      mass: 1.3,
    },
  },
};

export const CARDS_ANIMATION = {
  unMounted: { x: -20, opacity: 0 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
      mass: 1.6,
    },
  },
};

export const BUTTON_ANIMATION = {
  unMounted: { x: 20, opacity: 0 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
      mass: 1.6,
    },
  },
};
