<template lang="pug">
    .tag-list
        .tag-list-item(v-for="item of result")
            a(:href="item.path") {{item.title}} 
</template>

<script>
export default {
    name: 'TagList',
    props: {
        tag: String
    },
    computed: {
        result(){
            const {pages} = this.$site
            const result = pages.filter(page =>{
                const {frontmatter} = page
                return frontmatter.tags && frontmatter.tags.includes(this.tag)
            })
            return result
        }
    }
}
</script>

