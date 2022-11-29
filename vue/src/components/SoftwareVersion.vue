<script lang="ts" setup>
  import { emitterKey } from "@/emitter";
  import { useInstallMap, type InstallStatus } from "@/stores/software";
  import type { SoftwareVersionProps } from "@/views/Detail.vue";
  import { computed, inject } from "vue";

  const props = defineProps<{ software: SoftwareVersionProps }>();

  // 安装状态
  const installMapStore = useInstallMap();

  const installStatus = computed(() => {
    for (const [key, value] of installMapStore.installMap) {
      if (
        key.name === props.software.softwareName &&
        key.version === props.software.code
      ) {
        return value.status;
      }
    }
    return undefined;
  });

  // 安装逻辑
  const emitter = inject(emitterKey);
  const handleInstall = () => {
    emitter?.emit("install", {
      name: props.software.softwareName,
      version: props.software.code,
    } as any);
  };
</script>

<template>
  <section class="wrap">
    <div :class="['name', installStatus === 'installed' ? 'active' : '']">
      {{ software.name }}
      <p class="code">{{ software.code }}</p>
    </div>

    <div class="date">{{ software.date }}</div>

    <div class="status">
      <div v-if="installStatus === 'installed'">已安装</div>
      <div v-else-if="installStatus === 'downloading'">正在下载</div>
      <div v-else-if="installStatus === 'installing'">安装中...</div>
      <v-btn
        v-else
        @click="handleInstall"
        width="64"
        height="22"
        variant="flat"
        class="install-btn"
      >
        安装
      </v-btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .wrap {
    --btn-border-color: #afcbe0;
    --btn-hover-color: #e9e9ea;
    --btn-active-color: #cbcbcc;

    font-size: 13px;
    padding: 12px var(--padding-inline);
    cursor: pointer;
    display: grid;
    grid-template-columns: 2fr 1fr min-content;

    &:hover {
      background: var(--blue-hover-bg);
    }
  }

  .name {
    .code {
      font-size: 12px;
      color: var(--text-gray);
    }
  }

  .date {
    font-size: 12px;
    color: var(--text-gray);
  }

  .status {
    width: 70px;
    display: flex;
    justify-content: end;
  }

  .install-btn {
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #afcbe0;
  }
</style>
