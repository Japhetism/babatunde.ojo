<template>
    <div id="home" class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                <h3 class="text-center">Babatunde Ojo</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto">
                <img src="../assets/images/tunde_ojo.jpg" class="rounded mx-auto d-block" alt="OJO BABATUNDE JAPHET" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p class="text-center">Performance-driven and motivated full stack developer with extensive experience in participating in all phases of software development. Dedicated to meeting customer requirements with innovative solutions that maximize efficiency and exceed capability targets. Valuable team member who has experience diagnosing problems and developing solutions. Comfortable discussing technical issues and solutions with analysts and clients.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="text-center mx-auto">
                    <li><router-link class="router-link" :to="{name: 'Home'}">Home</router-link></li>
                    <li><router-link class="router-link" :to="{name: 'About'}">About</router-link></li>
                    <li><router-link class="router-link" :to="{name: 'Projects'}">Projects</router-link></li>
                    <li><router-link class="router-link" :to="{name: 'Resume'}">Resume</router-link></li>
                    <li><router-link class="router-link" :to="{name: 'Contact'}">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
#home {
    height: 100vh;
}
#home h3 {
    font-size: 70px;
    margin-top: 1vh;
}
#home img {
    height: 30vh;
    width: 30vh;
    border-radius: 30vh !important;
    margin-top: 3vh;
}
#home p {
    margin-top: 3vh;
    font-size: 3vh;
}
#home ul {
    margin-top: 60px;
    border-top: solid;
    list-style-type: none;
    width: 600px;
}
#home li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    font-size: 3vh;
    text-decoration: none;
}
.router-link {
    color: #03034b;
    text-decoration: none;
}
.router-link:hover {
    color: #03034b;
    text-decoration: none;
}
</style>
