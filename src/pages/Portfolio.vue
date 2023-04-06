<template>
    <div :class="this.opacity_transition? 'load_smoothing transparent smoothing' : 'load_smoothing'">
        <h1>Des dessins, des dessins !</h1>
        <ul v-if="this.images">
            <li
                :class="i.open? 'current_image' : ''"
                :id="'image'+i.id" v-for="i of this.images"
                :key="i.id" @click="closeTabs(this.images, i.id);
                i.open=!i.open;
                if(i.open){scrollToImage(i.id)}"
            >
                <div class="image">
                    <img :src="i.link"/>
                    <p class="desc">{{i.description}}</p>
                </div>
                <div class="dropdown">
                    <div></div>
                    <div></div>
                </div>
            </li>
            <h2 :class="this.opacity_transition? 'smoothing' : ''">Allez-y, cliquez-donc sur une image !</h2>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioComponent',
        data:()=>({
            opacity_transition: true,
            images:[
                {id: 1, link: "/assets/img/3_meca.jpg", description: "Jambe d'exosquelette mécanique géant, au feutre fin noir. Inspiré par le style des Skells dans Xenoblade Chronicles X.", open: false},
                {id: 2, link: "/assets/img/2_cheveux.jpg", description: "Une personne imaginaire au feutre fin noir, pour dessiner des cheveux longs, leur texture et leurs ombres.", open: false},
                {id: 3, link: "/assets/img/1_chaton.jpg", description: "Mignon petit chaton avec une vieille épée.", open: false},
                {id: 4, link: "/assets/img/4_peinture.jpg", description: "Peinture à gauche, feutre fin noir à droite. Des villes volantes, un côté futuriste, presque cyberpunk.", open: false},
                {id: 5, link: "/assets/img/5_fusain.jpg", description: "Dessin au fusain de l'ENSAIT, \"l'école d'en face\" lorsque j'étais à l'ESAAT. On aperçoit en bas le bâtiment de la cantine.", open: false},
                {id: 6, link: "/assets/img/6_cdi.jpg", description: "Une scène du CDI de l'ESAD au feutre noir fin.", open: false},
                {id: 7, link: "/assets/img/7_rail.jpg", description: "Voie ferrée et paysage visible depuis ma fenêtre en classe, aux marqueurs de couleur et feutre noir fin.", open: false},
                {id: 8, link: "/assets/img/8_fwoosh.jpg", description: "Piste de course pour vaisseaux flottants, au style calqué sur ceux de la série de jeux WipEout. Feutre fin noir et crayons de couleur", open: false},
                {id: 9, link: "/assets/img/9_pwett.jpg", description: "Une scène d'un espace coworking au feutre fin noir. Les paroles et le fichier Photoshop ouvert sur le PC portable sont bien entendu inventés.", open: false},
                {id: 10, link: "/assets/img/10_ui.jpg", description: "Une personne imaginaire au feutre fin noir et crayons de couleur. Étrangement, en ne regardant que sa tête, elle parait pluôt furieuse qu'exaspérée.", open: false},
                {id: 11, link: "/assets/img/11_oeil.jpg", description: "Un œil mécanique stylisé au feutre noir fin.", open: false},
                {id: 12, link: "/assets/img/12_arbre.jpg", description: "Un arbre abstrait, au feutre fin noir avec beaucoup de petits traits.", open: false},
                {id: 13, link: "/assets/img/13_masque.jpg", description: "Un masque qui vole en éclats, laissant derrière lui une traînée colorée. Feutre fin noir et crayons de couleur.", open: false},
                {id: 14, link: "/assets/img/14_oeilmieux.jpg", description: "Un œil dans un style plus réaliste, au feutre noir fin.", open: false},
                {id: 15, link: "/assets/img/15_pot.jpg", description: "Une plante en pot aperçue en haut d'un bâtiment, pendant la longue attente avant le tournage d'une scène du film \"Chez Nous\" de Lucas Belvaux. Dessinée au feutre noir fin et au feutre noir épais usé.", open: false},
                {id: 16, link: "/assets/img/16_hall.jpg", description: "Dessin d'espace du hall de l'ESAD, pur trait sans ombres ni lumières, simple exercice de construction rigoureuse d'un espace observé.", open: false},
                {id: 17, link: "/assets/img/17_ESAD.jpg", description: "Une vue d'une autre fenêtre de ma salle de classe de l'ESAD, au feutre noir fin.", open: false},
                {id: 18, link: "/assets/img/18_roller.jpg", description: "Un jeune homme qui vole si haut dans le ciel avec ses rollers, dessiné au feutre noir fin.", open: false},
                {id: 19, link: "/assets/img/19_rainbow.jpg", description: "Une jeune femme aux cheveux arc-en-ciel assise à un bar. Feutre noir fin et crayons de couleur.", open: false},
                {id: 20, link: "/assets/img/20_yaquedescheveux.jpg", description: "Simple exercice de texture, pour montrer à un ami comment je dessine les cheveux, leur texture, et leurs reflets avec ce même feutre fin noir.", open: false},
            ],
            image_open: false
        }),
        methods:{
            closeTabs(tab_list, i){
                tab_list.map(tab => {if(tab.id != i){tab.open=false}})
            },
            scrollToImage(id){
                if(window.screen.width >= 830){
                    setTimeout(()=>{scrollTo(0, document.querySelector(`#image${id}`).offsetTop - 20)}, 150);
                }else{
                    setTimeout(()=>{scrollTo(0, document.querySelector(`#image${id}`).offsetTop - 70)}, 150);
                }
            }//cette fonction prend mal en compte le changement de largeur d'écran
        },
        mounted(){
            setTimeout(()=>{this.opacity_transition = false}, 100);
        }
    }
