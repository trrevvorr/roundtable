<template>
  <div id="app">
    <div class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/new">New Game</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  width: 100vw;
  margin: 2rem;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  margin: auto;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
