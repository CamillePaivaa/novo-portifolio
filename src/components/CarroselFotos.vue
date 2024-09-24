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
  data() {
    return {
      imagemAtual: 0,
      imagens: [
        require("@/assets/projetos/filmes1.png"),
        require("@/assets/projetos/filmes2.png"),
      ],
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

<style>
.carrossel-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
  column-gap: 30px;
}

.carrossel {
  width: 500px;
  height: 250px;
  overflow: hidden;
}

.imagem {
  width: 100%;
  height: auto;
}

.setas {
  width: 50px;
  height: auto;
}
</style>
