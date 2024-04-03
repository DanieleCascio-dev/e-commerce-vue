<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      product: {},
    };
  },
  created() {
    // console.log(this.$route.params.id);
    axios
      .get(`${this.store.baseUrl}/api/products/${this.$route.params.id}`)
      .then((resp) => {
        console.log(resp.data.results);
        this.product = resp.data.results;
      });
  },
};
</script>

<template>
  <h2 class="text-center mb-5">What's inside</h2>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img :src="product.image" alt="" />
      </div>
      <div class="col-6">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p
          class="alert w-50 text-center"
          :class="product.avaiable === true ? 'alert-primary' : 'alert-warning'"
          role="alert"
        >
          {{ product.avaiable ? "Avaiable" : "No more avaiable" }}
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-4">
        <p><strong>Price: </strong>{{ product.price }}€</p>
      </div>
      <div class="col-4"></div>
      <div class="col-4">
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
