export const useTimer = () => {
  const timer = ref(0);
  let intervalhandler: ReturnType<typeof setInterval> | null = null;
  let startTime: number | null = null;

  const start = () => {
    if (intervalhandler) return;
    startTime = Date.now();
    intervalhandler = setInterval(() => {
      const currentTime = Date.now();
      if (!startTime) return;
      timer.value = Math.floor((currentTime - startTime));
    }, 1);
  };

  const stop = () => {
    if (!intervalhandler) return;
    clearInterval(intervalhandler);
    intervalhandler = null;
    startTime = null;
  };

  const reset = () => {
    if (!intervalhandler) return;
    clearInterval(intervalhandler);
    intervalhandler = null;
    startTime = null;
    timer.value = 0;
  };

  onBeforeUnmount(() => {
    if (!intervalhandler) return;
    clearInterval(intervalhandler);
    intervalhandler = null;
    startTime = null;
  });

  return { timer, start, stop, reset };
}
