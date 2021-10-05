<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link class="btn btn-link" to="/">Home</router-link>
          <router-link class="btn btn-link" to="/kanban">Kanban</router-link>
        </section>

        <section class="navbar-center">
            <img class="img-responsive img-logo" src="@/assets/nezuko.png" alt="nezuko-chan">
        </section>

        <section class="navbar-section">
            <a href="https://www.linkedin.com/in/gabriel-b-gamboa/" class="btn btn-link">LinkedIn</a>
            <a href="https://github.com/gabrielgamboa" class="btn btn-link">Github</a>
        </section>
      </header>
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

.img-logo {
  max-width: 100px;
}
</style>

