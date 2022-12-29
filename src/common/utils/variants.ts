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
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      delay: .25,
    duration: .5
    },
  },
};
