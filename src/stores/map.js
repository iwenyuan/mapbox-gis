import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', () => {
  let map = null
  let view = null

  const setMap = (mapIns) => {
    map = mapIns
  }

  const setView = (viewIns) => {
    view = viewIns
  }

  return { map, setMap, view, setView }
})
