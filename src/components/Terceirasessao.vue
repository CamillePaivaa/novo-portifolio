<template>
  <div class="habilidades_container">
    <h1>Minhas Habilidades</h1>
    <div class="descricao_habilidades">
      <p>
        Ao longo da minha trajetória, venho construindo uma bagagem sólida de
        conhecimentos. Tenho mais de 2 anos de experiência como freelancer em
        UI/UX design e agora estou me desafiando ainda mais, aprendendo cada vez
        mais sobre as ferramentas do desenvolvimento frontend com Vue.js.
      </p>
    </div>

    <div class="cards_componente">
      <img :src="card1" />
      <img :src="card2" />
      <img :src="card3" />
      <img :src="card4" />
      <img :src="card5" />
      <img :src="card6" />
      <img :src="card7" />
      <img :src="card8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TerceiraSessao",

  data() {
    return {
      card1: require("../assets/cards/card1.png"),
      card2: require("../assets/cards/card2.png"),
      card3: require("../assets/cards/card3.png"),
      card4: require("../assets/cards/card4.png"),
      card5: require("../assets/cards/card5.png"),
      card6: require("../assets/cards/card6.png"),
      card7: require("../assets/cards/card7.png"),
      card8: require("../assets/cards/card8.png"),
    };
  },
};
</script>

<style scoped>
.habilidades_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
}

.cards_componente {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  gap: 30px;
  justify-content: center;

  img {
    width: 200px;
  }
}

.descricao_habilidades {
  width: 800px;
  height: 20px;
  margin-bottom: 120px;
}
</style>
