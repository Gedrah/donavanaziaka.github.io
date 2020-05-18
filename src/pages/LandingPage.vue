<template>
    <div>
        <Header :lang="lang.header" :move-to-element="moveToElement"/>
        <Banner :lang="lang.banner" class="home"/>
        <About :lang="lang.about" ref="about" class="about"/>
        <ProjectsSection :lang="lang.projects" ref="projects" class="projects"/>
        <Contact :lang="lang.contact" ref="contact" class="contact"/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Banner from "../components/Banner";
    import ProjectsSection from "../components/ProjectsSection";
    import About from "../components/About";
    import Contact from "../components/Contact";
    import LanguageFr from "../languages/portfolio-fr";
    import LanguageEng from "../languages/portfolio-en";

    export default {
        name: "LandingPage",
        data() {
          return {
              lang: {}
          }
        },
        components: {
            Contact,
            About,
            ProjectsSection,
            Header,
            Banner
        },
        methods: {
            moveToElement(element) {
                const elem = this.$el.getElementsByClassName(element)[0];
                elem.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
            },
        },
        mounted() {
            if (this.$route.query.lang === 'fr') {
                this.lang = LanguageFr
            } else {
                this.lang = LanguageEng;
            }
        }
    }
</script>

<style>
    @import '../css/main.css';
    @import '../sass/_banner.scss';
    @import '../sass/_header.scss';
</style>

<style scoped>
    body {
        background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url(../images/bg.jpg);
    }
</style>
