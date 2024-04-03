<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      products: [],
    };
  },
  created() {
    // axios call to get all products
    axios.get(`${this.store.baseUrl}/api/products`).then((resp) => {
      // console.log(resp.data.results.data);
      this.products = resp.data.results.data;
      console.log(this.products);
    });
  },
};
</script>

<template>
  <h1>Home page</h1>
  <div class="container">
    <div class="row">
      <div v-for="product in products" class="col-3">
        <h2>
          {{ product.title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
