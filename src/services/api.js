import equipment from '../data/equipment.json'
import equipmentState from '../data/equipmentState.json'
import equipmentModel from '../data/equipmentModel.json'
import equipmentPositionHistory from '../data/equipmentPositionHistory.json'
import equipmentStateHistory from '../data/equipmentStateHistory.json'

export function fetchEquipment() {
  return equipment
}

export function fetchEquipmentState() {
  return equipmentState
}

export function fetchEquipmentModel() {
  return equipmentModel
}

export function fetchEquipmentPositionHistory() {
  return equipmentPositionHistory
}

export function fetchEquipmentStateHistory() {
  return equipmentStateHistory
}
