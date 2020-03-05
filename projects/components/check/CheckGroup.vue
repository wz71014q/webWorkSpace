<template>
  <div class="yf-check-wrapper">
    <div v-if="checkAll" class="yf-check-li" @click="selectAll">
      <img
        class="yf-check-image"
        :src="[isSelectAll ? CheckboxSelected : CheckboxUnselected]">
      <span class="yf-check-text">
        {{ checkAllText }}
      </span>
    </div>
    <ul>
      <li
        class="yf-check-li"
        v-for="(item, index) in checkList"
        :key="`${item}_${index}`"
        :class="{ disabled: item.disable }"
        @click="handleChange(item, index)">
        <img
          class="yf-check-image"
          :src="[item.isSelected ? CheckboxSelected : CheckboxUnselected]">
        <span class="yf-check-text">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'YFCheckGroup',
  props: {
    dataSource: { // 数据源
      type: Array,
      default () {
        return []
      }
    },
    checkAll: { // 是否有全选
      type: Boolean,
      default () {
        return false
      }
    },
    checkAllText: { // 全选title
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      CheckboxSelected: '',
      CheckboxUnselected: '',
      isSelectAll: false, // 是否有全选
      checkList: [],
      selectedList: [] // 选择内容
    }
  },
  mounted () {
    this.checkList = this.dataSource.map((item) => {
      return {
        name: item.name ? item.name : item,
        isSelected: false,
        disable: item.disable
      }
    })
    console.log(this.checkList)
  },
  methods: {
    handleChange (item, index) {
      if (item.disable) {
        return
      }
      if (item.isSelected) {
        this.unselect(item)
      } else {
        this.select(item)
      }
      item.isSelected = !item.isSelected
      this.$emit('handleChange', { name: item.name, index, checkList: this.selectedList })
    },
    selectAll () {
      this.isSelectAll = !this.isSelectAll
      this.checkList.forEach(item => {
        if (!item.isSelected && !item.disable) {
          this.select(item)
          item.isSelected = true
        }
      })
      this.$emit('handleChange', { checkList: this.selectedList })
    },
    unSelectAll () {
      this.isSelectAll = false
      this.selectedList = []
      this.checkList.forEach(item => {
        item.isSelected = false
      })
      this.$emit('handleChange', { checkList: this.selectedList })
    },
    select (val) {
      this.selectedList.push(val.name)
      if (this.selectedList.length === this.checkList.length && this.selectedList.length > 0) {
        this.isSelectAll = true
      }
    },
    unselect (val) {
      const itemIndex = this.checkList.indexOf(val.name)
      this.selectedList.splice(itemIndex, 1)
      this.isSelectAll = false
    }
  }
}
</script>

<style lang="scss" scoped>
.yf-check-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  background-color: #fff;
}
.yf-check-li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0;
  box-shadow: inset 0 -0.5px 0 0 #e5e5e5;
}
.yf-check-image {
  width: 20px;
  height: 20px;
}
.yf-check-text {
  margin-left: 10px;
  color: #333;
  font-size: 14px;
  font-family: PingFangSC-Regular;
}
.disabled {
  opacity: 0.5;
}
</style>
