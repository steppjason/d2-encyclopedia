<template>
  <div>
    <img :src="src" :alt="type" />
  </div>
</template>
<script setup lang="ts">
const { type } = defineProps<{
  type: Rune
}>()

const src = `/runes/${type.toLowerCase()}.webp`

type Rune =
  | 'El'
  | 'Eld'
  | 'Tir'
  | 'Nef'
  | 'Eth'
  | 'Ith'
  | 'Tal'
  | 'Ral'
  | 'Ort'
  | 'Thul'
  | 'Amn'
  | 'Sol'
  | 'Shael'
  | 'Dol'
  | 'Hel'
  | 'Io'
  | 'Lum'
  | 'Ko'
  | 'Fal'
  | 'Lem'
  | 'Pul'
  | 'Um'
  | 'Mal'
  | 'Ist'
  | 'Gul'
  | 'Vex'
  | 'Ohm'
  | 'Lo'
  | 'Sur'
  | 'Ber'
  | 'Jah'
  | 'Cham'
  | 'Zod'
</script>
