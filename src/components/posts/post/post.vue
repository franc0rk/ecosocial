<template>
  <div class="post">
    <q-card inline class="q-ma-sm">
      <q-card-title>
        <q-item multiline>
          <q-item-side avatar="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png" />
          <q-item-main
            :label="post.user.name"
            label-lines="1"
            :sublabel="post.body"
            sublabel-lines="5"
          />
          <q-item-side right>
            <q-item-tile stamp>{{ post.created_at }}</q-item-tile>
          </q-item-side>
        </q-item>
      </q-card-title>
      <q-card-media v-if="post.attachments">
        <img v-for="attachment in post.attachments" :key="attachment.id" :src="attachment.path">
      </q-card-media>
      <q-card-actions align="around">
        <q-btn class="btn-thanks" flat round :color="voteStatus" icon="public" @click="saveVote" :disabled="voting" />
        <q-btn class="btn-comment" flat round color="faded" icon="chat" />
        <q-btn class="btn-share" flat round color="faded" icon="share" @click="showing_modal = true" />
      </q-card-actions>
    </q-card>
    <share-modal
      v-if="showing_modal"
      :url="url"
      @close="showing_modal = false"
    />
  </div>
</template>
<style lang="stylus">
  @import '~variables'

  .btn-thanks:hover
    color: $positive!important
</style>
<script>
import shareModal from 'components/modals/share'
export default {
  name: 'post',
  props: ['post'],
  components: {
    shareModal
  },
  data () {
    return {
      voting: false,
      showing_modal: false
    }
  },
  methods: {
    saveVote (event) {
      this.voting = true

      this.persist()
        .then(vote => {
          this.$nextTick(() => {
            this.voting = false
          })
        })
    },
    persist () {
      return this.currentUserHasVoted ? this.unvote() : this.vote()
    },
    vote () {
      return this.$store.dispatch('posts/vote', this.post.id)
    },
    unvote () {
      let payload = {
        post_id: this.post.id,
        vote_id: this.currentUserHasVoted.id
      }
      return this.$store.dispatch('posts/unvote', payload)
    }
  },
  computed: {
    currentUserHasVoted () {
      return this.post.votes.find(vote => vote.user_id === this.$store.state.users.current.id)
    },
    voteStatus () {
      return this.currentUserHasVoted
        ? 'positive'
        : 'faded'
    },
    url () {
      return `${process.env.APP_URL}posts/${this.post.id}`
    }
  }
}
</script>
