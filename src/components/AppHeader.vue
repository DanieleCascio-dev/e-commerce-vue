<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">SO'FA!</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'orders' }"
            >Orders</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
