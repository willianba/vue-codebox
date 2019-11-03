import { SCORE } from "@/constants/score";

export const condosClassificationMixin = {
  methods: {
    getGoodCondos() {
      return this.condos.filter(condo => {
        return condo.score >= SCORE.GOOD;
      });
    },
    getAverageCondos() {
      return this.condos.filter(condo => {
        return condo.score >= SCORE.BAD && condo.score < SCORE.GOOD;
      });
    },
    getBadCondos() {
      return this.condos.filter(condo => {
        return condo.score < SCORE.BAD;
      });
    }
  }
};
