<template>
  <div class="page-card">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-hover table-campaigns">
            <thead>
              <th>
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  id="flexCheckChecked"
                  :checked="data?.length == selectedRows?.length"
                  @click="toggleSelection($event)"
                />
              </th>
              <th>Campaign Details</th>
              <th colspan="6">Reports</th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(el, index) in data" :key="index">
                <td>
                  <input
                    class="form-check-input custom-checkbox"
                    type="checkbox"
                    id="flexCheckChecked"
                    :value="el"
                    v-model="selectedRows"
                  />
                </td>

                <td>
                  <div class="d-flex align-items-center gap-3">
                    <RoundMeter
                      v-if="el?.campaignStatus == 'running'"
                      :value="el?.campaignProgress"
                      ringColor="#5ECA39"
                      suffixValue="%"
                    />
                    <RoundMeter
                      v-else-if="el?.campaignStatus == 'stopped'"
                      :value="el?.campaignProgress"
                      ringColor="#CB4B4B"
                      suffixValue="%"
                    >
                      <div class="meter-icon">
                        <font-awesome-icon :icon="['fas', 'ban']" />
                      </div>
                    </RoundMeter>

                    <RoundMeter
                      v-else
                      :value="el?.campaignProgress"
                      ringColor="#DD9553"
                      suffixValue="%"
                    >
                      <div class="meter-icon">
                        <font-awesome-icon :icon="['far', 'circle-pause']" />
                      </div>
                    </RoundMeter>
                    <div>
                      <h5 class="sub-heading">
                        {{ el?.campaignName }}
                        <a
                          href="javascript:void(0);"
                          class="d-inline-block ms-2"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.57959 8.45363L14.6846 1.34863M14.6846 1.34863H10.8346M14.6846 1.34863V5.12863"
                              stroke="#8284AD"
                              stroke-width="1.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.7 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V9.335"
                              stroke="#8284AD"
                              stroke-width="1.4"
                              stroke-linecap="round"
                            />
                          </svg>
                        </a>
                      </h5>
                      <div class="status-detail">
                        <span class="status status-active"></span>
                        {{
                          el?.campaignStatus == "running"
                            ? "Sent"
                            : titlecase(el?.campaignStatus)
                        }}
                        on {{ el?.sentOnDate }} |
                        {{ el?.noOfSequences }} Sequences
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <h5
                    class="f-20 mb-2"
                    :class="el?.reportSent ? 'f-purple' : 'f-gray'"
                  >
                    {{ el?.reportSent }}
                  </h5>
                  <div class="f-14">Sent</div>
                </td>

                <td>
                  <div class="d-flex align-items-end mb-2 gap-1">
                    <h5
                      class="f-20 mb-0"
                      :class="el?.noOfClicks ? 'f-yellow' : 'f-gray'"
                    >
                      {{ el?.noOfClicks }}
                    </h5>
                    <span class="f-12"
                      >{{ valueFormatter(el?.clicksRatio) }}%</span
                    >
                  </div>
                  <div class="f-14">
                    Clicked
                    <font-awesome-icon
                      class="f-orange"
                      v-if="!el?.clicksRatio"
                      :icon="['fas', 'triangle-exclamation']"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-end mb-2 gap-1">
                    <h5
                      class="f-20 mb-0"
                      :class="el?.noOfOpening ? 'f-pink' : 'f-gray'"
                    >
                      {{ el?.noOfOpening }}
                    </h5>
                    <span class="f-12"
                      >{{ valueFormatter(el?.openningRatio) }}%</span
                    >
                  </div>
                  <div class="f-14">
                    Opened
                    <font-awesome-icon
                      class="f-orange"
                      v-if="!el?.openningRatio"
                      :icon="['fas', 'triangle-exclamation']"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-end mb-2 gap-1">
                    <h5
                      class="f-20 mb-0"
                      :class="el?.noOfReplies ? 'f-skyblue' : 'f-gray'"
                    >
                      {{ el?.noOfReplies }}
                    </h5>
                    <span class="f-12"
                      >{{ valueFormatter(el?.replyRatio) }}%</span
                    >
                  </div>
                  <div class="f-14">
                    Replied
                    <font-awesome-icon
                      class="f-orange"
                      v-if="!el?.replyRatio"
                      :icon="['fas', 'triangle-exclamation']"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-end mb-2 gap-1">
                    <h5
                      class="f-20 mb-0"
                      :class="el?.noOfReplies ? 'f-green' : 'f-gray'"
                    >
                      {{ el?.noOfPositiveReply }}
                    </h5>
                    <span class="f-12"
                      >{{ valueFormatter(el?.positiveReplyRatio) }}%
                    </span>
                  </div>
                  <div class="f-14">
                    Positive Reply
                    <img
                      v-if="!el?.positiveReplyRatio"
                      src="@/assets/circle-exclamation-fill.svg"
                      alt="i"
                      draggable="false"
                    />
                    <img
                      v-else
                      src="@/assets/circle-exclamation-outline.svg"
                      alt="i"
                      draggable="false"
                    />
                  </div>
                </td>
                <td>
                  <div class="action-buttons">
                    <button
                      type="button"
                      class="btn btn-sm-gray"
                      v-b-tooltip="'Pause'"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="8.5" stroke="#696D8B" />
                        <rect
                          x="6.1875"
                          y="5.625"
                          width="1.60714"
                          height="6.75"
                          rx="0.803571"
                          fill="#696D8B"
                        />
                        <rect
                          x="10.2031"
                          y="5.625"
                          width="1.60714"
                          height="6.75"
                          rx="0.803571"
                          fill="#696D8B"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm-gray"
                      v-b-tooltip="'Edit'"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.3546 2.19467C16.8155 3.40304 17.0054 5.55081 15.7788 6.99185L9.12918 14.8038C9.0838 14.8608 9.02717 14.9094 8.96172 14.946C8.90417 14.9783 8.84187 15.0001 8.77785 15.0111L4.24474 15.9373C4.07367 15.9723 3.89584 15.9281 3.76206 15.8175C3.62828 15.7068 3.55328 15.5418 3.5585 15.3697L3.69518 10.8561C3.6817 10.7118 3.72445 10.5623 3.82648 10.4425L10.4885 2.61595C11.7151 1.17491 13.8938 0.986297 15.3546 2.19467ZM4.83294 11.0109L11.363 3.33935C12.1841 2.37476 13.6424 2.2485 14.6203 3.05735C15.5982 3.8662 15.7253 5.30386 14.9042 6.26846L8.36998 13.9448L4.72152 14.6903L4.83294 11.0109Z"
                          fill="#696D8B"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm-gray"
                      v-b-tooltip="'More options'"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="2.21311"
                          cy="9.41624"
                          r="1.71311"
                          stroke="#696D8B"
                        />
                        <circle
                          cx="8.99436"
                          cy="9.41624"
                          r="1.71311"
                          stroke="#696D8B"
                        />
                        <circle
                          cx="15.7912"
                          cy="9.41624"
                          r="1.71311"
                          stroke="#696D8B"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sourceData from "@/data.json";
import RoundMeter from "./RoundMeter.vue";

const data = ref(sourceData.emailCampaignsData);
const selectedRows = ref([]);

function toggleSelection(event) {
  if (event.target.checked) {
    selectedRows.value = data.value;
  } else {
    selectedRows.value = [];
  }
}

function titlecase(value) {
  return value.replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}

function valueFormatter(val, decimals = 1) {
  if (val || val == 0) {
    return parseFloat(val).toFixed(decimals);
  } else {
    val;
  }
}
</script>

<style>
.action-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cstm-table table thead {
  background-color: #e9ebf9;
}

.tooltip-inner {
  background-color: var(--secondarypurple) !important;
}

.bs-tooltip-top .tooltip-arrow::before,
.bs-tooltip-auto[x-placement^="top"] .arrow::before {
  border-top-color: var(--secondarypurple) !important;
}
</style>
