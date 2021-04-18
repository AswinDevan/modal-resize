<template>
  <div id="app">
    <div class="col-6 offset-3">
      <div id="buttonDesign">
        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="change('basic')">Open Basic Standard Modal</button>
        <br><br><br>
        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="change('full')">Open Full View Modal</button>
      </div>
      <div v-if="isVisible">
        <hello-world :modaltype="modalType" @eventName="modalType=$event">
          <img src="./assets/img1.jpg" alt="Logo" width="100%">
          <h4>The Text displayed inside Modal Body</h4>
        </hello-world>
      </div>
    </div>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default {
  name: 'App',
  data:function(){
    return{
      isVisible:false,
      modalType:'',
    }
  },
  methods:{
    change(value){
      this.isVisible=true;
      this.modalType=value;
    }
  },
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
#buttonDesign{
  text-align: center;
}
</style>
