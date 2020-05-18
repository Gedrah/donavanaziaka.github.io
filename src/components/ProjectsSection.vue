<template>
    <section v-if="lang" id="four" class="wrapper alt style1">
        <div class="inner">
            <h2 class="major projects">{{lang.title}}</h2>
            <p>{{lang.description}}</p>
            <section class="features">
                <ProjectCard v-bind:key="project.name" v-for="project in lang.projects" :project-buttons="lang.projectButtons" :project="project"/>
            </section>
        </div>
    </section>
</template>

<script>
    import ProjectCard from "../components/ProjectCard";
    export default {
        name: "ProjectsSection",
        components: {
            ProjectCard
        },
        props: {
            lang: Object
        }
    }
</script>

<style scoped>
    .projects {
      margin-top: 20px !important;
    }
</style>
