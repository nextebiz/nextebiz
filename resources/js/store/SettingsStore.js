import { defineStore } from "pinia";

export const SettingsStore = defineStore("useSettingStore", {
    state: () => ({
        theme: localStorage.getItem("theme") || "light",
        role: "",
        total_messages: 0,
        total_users: 0,
    }),
    getters: {
        getTheme: function () {
            return this.theme;
        },
        getRole: function () {
            return this.role;
        },
        getTotalMessages: function () {
            return this.total_messages;
        },
        getTotalUsers: function () {
            return this.total_users;
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
        setTotalMessages: function (total) {
            this.total_messages = total;
        },
        setTotalUsers: function (total) {
            this.total_users = total;
        },
    },
});
