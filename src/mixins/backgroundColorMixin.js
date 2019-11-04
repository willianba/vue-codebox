export const backgroundColorMixin = {
  computed: {
    backgroundColor() {
      return {
        "green-background": this.isGood,
        "yellow-background": this.isAverage,
        "red-background": this.isBad
      };
    }
  }
};
