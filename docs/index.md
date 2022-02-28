# 文档
## 安装
> 需要依赖clipboard
```shell
$ npm install clipboard vue3-json-viewer --save
```
## 使用
### 预览
<Json/>

### 代码
```vue
<template>
  <JsonViewer :value="jsonData" copyable boxed sort />
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
  arr:[1,2,5]
};
const jsonData = reactive(obj);
</script>

<style></style>
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
        value: Object | Array<any> | string | number | boolean;
        expanded: boolean;
        expandDepth: number;
        copyable: boolean | object;
        sort: boolean;
        boxed: boolean;
        theme: string;
        previewMode: boolean;
        timeformat: (value: any) => string
    }
    type JsonViewerType = JsonViewerProps & VNodeProps & AllowedComponentProps & ComponentCustomProps
    const JsonViewer: Component<JsonViewerType>
    export { JsonViewer }
    const def: { install: (app: App) => void }
    export default def
}

```
