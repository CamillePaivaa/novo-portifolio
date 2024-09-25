<template>
  <div class="apresentacao_inicial_container">
    <img class="minhafoto" src="../assets/minhaFoto.png" />
    <div class="text_container">
      <p>Olá, me chamo</p>
      <h1>Camille Custódio de Paiva</h1>
      <p class="text_azul">Frontend VueJs /Ui Designer/Ux Designer</p>
      <p>
        Sou de Brás Pires, uma cidade do interior de Minas Gerais, e atualmente
        curso Sistemas de Informação na UFV (Universidade Federal de Viçosa).
        Com 21 anos, estou em busca de uma oportunidade como desenvolvedora
        frontend com Vue.js, a fim de aprimorar minhas habilidades e construir
        uma base sólida para alavancar minha carreira profissional.
      </p>
    </div>
  </div>
  <div class="possicao_seta">
    <img class="seta" src="../assets/setasBaixo.png" />
  </div>
</template>

<script></script>

<style>
.apresentacao_inicial_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #090a0c;
  color: #fff;
  height: 550px;
  row-gap: 50px;
  padding-top: 70px;
}

.minhafoto {
  width: 150px;
  height: 150px;
  padding-top: 70px;
}

.seta {
  width: 50px;
}
.possicao_seta {
  display: flex;
  justify-content: center;
  padding: 2%;
}

.text_container {
  width: 45%;
  height: 50%;
}

.text_azul {
  color: blue;
}
</style>
