<template>
  <div class="page_container">
    <div class="projetos_container">
      <h1>Meus Projetos - VueJs</h1>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>Catálogo de Filmes</h3>
          <p>
            O projeto é um catálogo de filmes que consome uma API RESTful para
            exibir informações detalhadas como título, descrição e trailer. A
            aplicação permite ao usuário favoritar filmes e criar uma lista
            personalizada de favoritos. O design é otimizado para navegação
            intuitiva e responsiva, funcionando em dispositivos móveis e
            desktops.
          </p>

          <div class="botoes">
            <button class="botao_abrir_projeto">Abrir Projeto</button>
            <img :src="botaoGit" style="width: 40px; height: 40px" />
          </div>

          <div class="tecnologias">
            <div v-for="img in tecnologias" :key="img">
              <img :src="img" />
            </div>
          </div>
        </div>

        <CarrosselFotos :imagens="catalogoFilmes" class="carrosel" />
      </div>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>Pet Mania</h3>
          <p>
            Pet Mania é um site de serviços de pet shop desenvolvido com Vue.js.
            A plataforma permite agendar atendimentos, explorar serviços como
            banho e tosa, e visualizar avaliações de clientes. O design é
            moderno e intuitivo, garantindo navegação fluida e acesso rápido a
            serviços essenciais para pets.
          </p>

          <div class="botoes">
            <button class="botao_abrir_projeto">Abrir Projeto</button>
            <img :src="botaoGit" style="width: 40px; height: 40px" />
          </div>

          <div class="tecnologias">
            <div v-for="img in tecnologias" :key="img">
              <img :src="img" />
            </div>
          </div>
        </div>

        <CarrosselFotos :imagens="petMania" class="carrosel" />
      </div>
    </div>

    <div class="projetos_container">
      <h1>Meus Projetos - Ui/Ux Design</h1>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>Faxinex</h3>
          <p>
            Plataforma para contratação de diaristas em pequenos municípios.
            Profissionais de limpeza podem criar perfis, e os clientes filtram
            por localização e programam serviços. O sistema é autossustentável,
            com pacotes personalizados e preços ajustados ao tamanho do local,
            oferecendo uma solução eficiente e acessível para ambos os lados.
          </p>
        </div>
        <CarrosselFotos :imagens="faxinex" class="carrosel" />
      </div>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>BanGeek</h3>
          <p>
            O Bangeek é um banco digital criado especialmente para o público
            geek. Além de todas as funções bancárias tradicionais, o aplicativo
            se destaca por oferecer opções de personalização, como mudança de
            temas e avatares customizáveis, criando uma experiência imersiva e
            única. O Bangeek combina praticidade financeira com um toque de
            diversão e identidade para os usuários que valorizam um ambiente
            mais personalizado e interativo.
          </p>
        </div>
        <CarrosselFotos :imagens="banGeek" class="carrosel" />
      </div>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>Food Fácil</h3>
          <p>
            O Food Fácil é um aplicativo voltado para facilitar pedidos de
            salgadinhos para delivery. A plataforma oferece uma interface
            simples e rápida, permitindo que os usuários explorem o cardápio,
            façam pedidos de forma prática e acompanhem a entrega em tempo real.
            Voltado para atender a demanda de eventos e consumo diário, o Food
            Fácil proporciona uma experiência eficiente e conveniente para quem
            deseja pedir seus salgados favoritos de forma rápida e confiável.
          </p>
        </div>
        <CarrosselFotos :imagens="foodFacil" class="carrosel" />
      </div>

      <div class="carrosel_container">
        <div class="descricao_projeto_container">
          <h3>Lavar-me</h3>
          <p>
            O Lavar-me oferece uma solução prática para serviços de lavanderia.
            No aplicativo, os usuários podem selecionar o tipo de roupa para
            lavar, com preços específicos para cada peça, realizar pagamentos
            diretamente pela plataforma e escolher entre levar as roupas à
            lavanderia mais próxima ou solicitar a coleta e entrega em casa. O
            Lavar-me combina conveniência e flexibilidade para quem busca um
            serviço de lavanderia eficiente e sem complicações.
          </p>
        </div>
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

      tecnologias: [
        require("../assets/projetos/tecnologias/vue.png"),
        require("../assets/projetos/tecnologias/html5.png"),
        require("../assets/projetos/tecnologias/javaScript.png"),
        require("../assets/projetos/tecnologias/css.png"),
      ],

      botaoGit: require("../assets/projetos/git.png"),
    };
  },
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  padding-top: 130px;
}
.projetos_container {
  display: flex;
  flex-direction: column;
  width: 80%;

  margin-left: 12%;
}
.carrosel_container {
  display: flex;
  flex-direction: row; /* Mudança para colocar o texto abaixo */
  align-items: center;
  margin-bottom: 70px;
}

.carrosel {
  position: absolute;
  margin-left: 37%;
}
.descricao_projeto_container {
  margin-top: 20px; /* Espaçamento entre o carrossel e o texto */
  background-color: rgb(248, 248, 248);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding-left: 40px;
  padding-right: 20px;
  width: 55%;
  height: 450px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 65px;

  p {
    width: 73%;
  }
}

.tecnologias {
  display: flex;
  flex-direction: row;
  margin-top: -30px;
  justify-content: end;
  column-gap: 10px;

  img {
    width: 25px;
  }
}

.botoes {
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-top: 80px;
}

.botao_abrir_projeto {
  width: 150px;
  height: 40px;
  background-color: #090a0c;
  border-radius: 10px;
  color: #fff;
}
</style>
