<script lang="ts" setup>
  import { emitterKey } from "@/emitter";
  import { useInstallList } from "@/stores/software";
  import type { Software } from "@/utils";
  import { computed, inject, ref } from "vue";

  const props = defineProps<{ software: Software }>();

  // 安装状态
  const installStore = useInstallList();

  const installStatus = computed(() => {
    const currentSoftware = installStore.installList.filter(
      (element) => element.id === props.software.id
    );

    if (currentSoftware.length > 0) {
      return currentSoftware[0].status;
    }

    return undefined;
  });

  // 安装逻辑
  const disabled = ref(false);
  const emitter = inject(emitterKey);
  const handleInstall = () => {
    if (disabled.value) return;
    disabled.value = true;

    emitter?.emit("install", props.software as any);
  };
</script>

<template>
  <section class="wrap">
    <div :class="['name', installStatus === 'installed' ? 'active' : '']">
      {{ software.versionName }}
      <p class="code">{{ software.versionCode }}</p>
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
