<template >
  <!--<div >
      <input type="file" id="file" name="myfile" ref="file" v-on:change="handleFileUpload(this)"/>
      <label for="file" class="btn-2">upload</label>
    <button v-show="showSubmit" v-on:click="submitFile()">Submit</button>
  </div>-->
  <div style="background-color: #31c1ef;height: 100vh ">
    <div class="wrapper">
      <span style="color: red" v-show="isLogin"> Username or password invalid</span>
      <md-field>
        <label>Username</label>
        <md-input v-model="username" ></md-input>
      </md-field>
      <md-field :md-toggle-password="false">
        <label>Password </label>
        <md-input v-model="password" type="password" ></md-input>
      </md-field>
      <div>
      <md-button class="md-raised" @click="login">Login</md-button>
      </div>
    </div>
  </div>
</template>
<script src="./Login.js"></script>
<style scoped src="./Login.css"></style>
