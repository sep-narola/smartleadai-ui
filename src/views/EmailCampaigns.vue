<template>
  <div class="main-content-right">
    <div class="page-heading">
      <div class="d-inline-block">
        <div class="heading-text">All Campaigns (24)</div>
        <div class="heading-border"></div>
      </div>
    </div>
    <DataTable />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
export default {
  name: "EmailCampaigns",
  components: { DataTable },
};
</script>
