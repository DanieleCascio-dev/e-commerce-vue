<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      totPrice: 0,
      storageProducts: [],
      client: "",
      productInfo: [], // it will contains id and quantity of all products into localStorage
      data: {}, // data to send with axios post call
      loader: false,
    };
  },
  created() {
    this.showStorage(); // show the cart when page is created
  },
  methods: {
    // another function to show cart but also to set values for productInfo
    showStorage() {
      this.storageProducts = [];
      Object.keys(localStorage).forEach((key) => {
        this.storageProducts.push(JSON.parse(localStorage.getItem(key)));
        this.totPrice +=
          JSON.parse(localStorage.getItem(key)).price *
          JSON.parse(localStorage.getItem(key)).quantity;
        this.productInfo.push({
          id: JSON.parse(localStorage.getItem(key)).id,
          quantity: JSON.parse(localStorage.getItem(key)).quantity,
        });
      });
    },
    //Prepare and send data to database with api
    sendData() {
      this.data = {
        client: this.client,
        date: new Date().toLocaleDateString(),
        total: this.totPrice,
        productInfo: this.productInfo,
      };
      this.loader = true;
      axios
        .post(`${this.store.baseUrl}/api/order`, this.data)
        .then((resp) => {
          if (resp.data.success) {
            //if payemnt is success reset localStorage and productInfo then show Thank you Page
            this.productInfo = [];
            localStorage.clear();
            this.$router.push("/thankyou");
          }
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
};
</script>

<template>
  <h2 class="text-center mb-5">Checkout!</h2>
  <div class="cart ms-4 p-3">
    <h5>YOUR CART</h5>
    <div v-if="storageProducts.length > 0" class="row">
      <div class="col" v-for="product in storageProducts">
        <p class="m-0"><strong>Product: </strong>{{ product.title }}</p>
        <p><strong>Quantity: </strong>{{ product.quantity }}</p>
      </div>
      <p><strong>Tot: </strong>{{ totPrice }}€</p>
    </div>
  </div>
  <div class="container">
    <h4 class="text-center mb-4">Before you buy:</h4>
    <form>
      <div class="row mb-5">
        <div class="col">
          <input
            required
            type="text"
            class="form-control"
            placeholder="First name"
            v-model="client"
          />
        </div>
        <div class="col">
          <input
            required
            type="text"
            class="form-control"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <input
            required
            type="text"
            class="form-control"
            placeholder="Address"
          />
        </div>
        <div class="col">
          <input required type="text" class="form-control" placeholder="City" />
        </div>
      </div>
      <button class="btn btn-success" @click.prevent="sendData">Buy</button>
    </form>
    <h3 v-if="loader" class="text-center">Checking for your payment...</h3>
  </div>
</template>

<style lang="scss" scoped></style>
