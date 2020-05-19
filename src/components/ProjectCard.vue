<template>
    <article>
        <a :href="project.url" class="image"><img :src="require(`../images/${project.image}`)" alt="" /></a>
        <h3 class="major">{{project.title}}</h3>
        <p>{{project.description}}</p>
        <div class="col-6 col-12-medium">
            <h4>Technologies :</h4>
            <ul>
                <li v-bind:key="techno" v-for="techno in project.technologies">{{techno}}</li>
            </ul>
        </div>
        <ul class="actions">
            <li v-if="project.url">
                <a :href="project.url" class="button small primary icon solid fa-link">{{projectButtons.url}}</a>
            </li>
            <li v-if="project.github">
                <a :href="project.github" class="button small primary icon brands fa-github">{{projectButtons.github}}</a>
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            project: Object,
            projectButtons: Object
        },
    }
</script>

<style scoped>

</style>
