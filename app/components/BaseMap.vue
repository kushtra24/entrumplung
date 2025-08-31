<template>
  <div class="w-full h-70">
<LMap ref="map" :zoom="7" :center="[50.51567953344995, 7.034759546704902]" :use-global-leaflet="false">
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
  <LCircle
    :lat-lng="[50.51567953344995, 7.034759546704902]"
    :radius="100000"
    :color="'blue'"
  />
</LMap>
  </div>
</template>


