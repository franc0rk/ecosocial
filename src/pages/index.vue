<template>
  <q-page class="flex flex-center">
    <h5>Hola {{username}}!</h5>
    <post-form></post-form>
    <posts-list></posts-list>
  </q-page>
</template>

<style>
</style>

<script>
import PostForm from 'components/posts/form/form'
import PostsList from 'components/posts/list/list'

export default {
  name: 'PageIndex',
  components: {
    PostForm,
    PostsList
  },
  computed: {
    username () {
      return this.$store.state.users.current
        ? this.$store.state.users.current.name
        : ''
    }
  }
}
</script>
