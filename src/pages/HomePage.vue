<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      products: [],
      curPage: 1,
    };
  },
  created() {
    this.getProducts(1);
  },
  methods: {
    //Function for pagination
    getProducts(pageNum) {
      this.curPage = pageNum;
      const paramsToSend = {
        page: pageNum,
      };
      // axios call to get all products
      axios
        .get(`${this.store.baseUrl}/api/products/`, {
          params: paramsToSend,
        })
        .then((resp) => {
          console.log(resp.data.results.data);
          this.products = resp.data.results.data;
          console.log(this.products);
        });
    },
  },
};
</script>

<template>
  <h1 class="text-center mb-3">Sofa and Sofa!</h1>
  <div class="container">
    <div class="row">
      <div v-for="product in products" class="col-4 mb-2">
        <div class="card w-100" style="min-height: 478px">
          <img :src="product.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.description.slice(0, 100) }}
            </p>
            <router-link :to="{ name: 'product' }">
              <button class="btn btn-primary">See details</button>
            </router-link>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
        <!-- <h2>
          {{ product.title }}
        </h2>
        <div>
          <img :src="product.image" alt="" />
        </div>
        <p>{{ product.description.slice(0, 100) }} ...</p>
        <p>{{ product.price }}€</p> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
