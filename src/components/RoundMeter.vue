<template>
  <div
    class="outerCircle"
    :style="{
      'background-image': `conic-gradient(${ringColor || '#94d3a2'} 0deg, ${
        ringColor || '#94d3a2'
      } ${getValues()}deg, #d3d3d3 ${getValues()}deg)`,
    }"
  >
    <div class="insideCircle">
      <slot>
        <div class="f-14">
          {{ value + suffixValue }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundMeter",
  props: {
    value: Number,
    suffixValue: { type: String, default: "" },
    showIcon: Boolean,
    ringColor: String,
  },
  methods: {
    getValues() {
      return ((this.value > 100 ? 100 : this.value) / 100) * 360;
    },
  },
};
</script>

<style>
.outerCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 50px;
  width: 50px;
  border-radius: 100%;
}

.insideCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: white;
}

.meter-icon {
  color: #282b42;
  opacity: 0.6;
  font-size: 19px;
  line-height: normal;
}
</style>
