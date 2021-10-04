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
      <div class="px-5 my-3">
        <div class="top-margin">
          <div v-for="num in undici" :key="num" class="myrow">
            <div class=" mycol ">
              <div class="piccolo">{{ descrizione }}</div>
              <vue-barcode
                :value="valore"
                :options="barOption"
                class="all-zero"
              ></vue-barcode>
            </div>

            <div class=" mycol  ">
              <div class="piccolo ">{{ descrizione }}</div>
              <vue-barcode
                :value="valore"
                :options="barOption"
                class="all-zero"
              ></vue-barcode>
            </div>

            <div class=" mycol ">
              <div class="piccolo">{{ descrizione }}</div>
              <vue-barcode
                :value="valore"
                :options="barOption"
                class="all-zero"
              ></vue-barcode>
            </div>

            <div class=" mycol ">
              <div class="piccolo">{{ descrizione }}</div>
              <vue-barcode
                :value="valore"
                :options="barOption"
                class="all-zero"
              ></vue-barcode>
            </div>
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
  computed: {
    barOption() {
      return {
        displayValue: true,
        fontSize: 11,
        height: 27,
        width: 0.8,
        textMargin: 0,
        margin: 2,
        marginBottom: 15,
      };
    },
  },

  methods: {
    calcola() {
      this.valore = this.valoreCalcolato;
    },
    exportToPDF() {
      html2pdf(this.$refs.document, {
        margin: 0,
        filename: "document.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { dpi: 4960, letterRendering: true },
        jsPDF: {},
      });
    },
  },
};
</script>

<style>
.piccolo {
  font-size: 10px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.top-margin {
  margin-top: 55px;
}

.all-zero {
  padding: 0;
  margin: 0;
}

.mycol {
  float: left;
  width: 25%;
  text-align: left;
}
.myrow {
  margin-top: 5px;
}
/* Clear floats after the columns */
.myrow:after {
  content: "";
  display: table;
  clear: both;
}
</style>
