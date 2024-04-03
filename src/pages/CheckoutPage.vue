<script>
export default {
  data() {
    return {
      totPrice: 0,
      storageProducts: [],
    };
  },
  created() {
    this.showStorage();
  },
  methods: {
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
      <button type="submit" class="btn btn-success">Buy</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
