<template>
  <div class="count">
    <p>辅助函数用法</p>
    <p>{{ num }}</p>
    <p>
      <button @click="add">+</button>
      <button @click="sub">-</button>
    </p>
    <hr/>
    <p>计数器1 的值：{{ count }}</p>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    data(){
      return{

      }
    },
    methods: {
      ...mapMutations({          // mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
        addClick: "ADD_ITEM",    // 映射 this.addClick() 为 this.$store.commit('ADD_ITEM')
        subClick: "SUB_ITEM"     // 映射 this.subClick() 为 this.$store.commit('SUB_ITEM')
      }),
      add(){
        this.addClick(100)
      },
      sub(){
        this.subClick(100)
      }
    },
    computed: {
      ...mapGetters(['num']), //mapGetters 辅助函数仅仅是将 store 中的 getters 映射到计算属性
      ...mapState(['count']), //mapState 辅助函数将 state 映射到计算属性中去

      //或者 可以用 对象写法 获取
      // ...mapGetters({
      //   num: 'num'
      // }),
      // ...mapState({
      //   count: state => state.count 
      // })
    },
  }
</script>


