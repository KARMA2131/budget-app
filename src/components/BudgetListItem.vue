<template>
      <div class="budget-list-wrap">
          <div class="list-item" v-for="(item, prop) in list" :key="prop">
            <span class="budgett-comment"> {{ item.comment }}</span>
            <span class="budgett-value"> {{ item.value }}</span>
            <El-Button type="danger" size="mini" @click="deleteItem(item.id)">Delete</El-Button>
        </div>
      </div>
</template>

<script>
export default {
  name:'BudgetListItem',

  data: () => ({}),

  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
}
</script>

<style scooped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budgett-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

</style>