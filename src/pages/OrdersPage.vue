<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      orders: [],
    };
  },
  created() {
    axios.get(`${this.store.baseUrl}/api/orders`).then((resp) => {
      console.log(resp);
      this.orders = resp.data.results.data;
      console.log(this.orders);
    });
  },
};
</script>

<template>
  <div>Orders page!</div>
  <div class="container">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Client</th>
          <th scope="col">Date</th>
          <th scope="col">Total</th>
          <th scope="col">Products</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.client }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.total }} €</td>
          <td>
            <span
              v-for="product in order.products"
              v-if="order.products.length > 0"
              >{{ product.title }}</span
            >
            <span v-else>No products</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
