<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      orders: [],
      loader: false,
    };
  },
  created() {
    this.loader = true;
    axios
      .get(`${this.store.baseUrl}/api/orders`)
      .then((resp) => {
        this.orders = resp.data.results.data;
      })
      .finally(() => {
        this.loader = false;
      });
  },
};
</script>

<template>
  <h2 class="text-center">Orders Page!</h2>
  <h3 class="text-center" v-if="loader">Loading...</h3>
  <div v-else class="container">
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
            <ul>
              <li
                v-for="product in order.products"
                v-if="order.products.length > 0"
              >
                {{ product.title }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
