<style lang="stylus">
  .url-field
    font-size: 14px
</style>
<template>
  <q-modal
    v-model="opened"
    minimized
    :content-css="{padding: '64px 32px'}"
    ref="modalRef"
    @hide="close"
  >
    <div class="q-subheading">Comparte en tus redes sociales!</div>
    <social-sharing :url="url" inline-template>
      <div class="q-ma-sm">
        <network network="facebook">
          <q-btn color="indigo" icon="mdi-facebook"></q-btn>
        </network>
        <network network="twitter">
          <q-btn color="blue" icon="mdi-twitter"></q-btn>
        </network>
        <network network="googleplus">
          <q-btn color="deep-orange" icon="mdi-google-plus"></q-btn>
        </network>
        <network network="linkedin">
          <q-btn color="indigo" icon="mdi-linkedin"></q-btn>
        </network>
      </div>
    </social-sharing>
    <q-input
      class="q-mt-md url-field"
      readonly
      ref="url"
      v-model="url"
      :after="[{icon: 'filter none', handler () { copyUrlToClipboard() }}]"
    />
    <q-btn class="q-ma-sm" color="primary" v-close-overlay label="Close" />
  </q-modal>
</template>
<script>
export default {
  name: 'share-modal',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      opened: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    copyUrlToClipboard () {
      this.$refs.url.select()
      document.execCommand('copy')
      this.$q.notify({
        color: 'positive',
        message: 'Enlace copiado al portapapeles',
        icon: 'public'
      })
    }
  }
}
</script>
