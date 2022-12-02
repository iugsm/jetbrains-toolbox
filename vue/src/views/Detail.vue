<script lang="ts" setup>
  import DetailHeader from "@/components/DetailHeader.vue";
  import SoftwareVersion from "@/components/SoftwareVersion.vue";
  import { softwareData } from "@/utils";
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const name = route.params.name as string;
  const { tab: routeTab } = route.query;

  const tab = ref(routeTab || "about");

  const versionList = computed(() => {
    return softwareData.filter((element) => element.name === name);
  });
</script>

<template>
  <DetailHeader :name="name" />

  <div>
    <v-tabs class="tabs" density="compact" v-model="tab">
      <v-tab value="about" class="tab-btn">概述</v-tab>
      <v-tab value="version" class="tab-btn">版本</v-tab>
    </v-tabs>

    <section v-show="tab === 'about'" class="content about-section">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur
      libero ullam dolores velit nesciunt aliquam nam dolorem id ab? Earum eos
      velit repudiandae consectetur quo nesciunt id! Labore, quibusdam.
    </section>

    <section v-show="tab === 'version'" class="content version-section">
      <template v-if="versionList">
        <SoftwareVersion v-for="item in versionList" :software="item" />
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .tabs {
    padding-inline: var(--padding-inline);
  }
  .tab-btn {
    min-width: 0px !important;
    max-width: 30px !important;

    &:first-child {
      margin-inline-end: 20px;
    }

    &:not(.v-slide-group-item--active) {
      color: var(--text-gray);
    }
  }

  .content {
    margin-block-start: 28px;
  }

  .about-section {
    padding-inline: var(--padding-inline);
  }
</style>
