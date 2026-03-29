<template>
  <div
    :id="`${armor.id}`"
    :key="armor.id"
    class="border-color-gray/50 rounded-xs border p-4"
  >
    <img
      :src="`/bases/armor/${armor.image}`"
      :alt="armor.name"
      class="mx-auto mb-2"
    />
    <div>
      <div
        class="border-color-gray text-color-gray mb-2 border-y py-2 text-center text-xs font-bold uppercase"
      >
        {{ armor.name }}
      </div>
      <div
        class="[&>div]:mb-1 [&>div]:flex [&>div]:items-center [&>div]:justify-start [&>div]:gap-2 [&>div]:text-sm"
      >
        <div>
          <span class="font-semibold">Def:</span>
          <span class="text-color-blue text-xs">
            {{ armor.defenseLow }} - {{ armor.defenseHigh }}
          </span>
        </div>
        <div>
          <span class="font-semibold">Req. Str:</span>
          <span class="text-color-blue text-xs">{{ armor.reqStr }}</span>
        </div>
        <div>
          <span class="font-semibold">Req. Lvl:</span>
          <span class="text-color-blue text-xs">{{ armor.reqLvl }}</span>
        </div>
        <div>
          <span class="font-semibold">Sockets:</span>
          <span class="text-color-blue text-xs">{{ armor.sockets }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { armor } = defineProps<{
  armor: Armor
}>()
</script>
