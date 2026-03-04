<template>
  <div>
    <h1>Armor Bases</h1>
    <h2 class="mb-2">Player Bases</h2>
    <p class="mb-4">
      <span class="font-bold">Superior</span> with
      <span class="font-bold">15% Enhanced Defense</span> always preferred
    </p>
    <div class="flex flex-wrap justify-start gap-4">
      <div
        v-for="base in playerBases"
        :key="base.id"
        class="border-color-gray rounded-md border p-4"
      >
        <img
          :src="`/bases/armor/${base.image}`"
          :alt="base.name"
          class="mx-auto"
        />
        <div>
          <div
            class="border-color-gray mb-2 border-y py-2 text-center text-xs font-bold uppercase"
          >
            {{ base.name }}
          </div>
          <div
            class="[&>div]:mb-1 [&>div]:flex [&>div]:items-center [&>div]:justify-start [&>div]:gap-2 [&>div]:text-sm"
          >
            <div>
              <span class="font-semibold">Def:</span>
              <span class="text-xs">
                {{ base.defenseLow }} - {{ base.defenseHigh }}
              </span>
            </div>
            <div>
              <span class="font-semibold">Req. Str:</span>
              <span class="text-xs">{{ base.reqStr }}</span>
            </div>
            <div>
              <span class="font-semibold">Req. Lvl:</span>
              <span class="text-xs">{{ base.reqLvl }}</span>
            </div>
            <div>
              <span class="font-semibold">Sockets:</span>
              <span class="text-xs">{{ base.sockets }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mb-2">Mercenary Bases</h2>
    <p class="mb-4">
      <span class="text-color-blue font-bold">Ethereal </span>
      <span class="font-bold">Superior</span> with
      <span class="font-bold">15% Enhanced Defense</span> always preferred
    </p>
    <div class="flex flex-wrap justify-start gap-4">
      <div
        v-for="base in mercBases"
        :key="base.id"
        class="border-color-gray rounded-md border p-4"
      >
        <img
          :src="`/bases/armor/${base.image}`"
          :alt="base.name"
          class="mx-auto"
        />
        <div>
          <div
            class="border-color-gray mb-2 border-y py-2 text-center text-xs font-bold uppercase"
          >
            {{ base.name }}
          </div>
          <div
            class="[&>div]:mb-1 [&>div]:flex [&>div]:items-center [&>div]:justify-start [&>div]:gap-2 [&>div]:text-sm"
          >
            <div>
              <span class="font-semibold">Def:</span>
              <span class="text-xs">
                {{ base.defenseLow }} - {{ base.defenseHigh }}
              </span>
            </div>
            <div>
              <span class="font-semibold">Req. Str:</span>
              <span class="text-xs">{{ base.reqStr }}</span>
            </div>
            <div>
              <span class="font-semibold">Req. Lvl:</span>
              <span class="text-xs">{{ base.reqLvl }}</span>
            </div>
            <div>
              <span class="font-semibold">Sockets:</span>
              <span class="text-xs">{{ base.sockets }}</span>
            </div>
          </div>
        </div>
      </div>
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
