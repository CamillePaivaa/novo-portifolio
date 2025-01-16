<template>
  <PrimeiraSessao />
  <Segundasessao />
</template>

<script>
import PrimeiraSessao from "@/components/PrimeiraSessao.vue";

import Segundasessao from "./Segundasessao.vue";

export default {
  name: "SobreMim",

  components: {
    PrimeiraSessao,
    Segundasessao,
  },
};
</script>

<style scoped></style>
