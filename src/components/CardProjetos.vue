<template>
  <div class="carrosel_container">
    <div class="descricao_projeto_container">
      <h3>{{ titulo }}</h3>
      <p>{{ descricao }}</p>

      <div class="botoes">
        <button class="botao_abrir_projeto" @click="redirectTo(linkProjeto)">
          Abrir Projeto
        </button>
        <img :src="botaoGit" class="btn_git" @click="redirectTo(linkGit)" />
      </div>

      <div class="tecnologias">
        <div v-for="img in tecnologias" :key="img">
          <img :src="img" />
        </div>
      </div>
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
  data() {
    return {
      tecnologias: [
        require("../assets/projetos/tecnologias/vue.png"),
        require("../assets/projetos/tecnologias/html5.png"),
        require("../assets/projetos/tecnologias/javaScript.png"),
        require("../assets/projetos/tecnologias/css.png"),
      ],

      botaoGit: require("../assets/projetos/git.png"),
    };
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
    linkGit: {
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
  width: 50%;
  height: 400px;
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

.tecnologias {
  display: flex;
  flex-direction: row;
  margin-top: -40px;
  justify-content: end;
  column-gap: 10px;
}

img {
  width: 25px;
}

.botoes {
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-top: 50px;
}

.botoes button,
.botoes img {
  transition: transform 0.3s ease-in-out; /* Adiciona a transição */
}

.botoes button:hover,
.botoes img:hover {
  transform: scale(1.1); /* Aplica o efeito de escala */
}

.botao_abrir_projeto {
  width: 150px;
  height: 40px;
  background-color: #090a0c;
  border-radius: 10px;
  color: #fff;
}
.btn_git {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

@media (max-width: 400px) {
  .carrosel_container {
    flex-direction: column;
    width: 95%;
    margin-bottom: 30px;
  }
  .descricao_projeto_container {
    width: 100%;
    padding: 15px;
    height: auto;
  }
  .carrosel {
    width: 85%;
    margin-left: 0%;
    margin-top: 57%;
  }
  p {
    width: 100%;
  }
  .botoes {
    margin-top: 48%;
    flex-direction: column;
    row-gap: 20px;
  }

  .botao_abrir_projeto {
    width: 100%;
    height: 30px;
    font-size: 12px;
    border-radius: 5px;
  }
  .btn_git {
    width: 25px;
    height: 25px;
  }

  .tecnologias {
    margin-top: -45px;
    column-gap: 5px;
  }

  img {
    width: 15px;
  }
}
</style>
