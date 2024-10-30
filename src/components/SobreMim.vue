<template>
  <PrimeiraSessao />

  <Terceirasessao />
</template>

<script>
import PrimeiraSessao from "@/components/PrimeiraSessao.vue";

import Terceirasessao from "./Terceirasessao.vue";

export default {
  name: "SobreMim",

  components: {
    PrimeiraSessao,

    Terceirasessao,
  },
};
</script>

<style scoped></style>
