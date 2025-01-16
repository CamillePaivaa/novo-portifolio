<template>
  <div class="header_container">
    <router-link
      to="/"
      class="nav-link"
      :class="{ active: activeLink === '/' }"
      @click="setActiveLink('/')"
    >
      Sobre Mim
    </router-link>
    <router-link
      to="/projetos"
      class="nav-link"
      :class="{ active: activeLink === '/projetos' }"
      @click="setActiveLink('/projetos')"
    >
      Projetos
    </router-link>
    <router-link
      to="/contatos"
      class="nav-link"
      :class="{ active: activeLink === '/contatos' }"
      @click="setActiveLink('/contatos')"
    >
      Contatos
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  data() {
    return {
      activeLink: "/", // Define qual link está ativo inicialmente
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link; // Atualiza o link ativo ao clicar
    },
  },
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
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #1b9be4;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #1b9be4;
}

@media (max-width: 400px) {
  .header_container {
    justify-content: space-evenly;
    padding: 0;
  }
  .nav-link {
    font-size: 13px;
  }
}
</style>
