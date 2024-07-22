<template>
  <div class="navbar">
    <div class="logo-container">
      <img src="@/assets/logoberdoa.png" alt="Logo" class="logo" />
      <p class="text-container">
        <span class="text-line">JARINGAN</span>
        <span class="text-line">DOA</span>
      </p>
    </div>
    <nav>
      <ul>
        <li><font-awesome-icon icon="house" class="icon" /><a href="#">Home</a></li>
        <li><font-awesome-icon icon="border-all" class="icon" /><a href="#">Dashboard Doa</a></li>
        <li><font-awesome-icon icon="clock-rotate-left" class="icon" /><a href="#">Riwayat Doa</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  width: 280px;
  background-color: #ffffff;
  height: 100vh;
  position: fixed;
  top: 0; 
  left: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
}

.logo-container {
  display: flex;
  align-items: center; 
  margin-bottom: 20px; 
  margin-top: 30px;
}

.logo {
  width: 44px;
  height: 66px;
  margin: 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin: 4px;
  color: rgb(0, 0, 0);
  font-family: 'Montserrat', sans-serif; 
}

.text-line {
  margin: 0; 
  line-height: 1;
  font-weight: 1000;
  font-size: 26px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 80px;
}

nav ul li {
  display: flex; 
  align-items: center; 
  margin: 20px 0;
}

.icon {
  margin-right: 10px; 
  width: 22px;
  height: 22px;
  color: #808080;
}

nav ul li a {
  color: #808080;
  text-decoration: none;
  font-size: 22px;
}


nav ul li:hover a, nav ul li:hover .icon {
  color: #575757; 
}


nav ul li a:focus, nav ul li a:hover, nav ul li a:active {
  outline: none;
  box-shadow: none;
}

nav ul li a:focus,
nav ul li a:active {
  outline: none;
  box-shadow: none;
}

</style>