</script>

<style scoped>
    h1{
        padding: 10px 15px;
        text-align: center;
        box-shadow: 0 15px 10px -10px #0008;
        margin-bottom: 20px;
        transition: all 0.5s;
    }

    h2{
        position: fixed;
        width: 55vw;
        left: 45vw;
        top:45vh;
        transition: all 0.3s;
        display:none;
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
    }

    ul{
        max-width:100vw;
        display: flex;
        flex-flow: column;
    }

    li{
        transition: all 0.3s;
        padding:0 20px 30px;
        position: relative;
        cursor: pointer;
    }

    .current_image{
        margin-bottom: 30px;
        box-shadow: 0 15px 10px -10px #0008;
    }
    .current_image:not(:first-child){
        margin-top:-100px;
    }

    img{
        background-color:var(--main-bg-color);
        width:100%;
        max-width:100vw;
        transition: all 0.3s;
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
    }
    li:not(:first-child) img{
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

    .dropdown{
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        height: 30px;
        width: 30px;
        background-color: var(--main-bg-color);
        border-radius: 15px;
        transition: all 0.3s;
    }
    .current_image .dropdown{
        bottom: -10px;
        box-shadow: 0 15px 10px -7px #0008;
    }

    .dropdown div{
        background-color: var(--link-bg-hover);
        height: 6px;
        width: 12px;
        border-radius: 3px;
        position: absolute;
        transition: all 0.3s;
        top: 12px;
    }
    .dropdown div:first-child{
        left: 6px;
        transform: rotate(45deg);
    }
    .dropdown div:last-child{
        right: 6px;
        transform: rotate(-45deg);
    }
    .current_image .dropdown div:first-child{
        transform: rotate(135deg);
    }
    .current_image .dropdown div:last-child{
        transform: rotate(-135deg);
    }

    @media (min-width: 830px){
        h2{
            display: inline-block;
            transition: all 0.5s;
        }
        ul{
            padding-top: 20px;
            transition: all 0.5s;
        }
        li{
            width:0;
            margin-left: -20vw;
            transform: rotate(5deg);
            padding: 0;
            z-index: 1;
            margin-bottom: min(25vw, 375px);
            transition: all 0.5s;
        }
        li:not(:first-child) img{
            border-top: none;
        }
        .image{
            max-width: min(900px, 60vw);
            max-height: 100vh;
            position: absolute;
            left: 0;
            z-index: 3;
            transition: all 0.5s;
        }
        img{
            width: 60vw;
            max-width: 900px;
            max-height: 80vh;
            object-fit: contain;
            background-color: transparent;
        }
        .desc{
            width: 100%;
            padding: 20px 40px;
            opacity: 0;
            margin-top: -4px;
            transform: rotate(-5deg);
            text-align: center;
            transition: all 0.5s;
        }
        .dropdown{
            display:none;
        }
        .current_image{
            margin-bottom: min(25vw, 375px);
            box-shadow: none;
            transform: rotate(0deg);
            margin-left: 0;
        }
        .current_image:not(:first-child){
            margin-top:0;
        }
        .current_image .image{
            margin-left:0;
            left: 38vw;
        }
        .current_image .desc{
            padding: 20px 40px;
            opacity: 1;
            box-shadow: 0 15px 10px -10px #0008;
            transform: rotate(0deg);
        }
        /*.current_image .dropdown{
            bottom: -10vw;
            box-shadow: none;
            transform: rotate(-90deg);
        }*/
        .current_image ~ h2{
            left: 70vw;
            color: var(--transp-main-text-color);
        }
        .smoothing h1{
            transform: translateY(-60px);
        }
        .smoothing ul li{
            transform: rotate(15deg);
        }
        .smoothing ul li > div{
            transform: translateY(300px);
        }
        .smoothing ul h2{
            transform: translateX(300px);
        }
    }
</style>