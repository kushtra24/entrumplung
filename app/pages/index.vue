<script lang="ts" setup></script>

<template>
  <div>
    <BaseNavbar />
    <!-- Hero Section -->
    <section
      class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white py-24 animate-fade-in"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-blue-700 mb-6 text-center">
        Entrümpelung leicht gemacht
      </h1>
      <p class="text-lg md:text-2xl text-gray-700 max-w-2xl text-center mb-8">
        Ihr zuverlässiger Partner für Entrümpelungen, Haushaltsauflösungen und
        mehr – schnell, diskret und professionell.
      </p>
      <a
        href="#kontakt"
        class="hover:cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >Jetzt Kontakt aufnehmen</a
      >
    </section>

    <!-- Services Section -->
    <section id="leistungen" class="py-20 bg-white animate-slide-up">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-700 mb-8 text-center">
          Unsere Leistungen
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <ServicesCard
            title="Wohnungsentrümpelung"
            content="Wir räumen Wohnungen, Häuser und Keller schnell und besenrein."
          />
          <ServicesCard
            title="Haushaltsauflösung"
            content="Komplette Haushaltsauflösungen inkl. Wertanrechnung und Entsorgung."
          />
          <ServicesCard
            title="Firmen- & Büroentrümpelung"
            content="Effiziente Entrümpelung von Büros, Lagern und Gewerbeobjekten."
          />
          <!-- Added services below -->
          <ServicesCard
            title="Haushaltsauflösungen / Entrümpelungen"
            content="Fachgerechte Haushaltsauflösungen und Entrümpelungen aller Art."
          />
          <ServicesCard
            title="Messiewohnungen"
            content="Diskrete und gründliche Räumung von Messiewohnungen."
          />
          <ServicesCard
            title="Kleintransporter Seniorenumzüge"
            content="Umzüge für Senioren mit Kleintransportern – sorgsam und zuverlässig."
          />
          <ServicesCard
            title="Firmenauflösungen"
            content="Komplette Auflösung von Firmen und Gewerbeobjekten."
          />
          <ServicesCard
            title="Grundreinigungen"
            content="Gründliche Grundreinigung nach Entrümpelung oder Umzug."
          />
          <ServicesCard
            title="Gartenräumungen"
            content="Räumung und Pflege von Gärten und Außenanlagen."
          />
        </div>  
      </div>
    </section>

    <!-- Location & Contact Info Section -->
    <section id="standort" class="py-20 bg-blue-50 animate-fade-in">
      <div
        class="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center"
      >
        <div class="flex-1">
          <h2 class="text-3xl font-bold text-blue-700 mb-4">Unser Standort</h2>
          <p class="mb-2">Musterstraße 12<br />12345 Musterstadt</p>
          <p class="mb-2">
            Telefon:
            <a href="tel:+491234567890" class="text-blue-600 hover:underline"
              >+49 123 4567890</a
            >
          </p>
          <p>
            E-Mail:
            <a
              href="mailto:info@entruempelung.de"
              class="text-blue-600 hover:underline"
              >info@entruempelung.de</a
            >
          </p>
        </div>
        <div class="flex-1 w-full h-64">
          <iframe
            class="w-full h-full rounded-lg shadow"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.404954%2C52.520008%2C13.404954%2C52.520008&amp;layer=mapnik"
            style="border: 1px solid #ccc"
          />
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="kontakt" class="py-20 bg-white animate-slide-up">
      <ContactForm />
    </section>

    <BaseFooter />
  </div>
</template>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-in;
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slide-up 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
