<template>
  <li class="my-1 py-2">
    <button
      class="flex w-full cursor-pointer items-center justify-start gap-2"
      @click="expanded = !expanded"
    >
      <span class="inline-block min-w-3">{{ expanded ? '-' : '+' }}</span>
      <span>Runewords</span>
    </button>
    <ul v-show="expanded" class="indent-8">
      <li>
        <a href="#runeword-armor" class="my-1 block py-2">Armor</a>
      </li>
      <li>
        <a href="#runeword-helms" class="my-1 block py-2">Helms</a>
      </li>
      <li>
        <a href="#runeword-helms" class="my-1 block py-2">Shields</a>
      </li>
      <li>
        <a href="#runeword-weapons" class="my-1 block py-2">Weapons</a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const expanded = ref(false)
</script>
