<script setup>
import routers from '@/router/routes'
import maplibregl from 'maplibre-gl'
import { useMapStore } from '@/stores/map'

const router = useRouter()
const mapStore = useMapStore()

const conRef = ref(null)

const handleClick = (item) => {
  router.push(item.path)
}

const initMap = () => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1
  })
  mapStore.setMap(map)
}
onMounted(() => {
  initMap()
})
</script>

<template>
  <a-layout class="home-view">
    <a-layout-sider theme="dark">
      <a-menu theme="dark">
        <a-menu-item v-for="item in routers" :key="item.path" @click="handleClick(item)">
          {{ item.meta.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="main">
        <div id="map" ref="conRef"></div>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.home-view {
  position: relative;
  width: 100vw;
  height: 100vh;
  .main {
    position: relative;
    padding: 0;
  }
  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
