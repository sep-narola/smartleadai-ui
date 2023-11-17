<template>
  <div class="sidenav" :class="toggleClass">
    <ul>
      <li
        :class="{ active: activeMenuId == 1 }"
        @click="
          navigate('/all-leads');
          activeMenuId = 1;
        "
      >
        <div class="sidebar-icon">
          <font-awesome-icon :icon="['fas', 'filter']" />
        </div>
        All Leads
      </li>
      <li
        :class="{ active: activeMenuId == 2 }"
        @click="
          navigate('/master-inbox');
          activeMenuId = 2;
        "
      >
        <div class="sidebar-icon">
          <font-awesome-icon :icon="['fas', 'inbox']" />
        </div>
        <a>Master Inbox</a>
      </li>
      <li
        :class="{ active: activeMenuId == 3 }"
        @click="
          navigate('/email-campaigns');
          activeMenuId = 3;
        "
      >
        <div class="sidebar-icon">
          <font-awesome-icon :icon="['fas', 'bullhorn']" />
        </div>
        <a>Email Campaigns</a>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "SidebarSection",
  data() {
    return { activeMenuId: 3 };
  },
  props: {
    toggleClass: { type: String, default: "" },
  },
  methods: {
    navigate(path) {
      router.push(path);
      if (
        document.getElementById("sidebarOverlay").classList.contains("open")
      ) {
        document.getElementById("sidebarOverlay").classList.remove("open");
      }
    },
  },
};
</script>

<style>
@import url("../../public/main.css");
li {
  cursor: pointer !important;
}
</style>
