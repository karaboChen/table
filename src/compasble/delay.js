import { customRef } from "vue";

// export const

export default function (initValue, delay) {
  let timer = null;
  let msg = customRef((track, trigger) => {
    return {
      get() {
        track();
        return initValue;
      },
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = value;
          trigger();
        }, delay);
      },
    };
  });

  return { msg };
}
