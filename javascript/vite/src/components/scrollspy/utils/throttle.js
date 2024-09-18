export const throttle = (callback, limit) => {
  var tick = false;
  return () => {
    if (!tick) {
      callback();
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit ?? 1);
    }
  };
};