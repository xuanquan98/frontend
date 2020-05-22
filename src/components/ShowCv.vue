<template >
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" style="color: white">KLTN</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{user}}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="md-layout md-gutter" style="text-align: center; padding-top: 1%">
      <div class="md-layout-item" style="padding-left: 15%">
        <md-field >
          <label for="month">Month</label>
          <md-select v-model="month" name="month" id="month" placeholder="Month" @input = "getCv" @change="getCv">
            <md-option value="01">1</md-option>
            <md-option value="02">2</md-option>
            <md-option value="03">3</md-option>
            <md-option value="04">4</md-option>
            <md-option value="05">5</md-option>
            <md-option value="06">6</md-option>
            <md-option value="07">7</md-option>
            <md-option value="08">8</md-option>
            <md-option value="09">9</md-option>
            <md-option value="10">10</md-option>
            <md-option value="11">11</md-option>
            <md-option value="12">12</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item" style="padding-right: 15%">
        <md-field>
          <label for="year">Year</label>
          <md-select v-model="year" name="year" id="year" placeholder="Year" @input = "getCv" @change="getCv">
            <md-option value="2018">2018</md-option>
            <md-option value="2019">2019</md-option>
            <md-option value="2020">2020</md-option>
            <md-option value="2021">2021</md-option>
            <md-option value="2022">2022</md-option>
            <md-option value="2023">2023</md-option>
            <md-option value="2024">2024</md-option>
            <md-option value="2025">2025</md-option>
            <md-option value="2026">2026</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">List Cvs</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name or skills..." v-model="search" @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>

    <md-table md-card >
      <md-table-row id="headerTMS">
        <md-table-head md-sort-by="id" >ID</md-table-head>
        <md-table-head > Name CV</md-table-head>
        <md-table-head > Full name</md-table-head>
        <md-table-head > Skill </md-table-head>
        <md-table-head > Email </md-table-head>
        <md-table-head > Phone </md-table-head>
        <md-table-head > Gender </md-table-head>
        <md-table-head > Date of birth </md-table-head>
      </md-table-row>
      <md-table-row id ="timesheet-table" v-for="(item) in cvs" @click="demo(item)">
        <md-table-cell >{{item.id }}</md-table-cell>
        <md-table-cell><a v-bind:href = item.link target="_blank">{{ item.nameCv }}</a></md-table-cell>
        <md-table-cell>{{ item.fullName }}</md-table-cell>
        <md-table-cell>{{ item.skill }}</md-table-cell>
        <md-table-cell>{{ item.email }}</md-table-cell>
        <md-table-cell>{{ item.phone }}</md-table-cell>
        <md-table-cell>{{ item.gender }}</md-table-cell>
        <md-table-cell>{{ item.dateOfBirth }}</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>

    <div name="modal" v-if="showButtonEdit">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <md-button class="md-raised md-primary" @click="update">edit</md-button>
            <md-button class="md-raised md-primary" @click="deleteCv">delete</md-button>
            <md-button class="md-raised md-accent" @click="showButtonEdit = false">Cancel</md-button>
          </div>
        </div>
      </div>
    </div>


    <div name="modal" v-if="showEditModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>Id: {{itemCv.id}}</h3>
            <md-field>
              <label>Name Cv</label>
              <md-input v-model="nameCv"></md-input>
            </md-field>
            <md-field>
              <label>Full name</label>
              <md-input v-model="fullname"></md-input>
            </md-field>
            <md-field>
              <label>Email</label>
              <md-input v-model="email"></md-input>
            </md-field>
            <md-field>
              <label>Phone</label>
              <md-input v-model="phone"></md-input>
            </md-field>
            <md-field>
              <label>Gender</label>
              <md-input v-model="gender"></md-input>
            </md-field>
            <md-field>
              <label>Date of birth</label>
              <md-input v-model="dateOfBirth"></md-input>
            </md-field>
            <md-field>
              <label>Skill</label>
              <md-textarea v-model="skill"></md-textarea>
            </md-field>

            <md-button class="md-raised md-primary" @click="updateCv">Update</md-button>
            <md-button class="md-raised md-accent" @click="showEditModal = false">Cancel</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ShowCv.js"></script>
<style scoped src="./ShowCV.css"></style>
