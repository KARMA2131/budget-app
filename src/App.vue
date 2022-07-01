<template>
  <div id="app">
    <Form-New @submitForm="onFormSubmit" />
    <Total-Balance :total="totalBalance" />
    <Budget-List :list="list"/>
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue';
import TotalBalance from './components/TotalBalance.vue';
import FormNew from './components/Form.vue';


export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormNew,
},
  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        value: 400,
        comment: 'Payment',
        id: 1,
      },
            2 : {
        type: 'OUTCOME',
        value: -10,
        comment: 'Coffee',
        id: 2,
      },
              3: {
        type: 'INCOME',
        value: 400,
        comment: 'Payment',
        id: 3,
      },
                    4: {
        type: 'INCOME',
        value: 400,
        comment: 'Payment',
        id: 4,
      },
    },
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value, 0);
    }
  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      this.$set(this.list, newObj.id, newObj);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
