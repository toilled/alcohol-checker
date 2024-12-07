import { createEffect, createSignal } from "solid-js";
import { css } from "solid-styled";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  let currentTime = new Date().getTime()
  const [soberTime, setSoberTime] = createSignal(() => new Date(currentTime).toLocaleTimeString());

  createEffect(() => {
    if (count() == 0) {
      let currentTime = new Date().getTime()
      setSoberTime(new Date(currentTime).toLocaleTimeString())
    } else {
      let currentTime = new Date().getTime();
      setSoberTime(new Date(currentTime + (count() + 1) * 60 * 60 * 1000).toLocaleTimeString());
    }
  });

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>
        Units: {count()}
      </button>
      <footer>
        You'll be sober  {soberTime()}
      </footer>
    </>
  );
}
