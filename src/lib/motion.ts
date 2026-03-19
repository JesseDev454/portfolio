export const standardEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: standardEase,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -36, y: 12 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.58,
      ease: standardEase,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 36, y: 12 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.58,
      ease: standardEase,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const revealViewport = {
  once: true,
  amount: 0.2,
};
