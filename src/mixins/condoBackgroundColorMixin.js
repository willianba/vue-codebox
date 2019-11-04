import { SCORE } from "@/constants/score";

export const condoBackgroundColorMixin = {
  computed: {
    backgroundColor() {
      return {
        "green-background": this.condo.score >= SCORE.GOOD,
        "yellow-background":
          this.condo.score >= SCORE.BAD && this.condo.score < SCORE.GOOD,
        "red-background": this.condo.score < SCORE.BAD
      };
    }
  }
};
