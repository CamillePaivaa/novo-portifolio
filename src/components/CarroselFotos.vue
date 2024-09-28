<template>
  <div class="carrossel-container">
    <img
      class="setas seta-esquerda"
      :src="setaLefth"
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
      class="setas seta-direita"
      :src="setaRigth"
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
      setaLefth: require("../assets/seta-lefth.png"),
      setaRigth: require("../assets/seta-right.png"),
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
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 0;
}

.carrossel {
  width: 600px;
  height: 300px;
  overflow: hidden;
}

.imagem {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.setas {
  width: 30px;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.seta-esquerda {
  left: -40px;
}

.seta-direita {
  right: -40px;
}
</style>
