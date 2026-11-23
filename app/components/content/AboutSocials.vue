<script lang="ts" setup>
const app = useAppConfig()
const socials = app.website.socials
const accounts = [
  ['bluesky', 'i-simple-icons-bluesky', '#0285ff'],
  ['github', 'i-simple-icons-github', '#181717'],
  ['discord', 'i-simple-icons-discord', '#5865f2'],
  ['x', 'i-simple-icons-x', '#000000'],
  ['misskey', 'i-simple-icons-misskey', '#a1ca03'],
  ['steam', 'i-simple-icons-steam', '#000000'],
] as const
</script>

<template>
  <BadgeList>
    <BadgeListItem
      v-for="[account, icon, backgroundColor] in accounts"
      :key="account"
      :label="socials[account].name"
      :to="socials[account].url"
      :icon="icon"
      :background-color="backgroundColor"
    />
  </BadgeList>
</template>
