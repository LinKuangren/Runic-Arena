<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/">
                <img src="../assets/logo.png" alt="Logo-site" href="../views/HomeView.vue">
            </router-link>
            <nav>
                <router-link to="/cards" class="menu">Cartes</router-link>
		        <router-link to="/competences" class="menu">Compétences</router-link>
                <router-link to="/classes" class="menu">Classes</router-link>
                <router-link to="/types" class="menu">Types</router-link>
                <router-link to="/capacites" class="menu">Capacités</router-link>
            </nav>
        </div>
        <div class="header-right">
            <router-link to="/new-cards">
                <button class="gdc">Générateur de carte</button>
            </router-link>
        </div>
    </div>
</template>