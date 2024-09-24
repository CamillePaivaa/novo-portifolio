<template>
  <div class="habilidades_container">
    <h1>Minhas Habilidades</h1>
    <p>ksfjklnsfçsçnfsldgngjfgfmbfnbfbfdçdç</p>

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
    width: 230px;
  }
}
</style>
