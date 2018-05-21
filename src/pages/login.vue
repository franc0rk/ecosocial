<template>
  <q-page class="flex flex-center page-login">
    <q-card inline class="q-ma-sm" align="center">
      <q-card-media>
        <q-icon name="public" size="10em" color="positive"></q-icon>
      </q-card-media>
      <q-card-title>
        Ecosocial
        <span slot="subtitle">Ingresa tus credenciales</span>
      </q-card-title>
      <q-card-main>
        <div class="fields">
          <q-field
            icon="person"
          >
            <q-input
              placeholder="Correo electrónico"
              v-model="credentials.username"
            />
          </q-field>
          <q-field
            icon="vpn key"
          >
            <q-input
              placeholder="Contraseña"
              type="password"
              v-model="credentials.password"
            />
          </q-field>
        </div>
        <div class="buttons">
          <q-btn color="primary" @click="register">Regístrate</q-btn>
          <q-btn color="positive" @click="submit">Iniciar sesión</q-btn>
        </div>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
  .buttons, .q-field
    margin: 16px auto
</style>

<script>
import OAuth from 'src/services/oauth'

export default {
  name: 'PageLogin',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      OAuth.authenticate(this.credentials.username, this.credentials.password)
        .then(data => {
          localStorage.setItem('auth_token', data.access_token)
          this.$q.notify({
            color: 'positive',
            message: 'Bienvenido a Ecosocial!',
            icon: 'public'
          })
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error.response)
          this.$q.notify({
            color: 'negative',
            message: 'Credenciales incorrectas',
            icon: 'public'
          })
        })
    },
    register () {
      this.$router.push('register')
    }
  }
}
</script>
