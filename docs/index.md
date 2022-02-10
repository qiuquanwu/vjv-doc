# 使用文档
### 预览
<Json/>

### 代码
```vue
<template>
  <JsonViewer :value="jsonData" copyable boxed sort />
</template>

<script setup>
import {JsonViewer} from "vue3-json-viewer"
import "vue3-json-viewer/dist/index.css";
import { reactive, ref } from "vue";
let obj = {
  name: "qiu",//字符串
  age: 18,//数组
  isMan:false,//布尔值
  date:new Date(),
  fn:()=>{},
  arr:[1,2,5]
};
const jsonData = reactive(obj);
</script>

<style></style>
```
<script setup>
import Json from "../comp/Json.vue"
    
</script>