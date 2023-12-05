<script lang="ts" setup>
import { ref } from "vue";
import { useCountryStore } from "@/store/countries";

const form = ref({
  name: "",
  lastName: "",
  country: "",
  phone: "",
});

const countryStore = useCountryStore();
countryStore.fetchCountries;

const submitForm = () => {
  console.log(form.value);
};
</script>
<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Nombre*</label>
      <input id="name" v-model="form.name" type="text" required />
    </div>
    <div>
      <label for="lastName">Apellido*</label>
      <input id="lastName" v-model="form.lastName" type="text" required />
    </div>
    <div>
      <label for="country">País*</label>
      <select id="country" v-model="form.country" required>
        <!-- <option value="">Selecciona un país</option> -->
        <option
          v-for="country in countryStore.countries"
          :key="country.id"
          :value="country.name"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="phone">Número de teléfono*</label>
      <input id="phone" v-model="form.phone" type="tel" required />
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>
