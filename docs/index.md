# 文档
## 安装
> 2.1.0以下版本需要依赖clipboard 
```shell
$ npm install clipboard vue3-json-viewer --save
```

> 2.1.0以上版本不需要依赖clipboard 
```shell
$ npm install vue3-json-viewer --save
```
## 使用
### 预览
<Json/>

### 代码
```vue
<template>
<div class="box">
  <h4>普通</h4>
 <JsonViewer :value="jsonData" copyable boxed sort theme="light"  @onKeyClick="keyClick"/>
  <h4>暗黑</h4>
   <JsonViewer :value="jsonData" copyable boxed sort theme="dark"  @onKeyClick="keyClick"/>
</div>
 
</template>

<script setup>
import {JsonViewer} from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { reactive, ref } from "vue";
let obj = {
  name: "qiu",//字符串
  age: 18,//数组
  isMan:false,//布尔值
  date:new Date(),
  fn:()=>{},
  arr:[1,2,5],
  reg:/ab+c/i
};
const jsonData = reactive(obj);
const keyClick = (keyName)=>{
  console.log(keyName,"被点击了")
}
</script>

<style>
.box{
    margin-top: 1rem;
}
</style>


```
<script setup>
import Json from "../comp/Json.vue"
    
</script>

### TypeScript支持

在项目src目录下创建`vue3-json-viewer.d.ts`
```typescript

declare module 'vue3-json-viewer' {
    import { AllowedComponentProps, App, Component, ComponentCustomProps, VNodeProps } from 'vue'
    interface JsonViewerProps {
        value: Object | Array<any> | string | number | boolean; //对象
        expanded: boolean; //是否自动展开
        expandDepth: number; //展开层级
        copyable: boolean | object; //是否可复制
        sort: boolean;//是否排序
        boxed: boolean;//是否boxed
        theme: string;//主题 jv-dark | jv-light
        previewMode: boolean;//是否可复制
        timeformat: (value: any) => string
    }
    type JsonViewerType = JsonViewerProps & VNodeProps & AllowedComponentProps & ComponentCustomProps
    const JsonViewer: Component<JsonViewerType>
    export { JsonViewer }
    const def: { install: (app: App) => void }
    export default def
}

```
