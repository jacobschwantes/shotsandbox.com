export const staggerContainer = {
  hidden: {
    WebkitTransformStyle: "preserve-3d",
    MozTransformStyle: "preserve-3d",
    TransformStyle: "preserve-3d",
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
      duration: 0,
    },
    transitionEnd: {
      WebkitTransformStyle: "flat",
      MozTransformStyle: "flat",
      TransformStyle: "flat",
    },
  },
};
export const staggerContainerSlow = {
  hidden: {
    WebkitTransformStyle: "preserve-3d",
    MozTransformStyle: "preserve-3d",
    TransformStyle: "preserve-3d",
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      duration: 0,
    },
    transitionEnd: {
      WebkitTransformStyle: "flat",
      MozTransformStyle: "flat",
      TransformStyle: "flat",
    },
  },
};
export const slideUp = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 150,
      mass: 1,
      restDelta: 0.01,
    },
  },
};
export const slideUpSlow = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 150,
      mass: 1,
      restDelta: 0.01,
    },
  },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
};
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.25,
      duration: 0.4,
    },
  },
};
export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 0.55;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
