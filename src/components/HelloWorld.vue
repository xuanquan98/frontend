<template>
  <div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-6 col-md-4" >
      <form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="processFile($event)">
  </div>
</form>
</div>
    <div class="col-12 col-md-8">
      <embed src="someData" type="application/pdf" width="700px" height="650px" />
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
export default {
  name: 'HelloWorld',
  data: {
    someData: null,
    linkpdf: '',
    image: ''
  },
  methods: {
    processFile(event) {
      console.log('asdasda')
      this.someData = event.target.files[0]
      console.log(this.someData)
    },
    onFileChange(e) {
      console.log(this.linkpdf)
      var files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return;
      this.createImage(files[0])
      console.log(this.image)
      console.log(file)
    },
    createImage(file) {
      console.log('here')
      console.log(file)
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      };
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>
