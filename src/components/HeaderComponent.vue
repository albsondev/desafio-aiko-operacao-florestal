<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/equipment/:id">Detalhes do Equipamento</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
header {
  background-color: #4caf50;
  padding: 10px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
