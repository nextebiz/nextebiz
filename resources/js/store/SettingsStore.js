import { defineStore } from "pinia";

export const SettingsStore = defineStore("useSettingStore", {
    state: () => ({
        theme: localStorage.getItem("theme") || "light",
        role: "",
    }),
    getters: {
        getTheme: function () {
            return this.theme;
        },
        getRole: function () {
            return this.role;
        },
    },
    actions: {
        setTheme: function (theme) {
            this.theme = theme;
            localStorage.setItem("theme", theme);
        },
        setRole: function (role) {
            this.role = role;
            localStorage.setItem("role", role);
        },
    },
});
