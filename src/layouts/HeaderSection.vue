<template>
  <nav class="navbar">
    <div class="container-fluid h-100 justify-content-start">
      <div
        class="d-block d-lg-none"
        style="cursor: pointer"
        @click="$emit('sideBarButtonClick', sendToggleValue())"
      >
        <span class="toggle-btn">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </span>
      </div>
      <a href="/app/email-campaign" class="router-link-active logo-link">
        <img src="@/assets/siteLogo.svg" alt="Smartlead.ai" draggable="false" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { toggleButton: false };
  },
  methods: {
    sendToggleValue() {
      return (this.toggleButton = !this.toggleButton);
    },
  },
};
</script>

<style>
.navbar {
  box-shadow: 0px 2px 4px 0px #8d8fa91a;
  background: #00056a;
  height: 50px;
}
.navbar .logo-link img {
  height: 100%;
  fill: #fff;
}

.logo-link {
  width: 141px;
  height: 30px;
}
</style>
