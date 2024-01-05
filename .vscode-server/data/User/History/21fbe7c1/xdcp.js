function timer(seconds) {
  const now = Date.new();
  const then = now + seconds * 1000;
  setInterval(() => {
      const secondsLeft = Math.round((then - Date.now())/ 1000);
  }, 1000);
}
