<template>
  <div class="w-full flex-col text-white text-left m-auto" :style="'max-width: 1600px'">
    <div class="my-8">
      <span class="font-semibold text-4xl xl:text-6xl tracking-tight">iPUPPET</span>
    </div>
    <div class="w-full flex flex-wrap justify-between pb-16">
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- About Us, Contact Detail -->
        <a href="#" class="text-xl xl:text-2xl">关于我们</a>
        <a href="#" class="text-xl xl:text-2xl">联系方式</a>
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Store, How to buy product, Terms of use -->
        <a href="#" class="text-xl xl:text-2xl">商店</a>
        <a href="#" class="text-xl xl:text-2xl">产品购买途径</a>
        <a href="#" class="text-xl xl:text-2xl">使用条款</a>
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Technical support, After sales service, Feedback -->
        <a href="#" class="text-xl xl:text-2xl">技术支持</a>
        <a href="#" class="text-xl xl:text-2xl">售后服务</a>
        <a href="#" class="text-xl xl:text-2xl">反馈</a>
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Language, Privacy -->
        <a href="#" class="text-xl xl:text-2xl">语言</a>
        <a href="#" class="text-xl xl:text-2xl">隐私</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamelistFooter"
};
</script>