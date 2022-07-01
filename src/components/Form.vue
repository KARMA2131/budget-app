<template>
  <El-Card class="form-card">
    <El-Form :model="formData" ref="addItemForm" :rules="rules" label-position="top">
    <El-FormItem label="Type" prop="type">
        <El-Select class="type-select" v-model="formData.type">
          <El-Option label="Income" value="INCOME" />
          <El-Option label="Outcome" value="OUTCOME" />
        </El-Select>
    </El-FormItem>
        <El-FormItem label="Comments" prop="comment">
          <El-Input v-model="formData.comment" />
        </El-FormItem>
        <El-FormItem label="Value" prop="value">
          <El-Input v-model.number="formData.value.negVal" />
        </El-FormItem>
        <El-Button @click="onSubmit" type="primary">Submit</El-Button>
    </El-Form>
  </El-Card>
</template>

<script>
export default {
  name: 'FormNew',
  data: () => ({
  formData: {
    type: {
      income: 'INCOME',
      outcome: 'OUTCOME'
    },
    comment: '',
    value: {
      posVal: '0',
      negVal: '-0'
    },
  },
      rules: {
        type: [
          { required: true, massage: 'Please select type', trigger: 'blur' }
          ],
        comment: [
          { required: true, massage: 'Please input type', trigger: 'change' }
          ],
        value: [
          // { required: true, massage: 'Please input value', trigger: 'change' },
          { type: 'number',  massage: 'Value must be a number', trigger: 'change' }
        ],
    },

  }),


  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if(valid) {
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields();
        };
      });
    },

  LableOption(type) {
    if(formData.type === "INCOME"){
      console.log(type);
    }
  }

  }


};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>