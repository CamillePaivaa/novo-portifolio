import { createRouter, createWebHistory } from "vue-router";
import SobreMim from "@/components/SobreMim.vue";
import MeusProjetos from "@/components/MeusProjetos.vue";
import MeusContatos from "@/components/MeusContatos.vue";

const routes = [
  { path: "/", component: SobreMim },

  { path: "/projetos", component: MeusProjetos },
  { path: "/contatos", component: MeusContatos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
