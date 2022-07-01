<template>
  <div class="budget-list-wrap">
    <El-Card :header="header">
      <template v-if="!isEmpty">
        <BudgetList-Item :list="list" @deleteItem="onDeleteItems"/>
      </template>
      <El-Alert v-else type="info" :title="emptyTitle" :closable="false" />
    </El-Card>
  </div>
</template>

<script>

import BudgetListItem from './BudgetListItem.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
},
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List'
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },

  methods: {
    onDeleteItems(id) {
      this.$delete(this.list, id);
    },
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

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
