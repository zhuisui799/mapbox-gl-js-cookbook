<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>
</template>

<script>
import baseMap from '../base-map'
import addLineLayer from '../../../snippet/deckgl/line'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [7, 47.65],
        zoom: 4.5,
        pitch: 50,
        bearing: 0
      },
      canvasId: 'line-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLineLayer(map, this.canvasId)
    }
  }
}
</script>
