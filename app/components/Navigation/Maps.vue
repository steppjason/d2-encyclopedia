<template>
  <li class="my-1 py-2">
    <button
      class="flex w-full cursor-pointer items-center justify-start gap-2"
      @click="expanded = !expanded"
    >
      <span class="inline-block min-w-3">{{ expanded ? '-' : '+' }}</span>
      <span>Maps</span>
    </button>
    <ul v-show="expanded" class="indent-8">
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
</template>

<script setup lang="ts">
const expanded = ref(false)
</script>
