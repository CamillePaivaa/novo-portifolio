<template>
  <div class="page_container">
    <h1>Meus Projetos - VueJs</h1>

    <CardProjetos
      titulo="Catálogo de Filmes"
      descricao=" O projeto é um catálogo de filmes que consome uma API RESTful para
        exibir informações detalhadas como título, descrição e trailer. A
        aplicação permite ao usuário favoritar filmes e criar uma lista
        personalizada de favoritos. O design é otimizado para navegação
        intuitiva e responsiva, funcionando em dispositivos móveis e desktops."
      :imagens="catalogoFilmes"
      linkProjeto="https://catalogodefilmeconsimindoapi.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi"
    />

    <CardProjetos
      titulo="Pet Mania"
      descricao=" Pet Mania é um site de serviços de pet shop desenvolvido com Vue.js.
            A plataforma permite agendar atendimentos, explorar serviços como
            banho e tosa, e visualizar avaliações de clientes. O design é
            moderno e intuitivo, garantindo navegação fluida e acesso rápido a
            serviços essenciais para pets."
      :imagens="petMania"
      linkProjeto="https://pet-mania-vue-js.vercel.app"
      linkGit="https://github.com/CamillePaivaa/Pet-Mania_VueJs"
    />

    <h1>Meus Projetos - Ui/Ux Design</h1>
    <CardProjetos
      titulo="Faxinex"
      descricao=" Plataforma para contratação de diaristas em pequenos municípios.
            Profissionais de limpeza podem criar perfis, e os clientes filtram
            por localização e programam serviços. O sistema é autossustentável,
            com pacotes personalizados e preços ajustados ao tamanho do local,
            oferecendo uma solução eficiente e acessível para ambos os lados."
      :imagens="faxinex"
      linkProjeto="https://catalogodefilmeconsimindoapi.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi"
    />

    <CardProjetos
      titulo="BanGeek"
      descricao=" O Bangeek é um banco digital criado especialmente para o público
            geek. Além de todas as funções bancárias tradicionais, o aplicativo
            se destaca por oferecer opções de personalização, como mudança de
            temas e avatares customizáveis, criando uma experiência imersiva e
            única. O Bangeek combina praticidade financeira com um toque de
            diversão e identidade para os usuários que valorizam um ambiente
            mais personalizado e interativo."
      :imagens="banGeek"
      linkProjeto="https://catalogodefilmeconsimindoapi.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi"
    />

    <CardProjetos
      titulo="Food Fácil"
      descricao=" O Food Fácil é um aplicativo voltado para facilitar pedidos de
            salgadinhos para delivery. A plataforma oferece uma interface
            simples e rápida, permitindo que os usuários explorem o cardápio,
            façam pedidos de forma prática e acompanhem a entrega em tempo real.
            Voltado para atender a demanda de eventos e consumo diário, o Food
            Fácil proporciona uma experiência eficiente e conveniente para quem
            deseja pedir seus salgados favoritos de forma rápida e confiável."
      :imagens="foodFacil"
      linkProjeto="https://catalogodefilmeconsimindoapi.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi"
    />

    <CardProjetos
      titulo="Lavar-me"
      descricao=" O Lavar-me oferece uma solução prática para serviços de lavanderia.
            No aplicativo, os usuários podem selecionar o tipo de roupa para
            lavar, com preços específicos para cada peça, realizar pagamentos
            diretamente pela plataforma e escolher entre levar as roupas à
            lavanderia mais próxima ou solicitar a coleta e entrega em casa. O
            Lavar-me combina conveniência e flexibilidade para quem busca um
            serviço de lavanderia eficiente e sem complicações."
      :imagens="lavarme"
      linkProjeto="https://catalogodefilmeconsimindoapi.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi"
    />
  </div>

  <!-- 
        <img
          :src="lavarme"
          style="
            width: 600px;
            height: 300px;
            position: absolute;
            left: 47%;
            border-radius: 10px;
          "
        />
  -->
</template>

<script>
import CardProjetos from "./CardProjetos.vue";

export default {
  data() {
    return {
      catalogoFilmes: [
        require("@/assets/projetos/filmes1.png"),
        require("@/assets/projetos/filmes2.png"),
      ],
      petMania: [
        require("@/assets/projetos/petmania.png"),
        require("@/assets/projetos/petmania1.png"),
        require("@/assets/projetos/petmania2.png"),
      ],

      foodFacil: [
        require("../assets/projetos/foodfacil.png"),
        require("../assets/projetos/foodfacil1.png"),
        require("../assets/projetos/foodfacil2.png"),
      ],
      banGeek: [
        require("../assets/projetos/bangeek.png"),
        require("../assets/projetos/bangeek1.png"),
        require("../assets/projetos/bangeek2.png"),
      ],

      faxinex: [
        require("../assets/projetos/faxinex.png"),
        require("../assets/projetos/faxinex1.png"),
        require("../assets/projetos/faxinex2.png"),
      ],

      lavarme: [require("../assets/projetos/lavarme.png")],
    };
  },

  components: {
    CardProjetos,
  },
  methods: {
    redirectTo(link) {
      window.open(link);
    },
  },
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  padding-top: 130px;

  margin-left: 10%;
}
</style>
