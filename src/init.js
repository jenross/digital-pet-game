import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    //built-in browser function; hey browswer, when idle, do this; diff from setTimeOut which is like stop everything
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
