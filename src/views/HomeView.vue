<template>
  <div>
    <h1>Operação Florestal - Equipamentos</h1>
    <MapComponent :equipment="equipmentData" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { fetchEquipmentPositionHistory } from '../services/api'
import MapComponent from '../components/MapComponent.vue'

export default {
  components: { MapComponent },
  setup() {
    const equipmentData = ref([])

    onMounted(() => {
      equipmentData.value = fetchEquipmentPositionHistory()
    })

    return { equipmentData }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
