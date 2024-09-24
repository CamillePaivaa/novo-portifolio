<template>
  <div class="projetos_container">
    <h1>Meus Projetos</h1>

    <div>
      <h3>Catálogo de Filmes</h3>
      <p>Descrição do Catálogo de Filmes</p>
      <CarrosselFotos />
    </div>

    <div>
      <h3>Catálogo de Filmes</h3>
      <p>Descrição do Catálogo de Filmes</p>
      <CarrosselFotos />
    </div>

    <div>
      <h3>Catálogo de Filmes</h3>
      <p>Descrição do Catálogo de Filmes</p>
      <CarrosselFotos />
    </div>
  </div>
</template>

<script>
import CarrosselFotos from "@/components/CarroselFotos.vue"; // Ajuste o caminho conforme necessário

export default {
  components: {
    CarrosselFotos,
  },
};
</script>

<style>
.projetos_container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
}
</style>
