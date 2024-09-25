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
      <img src="../assets/cards/card1.png" />
      <img src="../assets/cards/card2.png" />
      <img src="../assets/cards/card3.png" />
      <img src="../assets/cards/card4.png" />
      <img src="../assets/cards/card5.png" />
      <img src="../assets/cards/card6.png" />
      <img src="../assets/cards/card7.png" />
      <img src="../assets/cards/card8.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TerceiraSessao",
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
