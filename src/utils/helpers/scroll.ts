/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
export const ScrollTo = (to: number, duration = 800): void => {
  const element = document.scrollingElement || document.documentElement;
  const start = element.scrollTop;
  const change = to - start;
  const startDate = +new Date();
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animateScroll = () => {
    const currentDate = +new Date();
    const currentTime = currentDate - startDate;

    element.scrollTop = parseInt(
      easeInOutQuad(currentTime, start, change, duration),
      10
    );
    if (currentTime < duration!) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };
  animateScroll();
};

export const scrollToPageEnd = (duration?: number): void => {
  const element = document.scrollingElement || document.documentElement;
  const endOfThePageTop = element.scrollHeight;
  ScrollTo(endOfThePageTop, duration);
};

export const scrollToPageStart = (duration?: number): void => {
  ScrollTo(0, duration);
};
