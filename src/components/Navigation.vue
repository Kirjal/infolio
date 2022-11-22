<template>
    <nav @click="this.nav_open=!nav_open" :class="nav_open? 'nav_open' : ''">
        <div class="nav_screen_block"></div>
        <div class="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul>
            <li class="logo">
                <h2><router-link :to="{name:'accueil'}">Kirjal</router-link></h2>
            </li>
            <li>
                <router-link :to="{name:'accueil'}">Accueil</router-link>
            </li>
            <li>
                <router-link :to="{name:'portfolio'}">Portfolio</router-link>
            </li>
            <li>
                <router-link :to="{name:'cv'}">CV</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavigationComponent',
        data:()=>({
            nav_open: false
        })
    }
</script>

<style scoped>
    nav{
        position: fixed;
        left: 100vw;
        top: 0;
        width: 280px;
        transition: all 0.3s;
        z-index: 5;
        height: 100vh;
    }

    .nav_screen_block{
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 0;
        transition: all 0.3s;
        background-color: #0008;
    }
    .nav_open .nav_screen_block{
        width: calc(100vw - 280px);
        right: 280px;
    }

    .menu{
        background-color: var(--main-bg-color);
        border-radius: 40px;
        height: 80px;
        width: 120px;
        position: fixed;
        bottom: 0;
        right: -40px;
        transition: all 0.3s;
    }
    .nav_open .menu{
        right: 240px;
        width: 80px;
    }

    .menu div{
        height: 6px;
        width: 35px;
        border-radius:3px;
        background-color: var(--link-bg-color);
        transition: all 0.3s;
    }

    .menu div:first-child{
        position: absolute;
        top: 21px;
        left: 22.5px;
    }
    .menu div:nth-child(2){
        position: absolute;
        top: 37px;
        left: 22.5px;
    }
    .menu div:last-child{
        position: absolute;
        top: 53px;
        left: 22.5px;
    }
    .nav_open .menu div:first-child{
        position: absolute;
        transform: rotate(45deg);
        top: 26.5px;
        left: 30px;
    }
    .nav_open .menu div:nth-child(2){
        position: absolute;
        left: 18.5px;
    }
    .nav_open .menu div:last-child{
        position: absolute;
        transform: rotate(-45deg);
        top: 47.5px;
        left: 30px;
    }

    ul{
        display: flex;
        flex-flow: column-reverse wrap;
        gap:20px;
        height: 100%;
        width: 100%;
        background-color: var(--main-bg-color);
        padding: 70px;
    }

    .logo{
        position: absolute;
        width: 140px;
        text-align: center;
        left:30px;
        top:20px;
    }

    .logo a{
        color: var(--link-bg-color);
        background-color: transparent;
        font-size:3.5rem;
    }

    .logo:hover a{
        color: var(--link-bg-hover);
    }

    li{
        width: 100%;
        height:26px;
    }

    a{
        width:100%;
    }
    .nav_open{
        left: calc(100vw - 280px);
    }

    @media (min-width: 996px){
        .menu{
            bottom: calc(100vh - 97px)
        }

        ul{
            padding-top: 120px;
            flex-flow: column wrap;
        }
    }
</style>