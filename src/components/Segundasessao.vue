<template>
  <div class="habilidades_container">
    <div class="descricao_habilidades">
      <h1>Minhas Habilidades</h1>
      <p>
        Ao longo da minha trajetória, venho construindo uma bagagem sólida de
        conhecimentos. Tenho mais de 2 anos de experiência como freelancer em
        UI/UX design e agora estou me desafiando ainda mais, aprendendo cada vez
        mais sobre as ferramentas do desenvolvimento frontend com Vue.js.
      </p>
    </div>

    <div class="cards_componente">
      <div v-for="(nome, index) in meuCard.nomeCard" :key="index" class="card">
        <img :src="meuCard.imgCard[index]" alt="Imagem do card" />
        {{ nome }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TerceiraSessao",

  data() {
    return {
      meuCard: {
        nomeCard: [
          "HTML",
          "CSS",
          "JavaScript",
          "VueJs",
          "Git",
          "Bootstrap",
          "Adobe XD",
          "Figma",
          "Photoshop",
        ],

        imgCard: [
          require("../assets/imgCards/html.png"),
          require("../assets/imgCards/css.png"),
          require("../assets/imgCards/javascript.png"),
          require("../assets/imgCards/vuejs.png"),
          require("../assets/imgCards/git.png"),
          require("../assets/imgCards/bootstrap.png"),
          require("../assets/imgCards/adobexd.png"),
          require("../assets/imgCards/figma.png"),
          require("../assets/imgCards/photoshop.png"),
        ],
      },
    };
  },
};
</script>

<style scoped>
.habilidades_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 70px;
  width: 80%;
  margin-left: 10%;
  column-gap: 30px;
}

.cards_componente {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  gap: 30px;
  margin-bottom: 50px;
  justify-content: flex-start;
}

img {
  width: 80px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  width: 150px;
  height: 190px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}

.descricao_habilidades {
  width: 35%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

@media (max-width: 400px) {
  .habilidades_container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 90%;
    margin-left: 5%;
    align-items: center;
  }

  .descricao_habilidades {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 20px;
  }

  .cards_componente {
    width: 90%;
    gap: 10px;
    margin-top: 25px;
  }

  .card {
    row-gap: 20px;
    border-radius: 10px;

    width: 48%;
    height: 150px;
  }
  img {
    width: 50px;
  }
}
</style>
