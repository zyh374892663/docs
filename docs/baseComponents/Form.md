---
title: 'Form'
---
## Form 通用表单
**通用表单**
#### 调用方法
<template>
  <div class="test-demo">
    <FormView :data-setting="baseInfo" :data-operationtype="1">
      <div slot="header" class="item-warp">
        基础信息
      </div>
    </FormView>
  </div>
</template>

<script>
import FormView from '../../docs/.vuepress/common/components/Form'
export default {
  data () {
    return {
      baseInfo: {
        title: '基础信息',
        list: [
          { label: '供应商名称', key: 'supplierName', value: '', type: 'input', placeholder: '请输入供应商名称', isRequired: true },
          { label: '供应商所在区域', key: 'region', value: [], type: 'region', placeholder: '请输选择商所在区域', isRequired: true, options: JSON.parse(localStorage.getItem('areaList')), validate: 'select' },
          { label: '对接人姓名', key: 'acceptor', value: '', type: 'input', placeholder: '请输入对接人姓名', isRequired: true },
          { label: '手机号', key: 'acceptorPhone', value: '', type: 'input', placeholder: '请输入手机号', isRequired: true, validate: 'mobile' },
          { label: '供应商邮箱', key: 'supplierMail', value: '', type: 'input', placeholder: '请输入供应商邮箱', isRequired: true, validate: 'email' },
          { label: '法人姓名', key: 'corporationName', value: '', type: 'input', placeholder: '请输入法人姓名', isRequired: true },
          { label: '供应商主营业务', key: 'supplierScope', value: '', type: 'input', placeholder: '请输入供应商主营业务', isRequired: true }
        ]
      }
    }
  },
  components: {
    FormView
  },
  methods: {
    
  }
}
</script>
<style scoped>
  .item-warp {
    min-height: 52px;
    color: #ccc;
    padding-top: 18px;
    margin-bottom: 6px;
  }
</style>