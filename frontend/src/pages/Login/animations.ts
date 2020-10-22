import { DEFAULT_TRANSITION } from '~/constants';

export const ANIMATION = {
  unMounted: { opacity: 0, y: 50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      ...DEFAULT_TRANSITION,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      ...DEFAULT_TRANSITION,
    },
  },
};
