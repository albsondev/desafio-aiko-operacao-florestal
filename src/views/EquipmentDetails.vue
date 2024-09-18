<template>
  <div>
    <h1>Detalhes do Equipamento</h1>
    <p>Equipamento: {{ equipment.name }}</p>
    <p>Modelo: {{ model.name }}</p>
    <p>Histórico de Posições:</p>
    <ul>
      <li v-for="position in positionHistory.positions" :key="position.date">
        Data: {{ position.date }} - Lat: {{ position.lat }} - Lon: {{ position.lon }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { fetchEquipment, fetchEquipmentModel, fetchEquipmentPositionHistory } from '../services/api'

export default {
  setup() {
    const equipment = ref({})
    const model = ref({})
    const positionHistory = ref({})

    const loadEquipmentDetails = () => {
      const equipmentId = 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9' // Example equipment ID
      equipment.value = fetchEquipment().find((e) => e.id === equipmentId)
      model.value = fetchEquipmentModel().find((m) => m.id === equipment.value.equipmentModelId)
      positionHistory.value = fetchEquipmentPositionHistory().find(
        (p) => p.equipmentId === equipmentId
      )
    }

    onMounted(loadEquipmentDetails)

    return { equipment, model, positionHistory }
  }
}
</script>
