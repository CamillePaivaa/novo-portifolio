<template>
  <PrimeiraSessao />
  <SegundaSessao />
  <Terceirasessao />
</template>

<script>
import PrimeiraSessao from "@/components/PrimeiraSessao.vue";
import SegundaSessao from "./SegundaSessao.vue";
import Terceirasessao from "./Terceirasessao.vue";

export default {
  name: "SobreMim",

  components: {
    PrimeiraSessao,
    SegundaSessao,
    Terceirasessao,
  },
};
</script>

<style scoped></style>
