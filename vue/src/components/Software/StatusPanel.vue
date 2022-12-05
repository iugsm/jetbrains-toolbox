<script lang="ts" setup>
  import { useInstallStatus } from "@/hooks/useInstallStatus";
  import { usePercent } from "@/hooks/usePercent";
  import type { Software } from "@/utils";

  const props = defineProps<{ software: Software }>();

  const status = useInstallStatus(props.software.id);
  const percent = usePercent(props.software.id);
</script>

<template>
  <div class="status">
    <p v-if="status === 'installed'" class="description">
      {{ software.versionName }}
    </p>
    <template v-else-if="status !== undefined">
      <p class="status-text">
        {{ status === "downloading" ? "正在下载..." : "安装中..." }}
      </p>

      <v-progress-linear
        :model-value="percent"
        bg-color="#bfdcfd"
        color="#0074f9"
        bg-opacity="1"
        rounded
      ></v-progress-linear>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .status {
    padding-block-start: 2px;

    .status-text {
      font-size: 12px;
      color: var(--text-gray);
    }

    .description {
      all: unset;
      font-size: 12px;
      color: var(--text-gray);
    }
  }
</style>
