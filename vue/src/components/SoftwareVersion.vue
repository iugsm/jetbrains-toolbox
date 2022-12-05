<script lang="ts" setup>
  import { useInstall } from "@/hooks/useInstall";
  import { useInstallStatus } from "@/hooks/useInstallStatus";
  import type { Software } from "@/utils";

  const props = defineProps<{ software: Software }>();

  // 安装状态
  const status = useInstallStatus(props.software.id);

  // 安装逻辑
  const { disabled, installFn } = useInstall();
  const handleInstall = () => {
    installFn(props.software);
  };
</script>

<template>
  <section class="wrap">
    <div :class="['name', status === 'installed' ? 'active' : '']">
      {{ software.versionName }}
      <p class="code">{{ software.versionCode }}</p>
    </div>

    <div class="date">{{ software.date }}</div>

    <div class="status">
      <div v-if="status === 'installed'">已安装</div>
      <div v-else-if="status === 'downloading'">正在下载</div>
      <div v-else-if="status === 'installing'">安装中...</div>
      <v-btn
        v-else
        @click="handleInstall"
        width="64"
        height="22"
        variant="flat"
        class="install-btn"
        :disabled="disabled"
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
