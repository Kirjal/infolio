<template>
    <div :class="this.opacity_transition? 'load_smoothing transparent smoothing' : 'load_smoothing'">
        <header>
            <h1>Kirjal</h1>
            <small>Bienvenue chez moi !</small>
        </header>

        <main :class="this.opacity_transition? 'smoothing' : ''">
            <h2>Par ici, j'expose des choses :</h2>
            <ul>
                <li>
                    <h3><router-link :to="{name:'cv'}">Mon CV</router-link></h3>
                </li>
                <li>
                    <h3><router-link :to="{name:'portfolio'}">De jolis dessins</router-link></h3>
                </li>
            </ul>
        </main>
    </div>

    <!--<article>/!\ Le site est actuellement en pleine remise en forme /!\</article>-->
</template>

<script>
    export default {
        name: 'AccueilComponent',
        data:()=>({
            opacity_transition: true
        }),
        mounted(){
            setTimeout(()=>{this.opacity_transition = false}, 100);
        }
    }
</script>

<style scoped>
    header{
        margin-bottom: 30px;
        text-align: center;
    }

    h1{
        padding: 10px 20px 0;
        font-size: 4rem;
        transition: all 0.5s;
    }

    h2{
        text-align: center;
        padding:10px;
        box-shadow: 0 15px 10px -10px #0008;
        transition: all 0.5s;
    }

    main a{
        width: 100%;
        max-width: 500px;
        padding:10px 0 12px;
    }
    
    header small{
        display: inline-block;
        padding-left: 120px;
        width:100%;
        transition: all 0.5s;
    }

    main{
        padding: 20px;
    }

    article{
        text-align: center;
        background-color: var(--warning-color);
        color: #233;
        font-weight: bold;
        padding: 20px;
        padding-right: 52px;
        width: 120vw;
        position: fixed;
        top: 40vh;
        left:-10vw;
        transform: rotate(-5deg)
    }

    ul{
        padding: 20px 0;
        display: flex;
        flex-flow: column wrap;
        gap: 20px;
        text-align: center;
    }

    li{
        transition: all 0.5s;
    }

    @media(min-width: 1024px){
        .smoothing header h1{
            transform: translateY(-60px);
        }
        .smoothing header small{
            transform: translateX(130px);
        }
        .smoothing h2{
            transform: translateY(40px);
        }
        .smoothing li:nth-child(2n+1){
            transform: translate(-100px, 60px);
        }
        .smoothing li:nth-child(2n){
            transform: translate(100px, 60px);
        }
    }
</style>