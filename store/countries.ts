import { defineStore } from "pinia";

interface Country {
  id: number;
  name: string;
}

export const useCountryStore = defineStore({
  id: "countries",
  state: (): { countries: Country[] } => ({
    countries: [],
  }),
  actions: {
    fetchCountries() {
      this.countries = [
        { id: 1, name: "Colombia" },
        { id: 2, name: "Estados Unidos" },
        { id: 3, name: "Australia" },
      ];
    },
  },
});
