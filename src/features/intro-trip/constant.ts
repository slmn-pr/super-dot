export const ANIMATE_FADE_IN_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const STAGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
