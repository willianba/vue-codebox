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
import { condoBackgroundColorMixin } from "@/mixins/condoBackgroundColorMixin";

export default {
  name: "Condo",
  methods: {
    sendToCondoList() {
      this.$emit("condo-to-condolist", this.condo);
    }
  },
  mixins: [condoBackgroundColorMixin],
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
