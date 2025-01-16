<template>
  <div class="carrosel_container">
    <div class="descricao_projeto_container">
      <h3>{{ titulo }}</h3>
      <p>{{ descricao }}</p>

      <button
        class="botao_abrir_projeto botoes"
        @click="redirectTo(linkProjeto)"
      >
        Abrir Projeto
      </button>
    </div>

    <CarroselFotos :imagens="imagens" class="carrosel" />
  </div>
</template>
<script>
import CarroselFotos from "./CarroselFotos.vue";
export default {
  components: {
    CarroselFotos,
  },
  props: {
    imagens: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    linkProjeto: {
      type: String,
      required: true,
    },
  },

  methods: {
    redirectTo(link) {
      window.open(link);
    },
  },
};
</script>
<style scoped>
.carrosel_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 70px;
}

.carrosel {
  position: absolute;
  margin-left: 40%;
}
.descricao_projeto_container {
  margin-top: 20px;
  background-color: rgb(248, 248, 248);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding-left: 40px;
  padding-right: 20px;
  width: 55%;
  height: 450px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 65px;
  transition: transform 0.3s ease-in-out;
}

p {
  width: 73%;
}

.descricao_projeto_container:hover {
  transform: scale(1.02);
}

.botoes button,
.botoes img {
  transition: transform 0.3s ease-in-out; /* Adiciona a transição */
}

.botoes button:hover,
.botoes img:hover {
  transform: scale(1.1);
}

.botao_abrir_projeto {
  width: 150px;
  height: 40px;
  background-color: #090a0c;
  border-radius: 10px;
  color: #fff;
}

@media (max-width: 400px) {
  .carrosel_container {
    flex-direction: column;
    width: 90%;
  }

  .descricao_projeto_container {
    width: 100%;
    padding: 15px;
    height: auto;
  }
  p {
    width: 100%;
  }

  .carrosel {
    width: 80%;
    margin-left: 0%;
    margin-top: 65%;
  }

  .botao_abrir_projeto {
    margin-top: 65%;
    width: 100%;
    height: 30px;
    font-size: 12px;
    border-radius: 5px;
  }
}
</style>
