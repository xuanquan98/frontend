import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(BootstrapVue, axios, VueAxios)

export default {
  name: 'FileField',
  data () {
    return {
      username: '',
      password: '',
      isLogin: false
    }
  },

  methods: {
    login () {
      var bodyFormData = new FormData()
      bodyFormData.set('username', this.username)
      bodyFormData.set('password', this.password)
      axios({
        method: 'post',
        url: 'http://localhost:8000/home/login',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(response => {
          // handle success
          if (response.data['data'] !== 'Fail') {
            let data = {'success': true,
              'username': response.data['username']}
            this.$store.dispatch('loginSuccess', data)
            localStorage.setItem('user-token', response.data['data'])
            this.$router.push('showCv')
          } else this.isLogin = true
        })
        .catch(function (response) {
          // handle error
          console.log(response)
        })
    }
  }
}
