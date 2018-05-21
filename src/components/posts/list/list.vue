<template>
  <div class="posts-list">
    <post v-for="post in posts" :key="post.id" :post="post"></post>
  </div>
</template>
<style lang="stylus">

</style>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import Post from 'components/posts/post/post'

export default {
  components: {
    Post
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts
    }),
    ...mapGetters('posts', {
      total: 'total'
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetch'
    })
  },
  created () {
    this.fetchPosts()
  }
}
</script>
