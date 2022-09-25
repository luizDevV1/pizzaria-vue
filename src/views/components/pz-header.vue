<template>
  <q-header>
    <nav>
      <q-toolbar class="pz-bg-linear-gradient">
        <q-toolbar-title>
          <q-icon left name="img:src/assets/logo.svg" size="md"/>
          <i class="text-weight-bold">Pizzaria slice</i>
        </q-toolbar-title>

        <q-space/>

        <template v-if="!mobile">
          <q-toggle
              :checked-icon="farSun"
              :model-value="dark_mode"
              :unchecked-icon="fasMoon"
              dense
              size="lg"
              @update:model-value="dark_mode = $event"
          >
          </q-toggle>
        </template>

        <template v-else>
          <q-btn fab-mini flat @click="drawer = !drawer">
            <q-icon class="fa-solid fa-ellipsis-v" size="xs"/>
          </q-btn>
        </template>
      </q-toolbar>
    </nav>
  </q-header>

  <q-drawer
      v-model="drawer"
      :breakpoint="500"
      :mini="miniState"
      :width="200"
      mini-to-overlay
      show-if-above
      @mouseout="miniState = true"
      @mouseover="miniState = false"
  >
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="inbox"/>
          </q-item-section>

          <q-item-section>Inbox</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts" setup>
import {farSun, fasMoon} from "@quasar/extras/fontawesome-v6";
import {onMounted, ref, watch} from "vue";
import {useQuasar} from "quasar";

const q = useQuasar();
const dark_mode = ref(false);

const mobile = ref(q.screen.lt.sm);
const drawer = ref(false);
const miniState = ref(true);

watch(dark_mode, (value) => {
  q.dark.set(value);
});

onMounted(() => {
  dark_mode.value = q.dark.isActive;
});
</script>

<style lang="sass" scoped>
@import "../sass/quasar.variables"

.pz-bg-linear-gradient
  background: linear-gradient(90deg, $primary, darken($primary, 12%), $accent)
</style>
