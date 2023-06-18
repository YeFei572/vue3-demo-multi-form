<script setup lang="ts">
import { reactive } from 'vue';
import { CirclePlus, Remove } from '@element-plus/icons-vue'
import './index.scss'
import { useRouter } from 'vue-router';
const form = reactive({
  names: [''],
  age: 0,
})

const add = () => {
  console.log("新增一个")
  form.names.push('')
}

const remove = () => {
  console.log("减少一个")
  if (form.names.length > 1) {
    form.names.pop()
  }
}

const router = useRouter()
const submit = () => {
  console.log("form", form.names.map(i => i.toString()))
  localStorage.setItem('token', '123')
  router.push('/')
}
</script>

<template>
  <div class="wrap">
    <el-form v-model="form" label-width="120px">
      <div v-for="(item, index) in form.names" :key="index">
        <el-form-item :label="'姓名' + (index + 1) + '：'">
          <el-col :span="20">
            <el-input v-model="form.names[index]" />
          </el-col>
          <el-col :offset="1" :span="3" class="btn">
            <CirclePlus v-if="index == 0" class="btn-add-reducer" :onclick="add" />
            <Remove v-else class="btn-add-reducer" :onclick="remove" />
          </el-col>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button :onclick="submit" type="primary" style="width: 200px;">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

