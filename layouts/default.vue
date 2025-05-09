<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
// Layout-specific logic can go here
</script>