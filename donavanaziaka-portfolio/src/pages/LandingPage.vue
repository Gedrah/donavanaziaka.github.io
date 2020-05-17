<template>
    <div>
        <Header/>
        <Banner/>
        <About/>
        <ProjectsSection/>
        <Contact/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Banner from "../components/Banner";
    import ProjectsSection from "../components/ProjectsSection";
    import About from "../components/About";
    import Contact from "../components/Contact";

    export default {
        name: "LandingPage",
        components: {
            Contact,
            About,
            ProjectsSection,
            Header,
            Banner
        }
    }
</script>

<style>
    @import '../css/main.css';
    @import '../sass/_banner.scss';
    @import '../sass/_footer.scss';
    @import '../sass/_header.scss';
</style>
