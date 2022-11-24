<template>
    <header>
        <h1>Kirjal</h1>
        <small>Bienvenue chez moi !</small>
    </header>

    <main>
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

    <!--<article>/!\ Le site est actuellement en pleine remise en forme /!\</article>-->
</template>

<script>
    export default {
        name: 'AccueilComponent',
        data:()=>({
        })
    }
</script>

<style scoped>
    header{
        margin-bottom: 30px;
    }

    h1{
        padding: 10px 20px 0;
        font-size: 4rem;
    }

    h2{
        text-align: center;
        padding:10px;
        box-shadow: 0 15px 10px -10px #0008;
    }

    main a{
        width: 100%;
        max-width: 500px;
        padding:10px 0 12px;
    }
    
    small{
        display: inline-block;
        padding-left: 120px;
        width:100%;
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
</style>