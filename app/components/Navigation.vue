<template>
  <nav
    class="bg-color-gray/50 border-color-blue/30 min-w-60 rounded-md border p-4"
  >
    <h4 class="mb-2">Navigation</h4>
    <ul>
      <li class="my-1 py-2">
        <button
          class="flex w-full cursor-pointer items-center justify-start gap-2"
          @click="basesExpaned = !basesExpaned"
        >
          <span class="inline-block min-w-3">{{
            basesExpaned ? '-' : '+'
          }}</span>
          <span>Bases</span>
        </button>
        <ul v-show="basesExpaned" class="indent-8">
          <li>
            <a href="#armor" class="my-1 block py-2">Armor</a>
          </li>
          <li>
            <a href="#helms" class="my-1 block py-2">Helms</a>
          </li>
          <li>
            <a href="#weapons" class="my-1 block py-2">Weapons</a>
          </li>
        </ul>
      </li>
      <li class="my-1 py-2">
        <button
          class="flex w-full cursor-pointer items-center justify-start gap-2"
          @click="mapsExpaned = !mapsExpaned"
        >
          <span class="inline-block min-w-3">{{
            mapsExpaned ? '-' : '+'
          }}</span>
          <span>Maps</span>
        </button>
        <ul v-show="mapsExpaned" class="indent-8">
          <li>
            <a href="#act-i" class="my-1 block py-2">Act I</a>
          </li>
          <li>
            <a href="#act-ii" class="my-1 block py-2">Act II</a>
          </li>
          <li>
            <a href="#act-iii" class="my-1 block py-2">Act III</a>
          </li>
          <li>
            <a href="#act-iv" class="my-1 block py-2">Act IV</a>
          </li>
          <li>
            <a href="#act-v" class="my-1 block py-2">Act V</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const basesExpaned = ref(false)
const mapsExpaned = ref(false)
</script>
