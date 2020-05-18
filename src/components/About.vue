<template>
    <section v-if="lang" id="one" class="wrapper spotlight style1">
        <div class="inner">
            <a class="image about"><img src="../images/pic01.jpg" alt="" /></a>
            <div class="content">
                <h2 class="major">{{lang.title}}</h2>
                <p>{{lang.description}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",
        props: {
            lang: Object
        }
    }
</script>

<style scoped>
    .wrapper.spotlight .image {
        width: 13em;
    }

    .about {
        margin-top: 20px !important;
    }
</style>
