<template>
  <div class="page_container">
    <div class="projetos_container">
      <h1>Meus Projetos - VueJs</h1>

      <div class="carrosel_container">
        <h3>Catálogo de Filmes</h3>
        <p>
          Este projeto consiste em um catálogo de filmes desenvolvido com foco
          em fornecer uma experiência rica e interativa ao usuário. A aplicação
          consome dados de uma API RESTful que fornece uma vasta gama de
          informações sobre filmes. Cada item do catálogo exibe detalhes
          importantes, como:
        </p>
        <p>
          Além do consumo da API, a aplicação foi aprimorada com uma
          funcionalidade de favoritar. Com isso, o usuário pode marcar os filmes
          que mais chamaram sua atenção e criar uma lista personalizada de
          favoritos, permitindo fácil acesso a esses filmes posteriormente. O
          design foi otimizado para uma navegação intuitiva, tornando a
          experiência do usuário fluida e agradável. A interface responsiva
          garante que o catálogo possa ser acessado em diferentes dispositivos,
          desde smartphones até desktops.
        </p>
        <CarrosselFotos :imagens="catalogoFilmes" />
      </div>

      <div class="carrosel_container">
        <h3>Pet Mania</h3>
        <p>
          O Pet Mania é um site dedicado a oferecer uma experiência completa
          para quem busca serviços de pet shop. Desenvolvido com Vue.js, a
          plataforma permite que os usuários agendem atendimentos com
          facilidade, explorem a lista de serviços oferecidos, como banho, tosa
          e consultas, e ainda visualizem avaliações e comentários de outros
          clientes, ajudando a garantir a qualidade dos serviços prestados. Além
          disso, o site oferece uma interface intuitiva e moderna,
          proporcionando uma navegação fluida e informações claras sobre os
          cuidados disponíveis para os pets. O Pet Mania foi projetado para
          facilitar o acesso a serviços essenciais, garantindo que os donos de
          animais encontrem tudo o que precisam em um só lugar.
        </p>

        <CarrosselFotos :imagens="petMania" />
      </div>
    </div>

    <div class="projetos_container">
      <h1>Meus Projetos - Ui/Ux Design</h1>

      <div class="carrosel_container">
        <h3>Faxinex</h3>
        <p>Desenvolvido com o Figma</p>
        <p>
          O Faxinex facilita a contratação de diaristas em pequenos municípios.
          A plataforma permite que profissionais de limpeza criem perfis e
          ofereçam serviços, enquanto os clientes podem filtrar por localização,
          programar serviços e se comunicar diretamente com os prestadores. O
          sistema é autossustentável, com pacotes personalizados e preços
          ajustados ao tamanho do local. O sistema se destaca por ser
          autossustentável, sem a necessidade de um administrador, com pacotes
          de serviços personalizáveis, cujos preços são definidos conforme o
          tamanho do local a ser limpo. O principal objetivo do Faxinex é
          proporcionar um serviço eficiente, confiável e acessível, tanto para
          quem busca quanto para quem oferece serviços de limpeza.
        </p>
        <CarrosselFotos :imagens="faxinex" />
      </div>

      <div class="carrosel_container">
        <h3>BanGeek</h3>
        <p>
          O Bangeek é um banco digital criado especialmente para o público geek.
          Além de todas as funções bancárias tradicionais, o aplicativo se
          destaca por oferecer opções de personalização, como mudança de temas e
          avatares customizáveis, criando uma experiência imersiva e única. O
          Bangeek combina praticidade financeira com um toque de diversão e
          identidade para os usuários que valorizam um ambiente mais
          personalizado e interativo.
        </p>
        <CarrosselFotos :imagens="banGeek" />
      </div>

      <div class="carrosel_container">
        <h3>Food Fácil</h3>
        <p>
          O Food Fácil é um aplicativo voltado para facilitar pedidos de
          salgadinhos para delivery. A plataforma oferece uma interface simples
          e rápida, permitindo que os usuários explorem o cardápio, façam
          pedidos de forma prática e acompanhem a entrega em tempo real. Voltado
          para atender a demanda de eventos e consumo diário, o Food Fácil
          proporciona uma experiência eficiente e conveniente para quem deseja
          pedir seus salgados favoritos de forma rápida e confiável.
        </p>
        <CarrosselFotos :imagens="foodFacil" />
      </div>

      <div class="carrosel_container">
        <h3>Lavar-me</h3>
        <p>
          O Lavar-me oferece uma solução prática para serviços de lavanderia. No
          aplicativo, os usuários podem selecionar o tipo de roupa para lavar,
          com preços específicos para cada peça, realizar pagamentos diretamente
          pela plataforma e escolher entre levar as roupas à lavanderia mais
          próxima ou solicitar a coleta e entrega em casa. O Lavar-me combina
          conveniência e flexibilidade para quem busca um serviço de lavanderia
          eficiente e sem complicações.
        </p>
        <img
          :src="lavarme"
          style="width: 900px; height: 500px; display: block; margin: auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarrosselFotos from "@/components/CarroselFotos.vue";

export default {
  components: {
    CarrosselFotos,
  },
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

      lavarme: require("../assets/projetos/lavarme.png"),
    };
  },
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
}
.projetos_container {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
}

.carrosel_container {
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
}
</style>
