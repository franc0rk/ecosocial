<style lang="stylus">
  @import '~variables'

  .post-form
    width: 80%
    .custom-uploader
      .q-if-inner.col.row.no-wrap.relative-position,
      .q-item-main.q-item-section
        display: none
      .q-list.q-uploader-files.q-py-none.scroll
        width: 308px
        margin-top: 12px
      .q-uploader-file.q-pa-xs.q-item.q-item-division.relative-position
        width: 152px
        display: inline-block
        border: 0
      .q-item-side.q-item-section.q-item-side-right
        margin-left: 0
        text-align: center
        position: absolute
        top: 5px;
        left: 2px;
        .q-icon.cursor-pointer.material-icons.text-primary.q-item-icon
          color: $positive!important
</style>
<template>
  <div class="post-form">
    <q-input class="post-body-field" v-model="post.body" type="textarea" color="positive" placeholder="Comparte algo :)" :max-height="5" />
    <div class="form-buttons row">
      <div class="col">
        <q-uploader
          class="custom-uploader"
          url="http://127.0.0.1"
          extensions=".jpg, .png"
          multiple
          auto-expand
          hide-underline
          hide-upload-button
          hide-upload-progress
          @add="appendAttachment"
          @remove:cancel="removeAttachment"
        />
      </div>
      <div class="col">
        <q-btn
          @click="persist"
          class="post-button float-right"
          align="right"
          color="positive"
          label="Publicar"
          flat
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'post-form',
  data () {
    return {
      post: {
        body: '',
        attachments: []
      }
    }
  },
  methods: {
    persist () {
      this.save(this.post)
        .then(post => {
          this.reset()
        })
    },
    appendAttachment (file) {
      this.post.attachments.push(file[0])
    },
    removeAttachment (file) {
      let removed_file = this.post.attachments.find(attachment => attachment.name === file.name)
      let file_index = this.post.attachments.indexOf(removed_file)

      this.post.attachments.splice(file_index, 1)
    },
    reset () {
      this.post = {
        body: '',
        attachments: []
      }

      this.$children[1].files = []
      this.$children[1].files = []
    },
    ...mapActions({
      save: 'posts/save'
    })
  }
}
</script>
