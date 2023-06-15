<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-success navbar-dark w-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Usuarios</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            to="/"
            class="nav-link active"
            aria-current="page"
            href="#"
            >Mostrar</router-link
          >
          <router-link to="/create" class="nav-link" href="#"
            >Crear</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <routerView />
  </div>
</template>
