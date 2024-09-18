<template>
  <div id="map" style="height: 500px"></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  props: ['equipment'],
  mounted() {
    const map = L.map('map').setView([-19.126536, -45.947756], 12)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    this.equipment.forEach((item) => {
      const latestPosition = item.positions[item.positions.length - 1]
      const marker = L.marker([latestPosition.lat, latestPosition.lon]).addTo(map)
      marker.bindPopup(`<b>${item.equipmentId}</b>`)
    })
  }
}
</script>
