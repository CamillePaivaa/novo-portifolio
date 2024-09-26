<template>
  <HeaderPrincipal />
  <RouterView></RouterView>
</template>

<script>
import HeaderPrincipal from "./components/HeaderPrincipal.vue";

export default {
  name: "App",

  components: {
    HeaderPrincipal,
  },
};
</script>
