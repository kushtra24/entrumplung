<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const mobile = ref("");
const message = ref("");
const submitted = ref(false);
const error = ref("");
const loading = ref(false);

async function submitForm() {
  submitted.value = false;
  error.value = "";
  loading.value = true;
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value + (mobile.value ? `\nMobil: ${mobile.value}` : ""),
      }),
    });
    const data = await res.json();
    if (data.success) {
      submitted.value = true;
      name.value = "";
      email.value = "";
      mobile.value = "";
      message.value = "";
    } else {
      error.value = data.error || "Fehler beim Senden. Bitte versuchen Sie es später erneut.";
    }
  } catch (e) {
    error.value = "Fehler beim Senden. Bitte versuchen Sie es später erneut.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-blue-700 mb-8 text-center">
      Kontaktformular
    </h2>
    <div class="max-w-4xl mx-auto px-4 flex justify-around gap-4">
      <div class="min-w-md">
        <form
          class="space-y-6 bg-blue-50 p-8 rounded-lg shadow"
          @submit.prevent="submitForm"
        >
          <div>
            <label class="block mb-2 font-medium" for="name">Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label class="block mb-2 font-medium" for="email">E-Mail</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ihre E-Mail-Adresse"
            />
          </div>
          <div>
            <label class="block mb-2 font-medium" for="mobile"
              >Mobilnummer</label
            >
            <input
              id="mobile"
              v-model="mobile"
              type="tel"
              required
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ihre Mobilnummer"
            />
          </div>
          <div>
            <label class="block mb-2 font-medium" for="message"
              >Nachricht</label
            >
            <textarea
              id="message"
              v-model="message"
              rows="4"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ihre Nachricht (optional)"
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            :disabled="loading"
          >
            <span v-if="loading">Wird gesendet...</span>
            <span v-else>Absenden</span>
          </button>
          <div v-if="submitted" class="text-green-600 text-center mt-4">
            Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich.
          </div>
          <div v-if="error" class="text-red-600 text-center mt-4">
            {{ error }}
          </div>
        </form>
      </div>
      <div class="bg-blue-50 p-8 rounded-lg shadow max-w-md">
        <h1 class="text-lg font-semibold">Unverbindlich Kontakt aufnehmen</h1>
        <h2 class="text-md font-semibold mt-4">Adresse</h2>
        <p>
          entruempelung-sk
          <br />
          Bärenbachstraße 27, · 53506 Rech
        </p>
        <h2 class="text-md font-semibold mt-4">Ihr Ansprechspartner</h2>
        <p>Herr Krasniqi</p>
        <h2 class="text-md font-semibold mt-4">Kontakt</h2>
        <p>
          Telefon: +49 176 32734805
          <br />
          WhatsApp: +49 176 32734805
        </p>
        <h2 class="text-md font-semibold mt-4">E-Mail</h2>
        <p>
          info@entruempelung-sk.de
        </p>
        <h2 class="text-md font-semibold mt-4">Bürozeiten</h2>
        <p>Mo - Fr: 8:00 bis 20:00 Uhr</p>
        <p>Sa: 8:00 bis 18:00 Uhr</p>
        <p>
          <br />
          Besichtigungstermine nach Vereinbarung - auf Wunsch auch am Sonntag.
        </p>
      </div>
    </div>
  </div>
</template>
