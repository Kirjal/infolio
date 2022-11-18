<template>
    <nav>
        <ul>
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
        })
    }
</script>

<style scoped>

</style>