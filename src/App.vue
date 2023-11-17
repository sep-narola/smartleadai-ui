<template>
  <HeaderSection @sideBarButtonClick="toggleSideBarButton($event)" />
  <div class="main-content" :class="{ 'sidebar-open': isOpen }">
    <SidebarSection :toggleClass="toggleClass" />
    <router-view />
  </div>
</template>

<script>
import HeaderSection from "./layouts/HeaderSection.vue";
import SidebarSection from "./layouts/SidebarSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    SidebarSection,
  },
  data() {
    return { isOpen: false, toggleClass: "", neededData: null };
  },
  methods: {
    toggleSideBarButton(event) {
      this.isOpen = event;
      if (event) {
        this.toggleClass = "open";
      } else {
        this.toggleClass = "";
      }
      this.setOverlay();
    },
    setOverlay() {
      if (this.neededData) {
        if (this.isOpen) {
          this.neededData.classList.add(this.toggleClass);
        } else if (this.neededData.classList.contains("open")) {
          this.neededData.classList.remove("open");
        }
      }
    },
  },
  beforeMount() {
    this.neededData = document.getElementById("sidebarOverlay");
  },
};
</script>
