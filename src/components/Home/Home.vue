<template>
  <div class="home">
    <navbar />
    <div class="content">
      <div class="card">
        <h2 class="quotes">Dan segala sesuatu, apa pun yang kamu minta dalam doa dengan percaya, pastilah kamu akan menerimanya. <br>Matius 21:22</h2>
        <hr class="horizontal-line">
        <p>Ayo Daftarkan Doa Kamu!</p>
      </div>
    </div>
  </div>  
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.home {
  display: flex;
  background-image: url('@/assets/background-home.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  width: 100vw; 
  height: 100vh; 
  overflow: hidden; 
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 240px); 
  margin-left: 240px; 
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 300px;
  text-align: center;
}

.quotes {
  margin-top: 40px;
}

.horizontal-line {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin: 20px 0;
}
</style>
