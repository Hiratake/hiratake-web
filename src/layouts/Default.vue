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
    <slot />
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
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
