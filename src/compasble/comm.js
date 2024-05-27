import { ref } from "vue";

export const sd = (a, b) => {
  const vv = ref(0);

  function name(a, b) {
    console.log(a + b);
    vv.value = a + b;
  }

  return { vv, name };
};

export const ww = ref(0)
