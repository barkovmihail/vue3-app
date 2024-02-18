<template>
  <div class="page__wrapper">
    <div
        class="page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
            'current-page': pageNumber === page
          }"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    },
    totalPages: {
      type: Number,
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('change', pageNumber)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px
}
.current-page {
  border: 2px solid teal;
}
</style>