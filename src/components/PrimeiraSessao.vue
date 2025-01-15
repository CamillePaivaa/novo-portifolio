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
        Com 22 anos, estou em busca de uma oportunidade como desenvolvedora
        frontend com Vue.js, a fim de aprimorar minhas habilidades e construir
        uma base sólida para alavancar minha carreira profissional.
      </p>
      <div class="icones">
        <a
          href="https://wa.me/5532998306120?text=Olá%20Camille,%20vi%20seu%20portfólio%20e%20fiquei%20muito%20interessado(a)%20nos%20seus%20projetos.%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20e%20como%20podemos%20trabalhar%20juntos!"
          target="_blank"
        >
          <img class="icone" :src="whats"
        /></a>
        <a href="https://www.linkedin.com/in/camillepaiva" target="_blank"
          ><img class="icone" :src="linkedin"
        /></a>
      </div>
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
      whats: [require("../assets/icones/whatsapp.png")],
      linkedin: [require("../assets/icones/linkedin.png")],
    };
  },
};
</script>

<style>
.apresentacao_inicial_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #090a0c;
  color: #fff;
  height: 640px;
  column-gap: 150px;
  padding-top: 50px;
}

.minhafoto {
  width: 270px;
  border: 2px dotted #ffffff;
  padding: 15px;
  border-radius: 50%;
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
    transform: translateY(10px);
  }
}

.text_container {
  width: 35%;
  height: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.text_azul {
  color: #1b9be4;
  font-size: 17px;
}

h1 {
  font-size: 42px;
}

.icones {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 25px;
}

.icone {
  transition: transform 0.3s ease;
}

.icone:hover {
  transform: scale(1.2);
}
</style>
