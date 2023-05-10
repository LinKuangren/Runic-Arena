<template>
    <div class="header-mobile">
        <div class="header-end">
            <div class="header-left">
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
    </div>
</template>