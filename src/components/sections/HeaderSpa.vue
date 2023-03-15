<template>
  <div class="container-fluid bg-body-tertiary">
    <div class="container">
      <header class="d-block pt-4 pb-2 mb-4 border-bottom">
        <nav class="navbar navbar-expand-lg mb-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><span style="color: #b5d5c5" class="fw-bold">Hope</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/UsersSpa">Users</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/PostsSpa">Posts</router-link>
                </li>
                <li class="nav-item dropdown">
                  <button class="btn btn-light dropdown-toggle ms-md-2 fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </button>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <router-link class="nav-link" to="/PraCtice">PraCtice</router-link>
                    </li>
                    <li>
                      <router-link class="nav-link" to="/page-2">page-2</router-link>
                    </li>
                    <li>
                      <router-link class="nav-link" to="/PaGe3">page_3</router-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link ms-md-5" to="/CalCulater"><span style="color: #b5d5c5" class="fw-bold">Calculater</span></router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSpa",
};
</script>

<style>
.router-link-active {
  color: blue !important;
  border-bottom: 2px solid !important;
}
</style>