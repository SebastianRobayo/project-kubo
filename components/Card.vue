<template>
  <div :class="direction">
    <img :src="image" alt="Imagen del componente" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "left",
    },
  },
};
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: row;
}

.right {
  display: flex;
  flex-direction: row-reverse;
}
</style>
