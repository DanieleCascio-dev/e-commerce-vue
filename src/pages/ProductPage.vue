<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      product: {},
      storageProducts: [],
      totPrice: 0,
    };
  },
  created() {
    // Call to api when page is created to get product info
    axios
      .get(`${this.store.baseUrl}/api/products/${this.$route.params.id}`)
      .then((resp) => {
        console.log(resp.data.results);
        this.product = resp.data.results;
      });
    // show the content localStorage into the cart
    this.showStorage();
  },
  methods: {
    //Cart methods
    addToCart(product) {
      if (localStorage.getItem(product.title)) {
        //set variable for store qauntity if the product is already into local storage
        let quantity = JSON.parse(localStorage.getItem(product.title)).quantity;
        localStorage.setItem(
          product.title,
          JSON.stringify({
            id: product.id,
            title: product.title,
            image: product.image,
            description: product.description,
            price: product.price,
            avaiable: product.avaiable,
            quantity: quantity + 1,
          })
        );
      } else {
        localStorage.setItem(
          product.title,
          JSON.stringify({
            id: product.id,
            title: product.title,
            image: product.image,
            description: product.description,
            price: product.price,
            avaiable: product.avaiable,
            quantity: 1,
          })
        );
      }
      console.log(localStorage);
      this.showStorage();
    },
    /* Show products into the cart */
    showStorage() {
      this.storageProducts = [];
      Object.keys(localStorage).forEach((key) => {
        this.storageProducts.push(JSON.parse(localStorage.getItem(key)));
        this.totPrice += JSON.parse(localStorage.getItem(key)).price;
      });
      console.log(this.storageProducts);
    },
  },
};
</script>

<template>
  <h2 class="text-center mb-5">What's inside</h2>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-6">
            <img :src="product.image" alt="" />
          </div>
          <div class="col-6">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p
              class="alert w-50 text-center"
              :class="
                product.avaiable === true ? 'alert-primary' : 'alert-warning'
              "
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
            <button class="btn btn-primary" @click="addToCart(product)">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <!-- CART -->
      <div class="col-2">
        <div class="cart">
          <h5>YOUR CART</h5>
          <div v-if="storageProducts.length > 0">
            <div v-for="product in storageProducts">
              <p class="m-0"><strong>Product: </strong>{{ product.title }}</p>
              <p><strong>Quantity: </strong>{{ product.quantity }}</p>
            </div>
            <p><strong>Tot: </strong>{{ totPrice }}€</p>
            <router-link :to="{ name: 'checkout' }"
              ><button class="btn btn-success">
                Go to checkout
              </button></router-link
            >
          </div>
        </div>
      </div>
      <!-- END CART -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
