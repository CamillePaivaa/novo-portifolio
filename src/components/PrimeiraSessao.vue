<template>
  <div class="apresentacao_inicial_container">
    <img class="minhafoto" :src="minhaFoto" alt="Minha Foto" />
    <div class="text_container">
      <p>Olá, me chamo</p>
      <h1>Camille Custódio de Paiva</h1>
      <p class="text_azul">Frontend VueJs / UI Designer / UX Designer</p>
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
    <img class="seta" :src="setaBaixo" alt="Seta Baixo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      minhaFoto: require("../assets/minhaFoto.png"),
      setaBaixo: require("../assets/setasBaixo.png"),
    };
  },
};
</script>

<style>
.apresentacao_inicial_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #090a0c;
  color: #fff;
  height: 640px;
  row-gap: 50px;
  padding-top: 100px;
}

.minhafoto {
  width: 150px;
  height: 200px;
  padding-top: 50px;
}

.seta {
  width: 50px;
  animation: bounce 1.5s infinite;
}

.possicao_seta {
  display: flex;
  justify-content: center;
  padding: 2%;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px); /* Faz a seta descer */
  }
}

.text_container {
  width: 45%;
  height: 50%;
}

.text_azul {
  color: blue;
}
</style>
