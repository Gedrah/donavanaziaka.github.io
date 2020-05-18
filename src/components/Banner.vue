<template>
    <section v-if="lang" id="banner">
        <div class="inner">
<!--            <div class="logo"><span class="icon fa-gem"></span></div>-->
            <h2>{{lang.name}}</h2>
            <p>{{lang.description}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            lang: Object
        }
    }
</script>

<style scoped>
    @import '../sass/_banner.scss';

</style>
