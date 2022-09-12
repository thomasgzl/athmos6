<template>
  <div class="home-logo">
  <video-background 
     src="./src/assets/valorant.mp4"
    poster="./src/assets/valorant.jpg"
    :sources="[
        {src: './src/assets/valorant.mp4', res: 900, autoplay: true}, 
        {src: './src/assets/valorant.mp4', res: 638, autoplay: true, poster: './src/assets/valorant.jpg'}
    ]"
    style="max-height: 100%; height: 100vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
>

  <div class="mt-10 text-white">
    <h1>ATHMOS6</h1>
  </div>
 </video-background>
  </div>
</template>

<script lang="ts" src="./home-logo.ts"></script>
<style scoped lang="css" src="./home-logo.css"></style>
