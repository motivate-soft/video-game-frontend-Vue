<template>
  <div class="w-full flex-col text-white text-left px-40 m-auto max-w-1440">
    <div class="mt-8 flex" :style="'margin-left: -30px'">
      <span class="font-semibold text-3xl xl:text-4xl tracking-tight pb-5 mb-2 pl-6 border-l-4 border-gray-400">iPUPPET</span>
    </div>
    <div class="w-full flex flex-wrap justify-between pb-16">
      <div class="flex flex-col justify-start w-1/2 lg:w-1/4 my-2">
        <!-- About Us, Contact Detail -->
        <a href="#" class="text-lg xl:text-xl leading-loose">about us</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">contact information</a>
        <!-- <a href="#" class="text-lg xl:text-xl leading-loose">关于我们</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">联系方式</a> -->
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Store, How to buy product, Terms of use -->
        <a href="#" class="text-lg xl:text-xl leading-loose">store</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">way to purchase products</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">terms for usage</a>
        <!-- <a href="#" class="text-lg xl:text-xl leading-loose">商店</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">产品购买途径</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">使用条款</a> -->
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Technical support, After sales service, Feedback -->
        <a href="#" class="text-lg xl:text-xl leading-loose">techincal support</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">after sales service</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">feedback</a>
        <!-- <a href="#" class="text-lg xl:text-xl leading-loose">技术支持</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">售后服务</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">反馈</a> -->
      </div>
      <div class="flex flex-col justify-start border-l w-1/2 lg:w-1/4 border-gray-400 pl-8 my-2">
        <!-- Language, Privacy -->
        <a href="#" class="text-lg xl:text-xl leading-loose">language</a>
        <a href="#" class="text-lg xl:text-xl leading-loose">privacy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamelistFooter"
};
</script>