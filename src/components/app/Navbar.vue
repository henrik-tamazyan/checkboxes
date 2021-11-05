<template>
    <nav class="navbar navbar-light bg-white d-flex align-items-center shadow p-3 mb-3 bg-white rounded">
    <div class="container-fluid">
        <router-link 
            to="/" 
            class="navbar-brand ms-3" 
            href="#"
        ><img 
            src="https://svgsilh.com/svg/297021.svg" 
            alt="" 
            width="50" height="50" 
            class="d-inline-block align-text-top"
        >
        </router-link>
        <div class="d-flex me-auto">
            <router-link to="/" class="my-3 text-decoration-none ms-3" exact>Home</router-link>
            <router-link to="/about" class="my-3 text-decoration-none ms-3">About</router-link>            
        </div>
    </div>
    </nav>    
</template>