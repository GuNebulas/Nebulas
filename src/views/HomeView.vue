<template>
  <main>
    <p>Hello, {{ userName }}</p>
  </main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useUserStore } from "../stores/User.store";
import { useI18n } from "vue-i18n";

const store = useUserStore();
const userName = computed(() => store.userInfo.name);

const { locale } = useI18n();

function login() {
  store.login();
}

function changeLang() {
  locale.value = "en";
}
</script>
