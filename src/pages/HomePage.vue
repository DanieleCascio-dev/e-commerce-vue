<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      products: [],
      curPage: 1,
      totPage: 1,
      loader: false,
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
      this.loader = true;
      axios
        .get(`${this.store.baseUrl}/api/products/`, {
          params: paramsToSend,
        })
        .then((resp) => {
          this.products = resp.data.results.data;
          this.totPage = resp.data.results.last_page;
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
};
</script>

<template>
  <h1 class="text-center _mb">
    You went So Far, <br />
    take a So'Fa and relax!
  </h1>
  <h3 class="text-center mb-5" v-if="loader">Loading...</h3>
  <div v-else class="container">
    <!-- Row -->
    <div class="row">
      <div v-for="product in products" class="col-4 mb-4">
        <!-- Card -->
        <div class="card w-100" style="height: 650px">
          <img
            :src="product.image"
            class="card-img-top"
            style="height: 350px"
          />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <button class="btn btn-primary">See details</button>
            </router-link>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Row -->
    <!-- biggest container of impagination  -->
    <nav
      v-show="totPage > 1"
      class="pb-3"
      aria-label="Result page for projects"
    >
      <!-- container impagination -->
      <ul class="pagination justify-content-end m-0">
        <li class="page-item" :class="{ disabled: curPage === 1 }">
          <!-- btn back  -->
          <a
            tabindex="-1"
            class="page-link"
            href=""
            @click.prevent="getProducts(curPage - 1)"
            ><-</a
          >
        </li>
        <li
          v-for="page in totPage"
          class="page-item"
          :class="{ active: page === curPage }"
        >
          <!-- btn numbers  -->
          <a class="page-link" href="" @click.prevent="getProducts(page)"
            >{{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: curPage === totPage }">
          <!-- btn forward  -->
          <a
            tabindex="-1"
            class="page-link"
            href=""
            @click.prevent="getProducts(curPage + 1)"
            >-></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
._mb {
  margin-bottom: 50px;
}
</style>
