<template>
  <div>
    <table>
      <tr>
        <a :class="backgroundColor" @click="sendToCondoList">
          <td>{{ condo.name }}</td>
          <td>{{ condo.score }}</td>
        </a>
      </tr>
    </table>
  </div>
</template>

<script>
import { SCORE } from "@/constants/score";
import { backgroundColorMixin } from "@/mixins/backgroundColorMixin";

export default {
  name: "Condo",
  methods: {
    sendToCondoList() {
      this.$emit("condo-to-condolist", this.condo);
    }
  },
  mixins: [backgroundColorMixin],
  props: {
    condo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isGood: this.condo.score >= SCORE.GOOD,
      isAverage: this.condo.score >= SCORE.BAD && this.condo.score < SCORE.GOOD,
      isBad: this.condo.score < SCORE.BAD
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 1em 0.5em;
  border: 1px solid transparent;
}

td {
  width: 100%;
}
</style>
