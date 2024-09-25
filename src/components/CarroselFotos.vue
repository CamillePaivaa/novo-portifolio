<template>
  <div class="carrossel-container">
    <img
      class="setas"
      src="../assets/seta-lefth.png"
      @click="anterior"
      :disabled="imagemAtual === 0"
    />
    <div class="carrossel">
      <img
        :src="imagens[imagemAtual]"
        alt="Imagem do Carrossel"
        class="imagem"
      />
    </div>
    <img
      class="setas"
      src="../assets/seta-right.png"
      @click="proximo"
      :disabled="imagemAtual === imagens.length - 1"
    />
  </div>
</template>

<script>
export default {
  props: {
    imagens: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imagemAtual: 0,
    };
  },
  methods: {
    anterior() {
      if (this.imagemAtual > 0) {
        this.imagemAtual--;
      }
    },
    proximo() {
      if (this.imagemAtual < this.imagens.length - 1) {
        this.imagemAtual++;
      }
    },
  },
};
</script>

<style scoped>
.carrossel-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  column-gap: 30px;
}

.carrossel {
  width: 900px;
  height: 450px;
  overflow: hidden;
}

.imagem {
  width: 100%;
  height: auto;
}

.setas {
  width: 30px;
  height: auto;
}
</style>
