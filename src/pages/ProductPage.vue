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
      loader: false,
    };
  },
  created() {
    this.loader = true;
    // Call to api when page is created to get product info
    axios
      .get(`${this.store.baseUrl}/api/products/${this.$route.params.id}`)
      .then((resp) => {
        console.log(resp.data.results);
        this.product = resp.data.results;
      })
      .finally(() => {
        this.loader = false;
      });
    // show the content localStorage into the cart
    this.showStorage();
  },
  methods: {
    //Cart methods
    addToCart(product) {
      //Check if this product already exist into the localStorage
      if (localStorage.getItem(product.title)) {
        //set variable for store qauntity if the product is already into local storage
        let quantity = JSON.parse(localStorage.getItem(product.title)).quantity;
        localStorage.setItem(
          // create a new object but i increase the quantity
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
        // if it dosen't exists into localStorage i create a new object
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
      // refresh the cart using ShowStorage function
      this.showStorage();
    },
    // Show products into the cart and update the total price
    showStorage() {
      this.storageProducts = [];
      this.totPrice = 0;
      Object.keys(localStorage).forEach((key) => {
        this.storageProducts.push(JSON.parse(localStorage.getItem(key)));
        this.totPrice +=
          JSON.parse(localStorage.getItem(key)).price *
          JSON.parse(localStorage.getItem(key)).quantity;
      });
      console.log(this.storageProducts);
    },
    //clear the localStorage and refresh the cart
    removeAll() {
      localStorage.clear();
      this.showStorage();
      this.totPrice = 0;
    },
  },
};
</script>

<template>
  <h2 class="text-center mb-5">What's inside</h2>
  <h3 class="text-center" v-if="loader">Loading...</h3>
  <div v-else class="container">
    <div class="row">
      <div class="col-10">
        <div class="row mb-5">
          <div class="col-6">
            <img :src="product.image" alt="" />
          </div>
          <div class="col-6">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p
              class="alert w-25 text-center"
              :class="product.available ? 'alert-primary' : 'alert-warning'"
              role="alert"
            >
              {{ product.available ? "Available" : "No more avaliable" }}
            </p>
          </div>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-4">
            <p><strong>Price: </strong>{{ product.price }}€</p>
          </div>

          <div class="col-4 text-end">
            <button class="btn btn-primary" @click="addToCart(product)">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <!-- CART -->
      <div class="col-2">
        <div class="cart border p-2">
          <h5>YOUR CART</h5>
          <div v-if="storageProducts.length > 0">
            <div v-for="product in storageProducts">
              <p class="m-0"><strong>Product: </strong>{{ product.title }}</p>
              <p><strong>Quantity: </strong>{{ product.quantity }}</p>
            </div>
            <p><strong>Tot: </strong>{{ totPrice.toFixed(2) }}€</p>
            <button class="btn btn-danger mb-2" @click="removeAll">
              Remove All
            </button>
            <router-link :to="{ name: 'checkout' }"
              ><button class="btn btn-success">
                Go to checkout
              </button></router-link
            >
          </div>
          <h6 v-else>Add some So'Fa!</h6>
        </div>
      </div>
      <!-- END CART -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
