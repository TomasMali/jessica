<!--      format: 'ean13', -->

<template>
  <div class="container my-5">
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Valore</label>
      <div class="col-sm-10">
        <!--  <button @click="calcola">Calcola</button>    -->
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          v-model="valore"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Descrizione</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputPassword"
          v-model="descrizione"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="exportToPDF">Export to PDF</button>
  </div>
  <div class="container ">
    <div ref="document">
      <div class="mt-3"></div>
      <div v-for="num in undici" :key="num">
        <div class="row pt-3">
          <div class="col text-center ">
            <div class="p-0 m-0 piccolo">{{ descrizione }}</div>
            <vue-barcode
              class="m-0 p-0"
              :value="valore"
              :options="{
                displayValue: true,
                fontSize: 9,
                height: 30,
                width: 0.7,
              }"
            ></vue-barcode>
          </div>

          <div class="col text-center">
            <div class="p-0 m-0 piccolo ">{{ descrizione }}</div>
            <vue-barcode
              :value="valore"
              :options="{
                displayValue: true,
                fontSize: 9,
                height: 30,
                width: 0.7,
              }"
            ></vue-barcode>
          </div>

          <div class="col text-center">
            <div class="p-0 m-0 piccolo">{{ descrizione }}</div>
            <vue-barcode
              :value="valore"
              :options="{
                displayValue: true,
                fontSize: 9,
                height: 30,
                width: 0.7,
              }"
            ></vue-barcode>
          </div>

          <div class="col text-center">
            <div class="p-0 m-0 piccolo">{{ descrizione }}</div>
            <vue-barcode
              :value="valore"
              :options="{
                displayValue: true,
                fontSize: 9,
                height: 30,
                width: 0.7,
              }"
            ></vue-barcode>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "PageIndex",

  data() {
    return {
      undici: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      valore: "",
      descrizione: "",
      valoreCalcolato: "",
      ok: false,
    };
  },

  methods: {
    calcola() {
      this.valore = this.valoreCalcolato;
    },
    exportToPDF() {
      html2pdf(this.$refs.document, {
        margin: 1,
        filename: "document.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: {},
      });
    },
  },
};
</script>

<style>
.piccolo {
  font-size: 8px;
  font-weight: bold;
}
</style>
