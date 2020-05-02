import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, axios, VueAxios)

export default {
  name: 'FileField',
  data () {
    return {
      username: '',
      password: ''
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
            var data = {'success': true,
              'username': response.data['data']}
            this.$store.dispatch('loginSuccess', data)
            this.$router.push('showCv')
          }
        })
        .catch(function (response) {
          // handle error
          console.log(response)
        })
    }
  }
}
