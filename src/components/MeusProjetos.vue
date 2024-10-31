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
      descricao="Pet Mania é um site de serviços de pet shop desenvolvido com Vue.js. A plataforma permite ao usuário agendar atendimentos e explorar opções como banho, tosa e outros cuidados. A interface moderna e intuitiva facilita a navegação, permitindo visualizar avaliações de clientes e acessar rapidamente serviços essenciais para pets."
      :imagens="petMania"
      linkProjeto="https://pet-mania-vue-js.vercel.app"
      linkGit="https://github.com/CamillePaivaa/Pet-Mania_VueJs"
    />

    <CardProjetos
      titulo="Perguntas Frequentes"
      descricao="A dinâmica do jogo é divertida e desafiadora: o jogador tem 10 segundos para responder a cada pergunta. Ao acertar, ganha um ponto; se errar ou o tempo acabar, o ponto vai para o computador! A cada rodada, perguntas aleatórias são geradas por uma API, tornando a experiência única e proporcionando jogabilidade infinita."
      :imagens="perguntasFrequentes"
      linkProjeto="https://jogo-de-perguntas-com-api.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Jogo-de-Perguntas-Com-Api"
    />

    <CardProjetos
      titulo="Minhas Tarefas Pessoais"
      descricao="O projeto é uma lista de tarefas interativa que permite ao usuário adicionar, editar, excluir e organizar tarefas com facilidade. Com um design simples e intuitivo, a aplicação também oferece a opção de limpar a lista completa com um clique. A funcionalidade responsiva permite gerenciar tarefas tanto em dispositivos móveis quanto em desktops."
      :imagens="listaTarefas"
      linkProjeto="https://lista-de-tarefas-tan-zeta.vercel.app/"
      linkGit="https://github.com/CamillePaivaa/Lista-de-Tarefas"
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
        require("@/assets/projetos/catalogoFilmes/img1.png"),
        require("@/assets/projetos/catalogoFilmes/img2.png"),
      ],
      perguntasFrequentes: [
        require("../assets/projetos/jogoPerguntas/img1.png"),
        require("../assets/projetos/jogoPerguntas/img2.png"),
        require("../assets/projetos/jogoPerguntas/img3.png"),
      ],
      listaTarefas: [
        require("../assets/projetos/listaTarefas/img1.png"),
        require("../assets/projetos/listaTarefas/img2.png"),
      ],
      petMania: [
        require("@/assets/projetos/petMania/img1.png"),
        require("@/assets/projetos/petMania/img2.png"),
        require("@/assets/projetos/petMania/img3.png"),
        require("@/assets/projetos/petMania/img4.png"),
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
