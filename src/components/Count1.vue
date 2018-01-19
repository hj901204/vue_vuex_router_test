<template>
  <div class="count">
    <p>基础用法</p>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
       <p>计数器2 的值：{{ num }}</p>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'app',
    computed: {
      count() {
        return this.$store.state.count
      },
      ...mapState(['num']), //mapState 辅助函数将 state 映射到计算属性中去
    },
    methods: {
      increment() {
        this.$store.dispatch('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>


