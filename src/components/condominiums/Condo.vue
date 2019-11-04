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

export default {
  name: "Condo",
  computed: {
    backgroundColor() {
      return {
        "green-background": this.condo.score >= SCORE.GOOD,
        "yellow-background":
          this.condo.score >= SCORE.BAD && this.condo.score < SCORE.GOOD,
        "red-background": this.condo.score < SCORE.BAD
      };
    }
  },
  methods: {
    sendToCondoList() {
      this.$emit("condo-to-condolist", this.condo);
    }
  },
  props: {
    condo: {
      type: Object,
      required: true
    }
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
