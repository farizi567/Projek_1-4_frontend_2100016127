<script setup lang="ts">

const text = "Next' Page"


</script>

<template>
    <div id="introduce" class="intro h-full relative">
        <section>
            <button class="flex items-center gap-3 border p-1 px-5 rounded-full">
                <Icon name="clarity:home-line" /> INTRODUCE
            </button>
            <h1 class="text-[30px] xl:text-[40px] mt-10">Say Hi from <span class="dark:text-[#2AE98D]">Alfarizi,</span> <br>
                Framer
                Designer
                and
                Developer</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus illum tenetur
                inventore
                voluptatibus?
            </p>

            <button
                class="border-2 dark:border-[#2AE98D] text-sm p-1 sm:text-2xl sm:p-2 rounded-full dark:text-[#2AE98D] absolute right-0 animate-[pulse_2s_linear_infinite]">
                <div class="text-center">
                    <span v-for="(char, index) in text" :key="index" class="block">{{ char }}</span>
                    <Icon name="pixelarticons:arrow-down" size="30px"></Icon>
                </div>
            </button>

            <div class="w-fit ml-4 sm:ml-0 mt-8 sm:mt-32 gap-16 mobile500:flex sm:flex">
                <!-- status experience -->
                <div class="w-24">
                    <h1 class="text-[#2AE98D] text-[60px]">10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <!-- status projects of complete -->
                <div class="w-52">
                    <h1 class="text-[#2AE98D] text-[60px]">24+</h1>
                    <p>PROJECTS COMPLETED ON 15 COUNTRIES</p>
                </div>
            </div>
        </section>
    </div>
</template>

