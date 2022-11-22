<template>
    <ul v-if="this.images">
        <li :class="i.open? 'current_image' : ''" v-for="i of this.images" :key="i.id" @click="closeTabs(this.images, i.id); i.open=!i.open">
            <img :src="i. link"/>
            <p class="desc">{{i.description}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'PortfolioComponent',
        data:()=>({
            images:[
                {id: 1, link: "/assets/img/3_meca.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 2, link: "/assets/img/2_cheveux.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 3, link: "/assets/img/1_chaton.jpg", description: "Oui tout à fait", open: false},
                {id: 4, link: "/assets/img/4_peinture.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 5, link: "/assets/img/5_fusain.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 6, link: "/assets/img/6_cdi.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 7, link: "/assets/img/7_rail.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 8, link: "/assets/img/8_fwoosh.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 9, link: "/assets/img/9_pwett.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 10, link: "/assets/img/10_ui.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 11, link: "/assets/img/11_oeil.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 12, link: "/assets/img/12_arbre.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 13, link: "/assets/img/13_masque.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 14, link: "/assets/img/14_oeilmieux.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 15, link: "/assets/img/15_pot.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 16, link: "/assets/img/16_hall.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 17, link: "/assets/img/17_ESAD.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 18, link: "/assets/img/18_roller.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 19, link: "/assets/img/19_rainbow.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
                {id: 20, link: "/assets/img/20_yaquedescheveux.jpg", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciditunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", open: false},
            ]
        }),
        methods:{
            closeTabs(tab_list, i){
                tab_list.map(tab => {if(tab.id != i){tab.open=false}})
            }
        }
    }
</script>

<style scoped>
    ul{
        max-width:100vw;
        display: flex;
        flex-flow: column;
    }

    li{
        transition: all 0.3s;
        padding:0 20px;
    }

    .current_image{
        margin-bottom: 30px;
        box-shadow: 0 7px 10px #0008;
    }
    .current_image:not(:first-child){
        margin-top:-100px;
    }

    img{
        background-color:var(--main-bg-color);
        width:100%;
        max-width:100vw;
        transition: all 0.3s;
        border-top: 20px solid var(--main-bg-color);
    }

    .desc{
        min-height: 0;
        max-height: 0;
        color: var(--transp-main-text-color);
        transition: all 0.3s;
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        padding: 0 10px;
    }

    .current_image .desc{
        min-height: 100px;
        max-height: 300px;
        color: var(--main-text-color);
        padding: 15px 10px;
    }
</style>