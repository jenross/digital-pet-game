const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }
    //built-in browser function; hey browswer, when idle, do this; diff from setTimeOut which is like stop everything
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
