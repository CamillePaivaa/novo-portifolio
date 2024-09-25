<template>
  <div class="projetos_container">
    <h1>Meus Projetos - VueJs</h1>

    <div class="carrosel_container">
      <h3>Catálogo de Filmes</h3>
      <p>Descrição do Catálogo de Filmes 1</p>
      <CarrosselFotos :imagens="catalogoFilmes" />
    </div>
  </div>

  <div class="projetos_container">
    <h1>Meus Projetos - Ui/Ux Design</h1>

    <div class="carrosel_container">
      <h3>Faxinex</h3>
      <p>Descrição do Catálogo de Filmes 2</p>
      <CarrosselFotos :imagens="faxinex" />
    </div>

    <div class="carrosel_container">
      <h3>BanGeek</h3>
      <p>Descrição do Catálogo de Filmes 2</p>
      <CarrosselFotos :imagens="banGeek" />
    </div>

    <div class="carrosel_container">
      <h3>Food Fácil</h3>
      <p>Descrição do Catálogo de Filmes 2</p>
      <CarrosselFotos :imagens="foodFacil" />
    </div>

    <div class="carrosel_container">
      <h3>Lavar-me</h3>
      <p>Descrição do Catálogo de Filmes 2</p>
      <img
        src="../assets/projetos/lavarme (2).png"
        style="width: 900px; height: 500px; display: block; margin: auto"
      />
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
    };
  },
};
</script>

<style scoped>
.projetos_container {
  padding-top: 100px;
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
