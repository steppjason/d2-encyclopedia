<template>
  <div>
    <h2 id="base-armor" class="mb-2">Armor</h2>
    <h4 class="mb-2">Player Armor</h4>
    <p class="mb-2">
      <span class="font-bold">Superior</span> with
      <span class="font-bold">15% Enhanced Defense</span> always preferred
    </p>

    <div class="mb-4 flex flex-wrap justify-start gap-4">
      <template v-for="base in playerBases" :key="base.id">
        <BasesArmorCard :armor="base" />
      </template>
    </div>

    <h4 class="mb-2">Mercenary Armor</h4>

    <div class="mb-4 flex justify-start gap-4">
      <div class="max-w-xl">
        <p class="mb-2">
          <span class="text-color-blue font-bold">Ethereal </span>
          <span class="font-bold">Superior</span> with
          <span class="font-bold">15% Enhanced Defense</span> always preferred
        </p>
        <p class="mb-2">
          Mercenaries gain <span class="text-sm">1.5</span> strength per level.
          At max level (<span class="text-sm">98</span>) they have
          <span class="text-color-blue text-sm">213</span> strength. In order to
          wear <span class="text-color-gray">Sacred Armor</span> or
          <span class="text-color-gray">Shadow Plate</span>
          they will need to get strength from their helm or weapon. A common
          helm to use on mercenaries is
          <span class="text-color-gold">Andariel's Visage</span>, which gives
          <span class="text-color-blue text-sm">+25-30</span> strength. Take
          this into account when gearing up your mercenary.
        </p>
        <p>
          Use the table on the right as a rough guide for what kind of armor you
          should aim for.
        </p>
      </div>

      <div class="border-color-blue/30 grid grid-cols-2 rounded-md border">
        <div class="bg-color-gray/80 rounded-tl-md pt-1 pl-4 text-sm font-bold">
          Level
        </div>
        <div class="bg-color-gray/80 rounded-tr-md pt-1 pr-4 text-sm font-bold">
          Strength
        </div>
        <div class="py-1 pl-4 text-xs">60</div>
        <div class="py-1 pr-4 text-xs">146</div>
        <div class="bg-color-gray/30 py-1 pl-4 text-xs">70</div>
        <div class="bg-color-gray/30 py-1 pr-4 text-xs">164</div>
        <div class="py-1 pl-4 text-xs">80</div>
        <div class="py-1 pr-4 text-xs">181</div>
        <div class="bg-color-gray/30 py-1 pl-4 text-xs">85</div>
        <div class="bg-color-gray/30 py-1 pr-4 text-xs">190</div>
        <div class="py-1 pl-4 text-xs">90</div>
        <div class="py-1 pr-4 text-xs">199</div>
      </div>
    </div>

    <div class="flex flex-wrap justify-start gap-4">
      <template v-for="base in mercBases" :key="base.id">
        <BasesArmorCard :armor="base" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const playerBases = computed(() => {
  return ARMOR_BASES.filter((base) => base.player)
})

const mercBases = computed(() => {
  return ARMOR_BASES.filter((base) => base.merc)
})
</script>
