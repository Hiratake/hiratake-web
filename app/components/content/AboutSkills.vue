<script lang="ts" setup>
const skills = [
  ['HTML', 'i-simple-icons-html5', '#e34f26'],
  ['CSS', 'i-simple-icons-css', '#663399'],
  ['JavaScript', 'i-simple-icons-javascript', '#f7df1e'],
  ['TypeScript', 'i-simple-icons-typescript', '#3178c6'],
  ['Vue.js', 'i-simple-icons-vuedotjs', '#4fc08d'],
  ['Nuxt', 'i-simple-icons-nuxt', '#00dc82'],
  ['React', 'i-simple-icons-react', '#61dafb'],
  ['Next.js', 'i-simple-icons-nextdotjs', '#000000'],
  ['Tailwind CSS', 'i-simple-icons-tailwindcss', '#06b6d4'],
  ['Electron', 'i-simple-icons-electron', '#47848f'],
  ['Tauri', 'i-simple-icons-tauri', '#24c8d8'],
  ['Sass', 'i-simple-icons-sass', '#cc6699'],
  ['PHP', 'i-simple-icons-php', '#777bb4'],
  ['Laravel', 'i-simple-icons-laravel', '#ff2d20'],
  ['Rust', 'i-simple-icons-rust', '#000000'],
  ['C言語', 'i-simple-icons-c', '#a8b9cc'],
] as const
</script>

<template>
  <BadgeList>
    <BadgeListItem
      v-for="[label, icon, backgroundColor] in skills"
      :key="label"
      :label="label"
      :icon="icon"
      :background-color="backgroundColor"
    />
  </BadgeList>
</template>
