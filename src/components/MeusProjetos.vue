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
      titulo="Perguntas Frequentes"
      descricao=" A dinâmica é divertida e desafiante: o jogador tem 10 segundos para responder cada pergunta. Se acertar, ganha um ponto; se errar ou deixar o tempo acabar, o ponto vai automaticamente para o computador! O jogo consome uma API para gerar perguntas aleatórias, tornando cada rodada única e permitindo uma jogabilidade infinita, com novos desafios surgindo a cada pergunta.Pode ser jogado em dispositivos móveis e desktops."
      :imagens="perguntasFrequentes"
      linkProjeto="https://jogo-de-perguntas-com-api.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Jogo-de-Perguntas-Com-Api"
    />

    <CardProjetos
      titulo="Minhas Taefas Pessoais"
      descricao=" A dinâmica é divertida e desafiante: o jogador tem 10 segundos para responder cada pergunta. Se acertar, ganha um ponto; se errar ou deixar o tempo acabar, o ponto vai automaticamente para o computador! O jogo consome uma API para gerar perguntas aleatórias, tornando cada rodada única e permitindo uma jogabilidade infinita, com novos desafios surgindo a cada pergunta.Pode ser jogado em dispositivos móveis e desktops."
      :imagens="listaTarefas"
      linkProjeto="https://lista-de-tarefas-tan-zeta.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Lista-de-Tarefas"
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
    <CardProjetosUx
      titulo="Faxinex"
      descricao=" Plataforma para contratação de diaristas em pequenos municípios.
            Profissionais de limpeza podem criar perfis, e os clientes filtram
            por localização e programam serviços. O sistema é autossustentável,
            com pacotes personalizados e preços ajustados ao tamanho do local,
            oferecendo uma solução eficiente e acessível para ambos os lados."
      :imagens="faxinex"
      linkProjeto="https://www.behance.net/gallery/192795073/Faxinex-App-UI-UX-Design-XD-FIGMAPSD"
    />

    <CardProjetosUx
      titulo="BanGeek"
      descricao=" O Bangeek é um banco digital criado especialmente para o público
            geek. Além de todas as funções bancárias tradicionais, o aplicativo
            se destaca por oferecer opções de personalização, como mudança de
            temas e avatares customizáveis, criando uma experiência imersiva e
            única. O Bangeek combina praticidade financeira com um toque de
            diversão e identidade para os usuários que valorizam um ambiente
            mais personalizado e interativo."
      :imagens="banGeek"
      linkProjeto="https://www.behance.net/gallery/191356779/Bangeek-UI-UX-Design-Digital-Bank-XD-PSD"
    />

    <CardProjetosUx
      titulo="Food Fácil"
      descricao=" O Food Fácil é um aplicativo voltado para facilitar pedidos de
            salgadinhos para delivery. A plataforma oferece uma interface
            simples e rápida, permitindo que os usuários explorem o cardápio,
            façam pedidos de forma prática e acompanhem a entrega em tempo real.
            Voltado para atender a demanda de eventos e consumo diário, o Food
            Fácil proporciona uma experiência eficiente e conveniente para quem
            deseja pedir seus salgados favoritos de forma rápida e confiável."
      :imagens="foodFacil"
      linkProjeto="https://www.behance.net/gallery/194187151/FoodFacil-App-UI-UX-Design-XD-FIGMA-PSD"
    />
  </div>
</template>

<script>
import CardProjetos from "./CardProjetos.vue";
import CardProjetosUx from "./CardProjetosUx.vue";

export default {
  data() {
    return {
      catalogoFilmes: [
        require("@/assets/projetos/filmes1.png"),
        require("@/assets/projetos/filmes2.png"),
      ],
      perguntasFrequentes: [
        require("../assets/projetos/perguntas.png"),
        require("../assets/projetos/perguntas1.png"),
        require("../assets/projetos/perguntas2.png"),
      ],
      listaTarefas: [require("../assets/projetos/tarefas.png")],
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
    CardProjetosUx,
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
