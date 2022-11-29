<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="brand">
      <img
        class="logo"
        src="https://resources.jetbrains.com/storage/products/company/brand/logos/Toolbox_icon.svg"
        alt="logo"
      />

      <div class="name">
        <span>JetBrains</span>
        Toolbox
      </div>
    </div>

    <v-btn icon size="24" variant="text">
      <v-icon icon="mdi-cog" color="#fff" size="18"></v-icon>
    </v-btn>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--background);
    color: #fff;
    padding: var(--padding-block) var(--padding-inline);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
      display: flex;
      align-items: center;
      justify-content: center;

      .logo {
        width: 32px;
        height: 32px;
      }

      .name {
        margin-left: 8px;
        font-size: 19px;
        font-weight: bold;
        line-height: 1;

        span {
          font-size: 12px;
          display: block;
          font-weight: normal;
          filter: brightness(0.9);
        }
      }
    }
  }
</style>
