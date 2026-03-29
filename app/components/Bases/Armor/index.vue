<template>
  <div>
    <div class="flex justify-between gap-4">
      <div>
        <div class="max-w-xl">
          <h2 id="base-armor" class="mb-2">Player Armor</h2>

          <p class="mb-2">
            Either <span class="font-bold">0/3/4</span> sockets.
            <span class="font-bold">Superior</span> with
            <span class="font-bold">5-15% Enhanced Defense</span> always
            preferred.
          </p>
        </div>

        <div class="mb-4 flex flex-wrap justify-start gap-4">
          <template v-for="base in playerBases" :key="base.id">
            <BasesArmorCard :armor="base" />
          </template>
        </div>
      </div>

      <div class="max-w-xl">
        <h4>Recommended Armor</h4>
        <p>
          Armor comes in three weight types:
          <span class="font-bold italic">light</span>,
          <span class="font-bold italic">medium</span>, and
          <span class="font-bold italic">heavy</span>. Weight types impact your
          character's movement speed and stamina drain.
        </p>

        <ul class="my-4 list-disc pl-6 [&>li]:mb-2">
          <li>Light has no impact on move speed or stamina drain.</li>
          <li>
            Medium reduces move speed by 5% and increases stamina drain by 50%.
          </li>
          <li>
            Heavy reduces move speed by 10% and increases stamina drain by 100%.
          </li>
        </ul>

        <p class="font-bold">Light Armor Types</p>
        <div
          class="border-color-gray/50 mt-2 mb-4 grid grid-cols-3 rounded-xs border"
        >
          <div
            class="bg-color-gray/80 flex items-center rounded-tl-xs pt-1 pl-4 text-sm font-bold"
          >
            Normal
          </div>
          <div
            class="bg-color-gray/80 flex items-center rounded-tr-xs pt-1 pr-4 text-sm font-bold"
          >
            Exceptional
          </div>
          <div
            class="bg-color-gray/80 flex items-center rounded-tr-xs pt-1 pr-4 text-sm font-bold"
          >
            Elite
          </div>
          <div class="flex items-center py-1 pl-4 text-sm">Quilted Armor</div>
          <div class="flex items-center py-1 text-sm">Ghost Armor</div>
          <div class="flex items-center py-1 pr-4 text-sm">Dusk Shroud</div>

          <div class="bg-color-gray/30 flex items-center py-1 pl-4 text-sm">
            Leather Armor
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 text-sm">
            Serpentskin Armor
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 pr-4 text-sm">
            Wyrmhide
          </div>

          <div class="flex items-center py-1 pl-4 text-sm">
            Hard Leather Armor
          </div>
          <div class="flex items-center py-1 text-sm">Demonhide Armor</div>
          <div class="flex items-center py-1 pr-4 text-sm">Scarab Husk</div>

          <div class="bg-color-gray/30 flex items-center py-1 pl-4 text-sm">
            Studded Leather
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 text-sm">
            Trellised Armor
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 pr-4 text-sm">
            Wire Fleece
          </div>

          <div class="flex items-center py-1 pl-4 text-sm">Breast Plate</div>
          <div class="flex items-center py-1 text-sm">Cuirass</div>
          <div class="flex items-center py-1 pr-4 text-sm">Great Hauberk</div>

          <div class="bg-color-gray/30 flex items-center py-1 pl-4 text-sm">
            Light Plate
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 text-sm">
            Mage Plate
          </div>
          <div class="bg-color-gray/30 flex items-center py-1 pr-4 text-sm">
            Archon Plate
          </div>
        </div>

        <h4>Further Reading</h4>

        <p class="mb-2">
          Players tend to make one of these three Runewords with these bases:
          <span class="text-color-brown">Enigma</span>,
          <span class="text-color-brown">Chains of Honor</span>, or
          <span class="text-color-brown">Fortitude</span>.
        </p>
        <p class="mb-2">
          <span class="font-bold">Archon Plate</span> is the most popular
          because of its high defense.
        </p>
        <p class="mb-2">
          <span class="font-bold">Mage Plate</span> is a popular choice to make
          the Runeword <span class="text-color-brown">Enigma</span> because it
          has the highest defense of the light armor types that has a 3 socket
          max, which can be easily obtained with the Larzuk quest reward.
        </p>
        <p class="mb-2">
          A <span class="font-bold">Superior Archon Plate</span> with
          <span class="font-bold">15% Enhanced Defense</span> and
          <span class="font-bold">3 sockets</span> would be the most valueable
          base.
        </p>
      </div>
    </div>

    <h2 class="mb-2">Mercenary Armor</h2>
    <div class="mb-4 flex justify-start gap-4">
      <div class="max-w-xl">
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
        <p class="mb-2">
          Use the table on the right as a rough guide for what kind of armor you
          should aim for.
        </p>
        <p>
          <span class="text-color-blue font-bold">Ethereal </span>
          <span class="font-bold">Superior</span> with
          <span class="font-bold">5-15% Enhanced Defense</span> always preferred
        </p>
        <p>
          Strength requirements are reduced by 10 when an armor is
          <span class="text-color-blue font-bold">Ethereal</span>.
        </p>
      </div>

      <div class="border-color-gray/50 grid grid-cols-2 rounded-xs border">
        <div
          class="bg-color-gray/80 flex items-center rounded-tl-xs pt-1 pl-4 text-sm font-bold"
        >
          Level
        </div>
        <div
          class="bg-color-gray/80 flex items-center rounded-tr-xs pt-1 pr-4 text-sm font-bold"
        >
          Strength
        </div>
        <div class="flex items-center py-1 pl-4 text-xs">60</div>
        <div class="flex items-center py-1 pr-4 text-xs">146</div>
        <div class="bg-color-gray/30 flex items-center py-1 pl-4 text-xs">
          70
        </div>
        <div class="bg-color-gray/30 flex items-center py-1 pr-4 text-xs">
          164
        </div>
        <div class="flex items-center py-1 pl-4 text-xs">80</div>
        <div class="flex items-center py-1 pr-4 text-xs">181</div>
        <div class="bg-color-gray/30 flex items-center py-1 pl-4 text-xs">
          85
        </div>
        <div class="bg-color-gray/30 flex items-center py-1 pr-4 text-xs">
          190
        </div>
        <div class="flex items-center py-1 pl-4 text-xs">90</div>
        <div class="flex items-center py-1 pr-4 text-xs">199</div>
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
