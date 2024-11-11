let navSlide = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

let staggerSlide = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

let logoSlide = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

let liSlideDown = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

let btnSlide = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

let slideUp = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

let imgBg = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4
    }
  },
};

let imgAni = {
  offscreen: {
    opacity: 0,
    y: 100,
    x: -200,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8
    }
  },
  hover: {
    x: 30,
    y: -30,
    scale: 1.2,
    rotate: 15,
    transition: {
      duration: 0.8,
      scale: {
        duration: 0.8
      }
    },
  },
};
export {
  navSlide,
  liSlideDown,
  logoSlide,
  btnSlide,
  staggerSlide,
  slideUp,
  imgBg,
  imgAni,
};