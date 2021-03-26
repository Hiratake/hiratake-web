<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          to="/"
        >
          Home
        </g-link>
        <g-link
          class="nav__link"
          to="/about/"
        >
          About
        </g-link>
      </nav>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.layout {
  display: grid;
  grid-template-rows: var(--size-outline) 1fr var(--size-outline);
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  padding: 0 var(--size-outline);
  color: var(--color-text);
  background-color: var(--color-background);
  transition-duration: var(--transition-duration);
  transition-property: color background-color;
}

.main {
  background-color: var(--color-background-secondary);
  border-radius: 4px;
}
</style>
