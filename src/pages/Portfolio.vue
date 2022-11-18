<template>
    <ul v-if="this.images">
        <li v-for="i of this.images" :key="i.id">
            <img :src="i.link"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'PortfolioComponent',
        data:()=>({
            images:[
                {id: 1,link: "/assets/img/1_chaton.jpg"},
                {id: 2,link: "/assets/img/2_cheveux.jpg"},
                {id: 3,link: "/assets/img/3_meca.jpg"},
                {id: 4,link: "/assets/img/4_peinture.jpg"},
                {id: 5,link: "/assets/img/5_fusain.jpg"},
                {id: 6,link: "/assets/img/6_cdi.jpg"},
                {id: 7,link: "/assets/img/7_rail.jpg"},
                {id: 8,link: "/assets/img/8_fwoosh.jpg"},
                {id: 9,link: "/assets/img/9_pwett.jpg"},
                {id: 10,link: "/assets/img/10_ui.jpg"},
                {id: 11,link: "/assets/img/11_oeil.jpg"},
                {id: 12,link: "/assets/img/12_arbre.jpg"},
                {id: 13,link: "/assets/img/13_masque.jpg"},
                {id: 14,link: "/assets/img/14_oeilmieux.jpg"},
                {id: 15,link: "/assets/img/15_pot.jpg"},
                {id: 16,link: "/assets/img/16_hall.jpg"},
                {id: 17,link: "/assets/img/17_ESAD.jpg"},
                {id: 18,link: "/assets/img/18_roller.jpg"},
                {id: 19,link: "/assets/img/19_rainbow.jpg"},
                {id: 20,link: "/assets/img/20_yaquedescheveux.jpg"},
            ]
        })
    }
</script>

<style scoped>
    img{
        max-width:100vw;
    }
</style>