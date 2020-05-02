<template >
    <!--<div >
        <input type="file" id="file" name="myfile" ref="file" v-on:change="handleFileUpload(this)"/>
        <label for="file" class="btn-2">upload</label>
      <button v-show="showSubmit" v-on:click="submitFile()">Submit</button>
    </div>-->
  <div style="background-color: #31c1ef;height: 100vh ">
  <div class="wrapper" v-if="showUpload">
      <p>Upload file <code>pdf</code> here</p>
      <input type="file" id="file" name="myfile" ref="file" v-on:change="handleFileUpload(this) " accept=".pdf"/>
      <label for="file" class="btn-2">upload</label>
      <p class="footer">by <a href="https://github.com/xuanquan98/frontend" target="_blank">Vu Xuan Quan</a></p>
  </div>
    <div class="row" style="height: 100vh" v-if="!showUpload">
      <div class="col">
        <div class="item button-hand" style="--bg-color: #3498db;" >
          <button v-on:click="submitFile()" v-if="showSubmit">Submit</button>
          <div v-if="!showSubmit" style="color: white">
            <h2>Information: </h2>
            <li v-for="(value, name) in infor">
              {{ name }}: {{ value }}
            </li>
            <h2>Skills: </h2>
            <li v-for="(value, name) in skill">
              {{ name }}: {{ value }}
            </li>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div class="col">
        <embed v-bind:src = "imagePreview" width="90%" height="100%"/>
      </div>
    </div>
  </div>
</template>
<script src="./HelloWorld.js"></script>
<style scoped src="./HelloWorld.scss"></style>
