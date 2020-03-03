<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" name="myfile" ref="file" v-on:change="handleFileUpload(this)"/>
      </label>
      <button v-show="showSubmit" v-on:click="submitFile()">Submit</button>
    </div>
    <embed src="http://placehold.it/180" width="800px" height="2100px" />
  </div>
</template>
<script src="./HelloWorld.js"></script>
<style scoped src="./HelloWorld.css"></style>
