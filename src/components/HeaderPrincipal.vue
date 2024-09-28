<template>
  <div class="header_container">
    <router-link to="/">Sobre Mim</router-link>
    <router-link to="/projetos">Projetos</router-link>
    <router-link to="/contatos">Contatos</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderPrincipal",
};
</script>

<style scoped>
.header_container {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  background-color: #090a0c;
  align-items: center;
  padding-left: 15%;
  column-gap: 5%;
  position: fixed;
  z-index: 3;
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
