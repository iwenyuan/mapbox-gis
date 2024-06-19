import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', () => {
  let map = null
  let view = null

  const setMap = (map) => {
    this.map = map
  }

  const setView = (view) => {
    this.view = view
  }

  return { map, setMap, view, setView }
})
