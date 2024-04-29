<template>
    <img :src="theme == 'dark' ? '/assets/img/nextebiz-white.svg' : '/assets/img/nextebiz-black.svg'" class="h-10 sm:h-14" alt="Nextebiz Logo" />

</template>


<script setup>

import { SettingsStore } from "@/store/SettingsStore";
import { computed } from "vue";

const settingsStore = SettingsStore()

function toggleTheme() {
    setTheme(theme.value === 'dark' ? ('light') : ('dark'));
}
const theme = computed(() => {
    return settingsStore.getTheme;
})

function setTheme(theme) {
    settingsStore.setTheme(theme)
}

</script>
