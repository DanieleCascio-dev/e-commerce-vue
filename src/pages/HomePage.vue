<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(`${this.store.baseUrl}/api/products`).then((resp) => {
      console.log(resp);
    });
  },
};
</script>

<template>
  <h1>Home page</h1>
</template>

<style lang="scss" scoped></style>
