<template>
  <div>
    <h2 id="armor" class="header mb-2">Armor Bases</h2>
    <h3 class="mb-2">Player Bases</h3>
    <p class="mb-2">
      <span class="font-bold">Superior</span> with
      <span class="font-bold">15% Enhanced Defense</span> always preferred
    </p>
    <div class="mb-4 flex flex-wrap justify-start gap-4">
      <div
        v-for="base in playerBases"
        :key="base.id"
        :id="`${base.id}`"
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
    <h3 class="mb-2">Mercenary Bases</h3>

    <div class="mb-4 flex justify-start gap-4">
      <div class="max-w-xl">
        <p class="mb-2">
          <span class="text-color-blue font-bold">Ethereal </span>
          <span class="font-bold">Superior</span> with
          <span class="font-bold">15% Enhanced Defense</span> always preferred
        </p>
        <p class="mb-2">
          Mercenaries gain <span class="text-sm italic">1.5</span> strength per
          level. At max level ( <span class="text-sm italic">98</span> ) they
          have <span class="text-sm italic">213</span> strength. In order to
          wear Sacred Armor or Shadow Plate they will need to get strength from
          their helm or weapon. A common helm to use on mercenaries is
          Andariel's Visage, which gives
          <span class="text-sm italic">+25-30</span> strength. Take this into
          account when gearing up your mercenary. Use the table on the right as
          a rough guide for what kind of armor you should aim for.
        </p>
      </div>

      <div class="border-color-blue/30 grid grid-cols-2 rounded-md border">
        <div class="bg-color-gray/80 rounded-tl-md py-1 pl-4 text-sm font-bold">
          Level
        </div>
        <div class="bg-color-gray/80 rounded-tr-md py-1 pr-4 text-sm font-bold">
          Strength
        </div>
        <div class="py-1 pl-4 text-sm">60</div>
        <div class="py-1 pr-4 text-sm">146</div>
        <div class="bg-color-gray/30 py-1 pl-4 text-sm">70</div>
        <div class="bg-color-gray/30 py-1 pr-4 text-sm">164</div>
        <div class="py-1 pl-4 text-sm">80</div>
        <div class="py-1 pr-4 text-sm">181</div>
        <div class="bg-color-gray/30 py-1 pl-4 text-sm">85</div>
        <div class="bg-color-gray/30 py-1 pr-4 text-sm">190</div>
        <div class="py-1 pl-4 text-sm">90</div>
        <div class="py-1 pr-4 text-sm">199</div>
      </div>
    </div>

    <div class="flex flex-wrap justify-start gap-4">
      <div
        v-for="base in mercBases"
        :key="base.id"
        :id="`${base.id}`"
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
