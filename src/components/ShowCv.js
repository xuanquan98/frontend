import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import format from 'date-fns/format'

Vue.use(VueMaterial, axios, VueAxios)

const toLower = text => {
  return text.toString().toLowerCase()
}

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.fullName).includes(toLower(term)) || toLower(item.skill).includes(toLower(term)))
  }

  return items
}

export default {
  name: 'TableSearch',
  data () {
    let now = new Date()
    return {
      search: null,
      searched: [],
      month: format(now, 'dd-MM-yyyy').split('-')[1],
      year: format(now, 'dd-MM-yyyy').split('-')[2],
      allCv: null,
      cvs: null,
      user: this.$store.getters.username,
      showButtonEdit: false,
      itemCv: null,
      showEditModal: false,
      nameCv: '',
      fullname: '',
      skill: '',
      email: '',
      phone: '',
      gender: '',
      dateOfBirth: ''
    }
  },
  mounted () {
    this.getCv()
  },
  methods: {
    getCv () {
      const token = localStorage.getItem('user-token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = token
        axios.get('http://localhost:8000/home/getCv?month=' + this.month + '&year=' + this.year)
          .then(response => {
            // handle success
            if (response.data['username'] === '') {
              this.$router.push('login')
            } else {
              let data = {'success': true,
                'username': response.data['username']}
              this.$store.dispatch('loginSuccess', data)
              this.allCv = response.data['data']
              this.cvs = this.allCv
              this.user = this.$store.getters.username
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      } else this.$router.push('login')
    },
    searchOnTable () {
      this.cvs = searchByName(this.allCv, this.search)
    },
    logout () {
      const token = localStorage.getItem('user-token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = token
        axios.get('http://localhost:8000/home/logout')
          .then(response => {
            // handle success
            console.log(response)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      }
      localStorage.removeItem('user-token')
      this.$router.push('login')
    },
    demo (item) {
      this.itemCv = item
      this.showButtonEdit = true
    },
    deleteCv () {
      const token = localStorage.getItem('user-token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = token
        axios({
          method: 'delete',
          url: 'http://localhost:8000/home/deleteCv?id=' + this.itemCv.id
        }).then(response => {
          // handle success
          this.showButtonEdit = false
          this.search = null
          this.getCv()
        })
          .catch(function (response) {
            // handle error
          })
      }
    },
    update () {
      this.showButtonEdit = false
      this.nameCv = this.itemCv.nameCv
      this.fullname = this.itemCv.fullName
      this.skill = this.itemCv.skill
      this.email = this.itemCv.email
      this.phone = this.itemCv.phone
      this.gender = this.itemCv.gender
      this.dateOfBirth = this.itemCv.dateOfBirth
      this.showEditModal = true
    },
    updateCv () {
      const token = localStorage.getItem('user-token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = token
        var bodyFormData = new FormData()
        bodyFormData.set('id', this.itemCv.id)
        bodyFormData.set('nameCv', this.nameCv)
        bodyFormData.set('fullname', this.fullname)
        bodyFormData.set('skill', this.skill)
        bodyFormData.set('email', this.email)
        bodyFormData.set('phone', this.phone)
        bodyFormData.set('gender', this.gender)
        bodyFormData.set('dateOfBirth', this.dateOfBirth)
        axios({
          method: 'post',
          url: 'http://localhost:8000/home/updateCv',
          data: bodyFormData,
          headers: {'Content-Type': 'multipart/form-data'}
        })
          .then(response => {
            // handle success
            this.showEditModal = false
            this.getCv()
          })
          .catch(function (response) {
            // handle error
            console.log(response)
          })
      }
    }
  }
}
