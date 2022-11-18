import { createRouter, createWebHistory } from "vue-router";
import Accueil from "@/pages/Accueil";
import Portfolio from "@/pages/Portfolio";
import Cv from "@/pages/Cv";

const router = createRouter({
    routes: [
        {path: "/", name: "accueil", component: Accueil},
        {path: "/portfolio", name: "portfolio", component: Portfolio},
        {path: "/CV", name: "cv", component: Cv}
    ],
    strict: true,
    history: createWebHistory(),
})

export default router