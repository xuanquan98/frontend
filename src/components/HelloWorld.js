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
      file: '',
      showSubmit: false,
      showUpload: true,
      imagePreview: ''
    }
  },

  methods: {
    /*
      Submits the file to the server
    */
    submitFile () {
      /*
              Initialize the form data
          */
      let formData = new FormData()

      /*
          Add the form data we need to submit
      */
      formData.append('file', this.file)

      /*
        Make the request to the POST /single-file URL
      */
      console.log('submitFile')
      axios.post('http://localhost:8000/home',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function () {
          console.log('FAILURE!!')
        })
    },

    /*
      Handles a change on the file upload
    */
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      let reader = new FileReader()
      reader.addEventListener('load', function () {
        this.imagePreview = reader.result
      }.bind(this), false)
      reader.readAsDataURL( this.file )
      console.log(this.imagePreview)
      console.log(this.file)
      this.showSubmit = true
      this.showUpload = false
    }
  }
}
