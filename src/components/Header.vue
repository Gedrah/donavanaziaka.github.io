<template>
    <header v-if="lang" id="header">
        <h1><a v-on:click="moveToElement('home')">{{this.lang.home}}</a></h1>
        <nav>
            <a v-on:click="moveToElement('about')">{{this.lang.about}}</a>
            <a v-on:click="moveToElement('projects')">{{this.lang.projects}}</a>
            <a href="https://github.com/Gedrah" target="_blank">{{this.lang.contact}}</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            moveToElement: Function,
            lang: Object
        }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>
