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
      user: this.$store.getters.username
    }
  },
  mounted () {
    axios.get('http://localhost:8000/home/getCv?month=' + this.month + '&year=' + this.year)
      .then(response => {
        // handle success
        this.allCv = response.data['data']
        this.cvs = this.allCv
        this.user = this.$store.getters.username
        console.log('-----')
        console.log(this.user)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  },
  methods: {
    demo () {
      axios.get('http://localhost:8000/home/getCv?month=' + this.month + '&year=' + this.year)
        .then(response => {
          // handle success
          this.allCv = response.data['data']
          this.cvs = this.allCv
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    },
    searchOnTable () {
      this.cvs = searchByName(this.allCv, this.search)
    }
  }
}
