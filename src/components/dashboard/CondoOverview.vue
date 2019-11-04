<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box" :class="backgroundColor">
        <p class="subtitle">
          <strong>{{ condo.name }}</strong> - Score: {{ condo.score }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { condoBackgroundColorMixin } from "@/mixins/condoBackgroundColorMixin";

export default {
  name: "CondoOverview",
  mixins: [condoBackgroundColorMixin],
  props: {
    condo: {
      type: Object,
      required: true
    }
  }
};
</script>
