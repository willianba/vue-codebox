<template>
  <div>
    <table>
      <tr>
        <a :class="backgroundColor">
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
        "green-background": this.isGood,
        "yellow-background": this.isAverage,
        "red-background": this.isBad
      };
    }
  },
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

.green-background {
  background-color: rgba(170, 255, 153, 0.26);
}

.yellow-background {
  background-color: rgba(255, 253, 153, 0.26);
}

.red-background {
  background-color: rgba(255, 153, 153, 0.26);
}
</style>
