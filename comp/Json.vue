<template>
<div class="box">
  <h4>普通</h4>
 <JsonViewer :value="jsonData"  copyable boxed sort theme="light"  @onKeyClick="keyClick"/>
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
  age: 19,//数组
  isMan:false,//布尔值
  date:new Date(),
  fn:()=>{},
  arr:[1,2,5],
  reg:/ab+c/i,
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
.box h4{
    padding:  1rem 0;
}
</style>
