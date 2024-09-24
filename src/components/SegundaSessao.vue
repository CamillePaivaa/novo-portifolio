<template>
  <div class="hobbys_container">
    <h1>Meus Hobbyes</h1>
    <div class="img_text_container">
      <img class="img1" src="../assets/image.png" />
      <div>
        <h3>Praticar Esportes</h3>
        <p>lkdsdjbfjfbdnfkfefjlefjeflefe</p>
      </div>
    </div>
    <div class="img_linha_container">
      <div>
        <img class="img" src="../assets/viagem.png" />
        <h3>Viajar</h3>
        <p>lkdsdjbfjfbdnfkfefjlefjeflefe</p>
      </div>

      <div>
        <img class="img" src="../assets/estudar.png" />
        <h3>Aprender Coisas Novas</h3>
        <p>lkdsdjbfjfbdnfkfefjlefjeflefe</p>
      </div>

      <div>
        <img class="img" src="../assets/dorama.png" />
        <h3>Assistir Doramas</h3>
        <p>lkdsdjbfjfbdnfkfefjlefjeflefe</p>
      </div>
    </div>
  </div>
</template>

<style>
.hobbys_container {
  display: flex;
  flex-direction: column;
  padding-left: 15%;
}

.img_linha_container {
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  margin-top: 50px;
  width: 70%;
  justify-content: space-around;
}

.img_text_container {
  display: flex;
  flex-direction: row;
  column-gap: 70px;
}
.img1 {
  width: 500px;
  height: 300px;
  border-radius: 10px;
}
.img {
  width: 335px;
  height: 250px;
  border-radius: 10px;
}
</style>
