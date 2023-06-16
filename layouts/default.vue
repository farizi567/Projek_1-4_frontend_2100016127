<script setup lang="ts">

const handleLinkClick = (hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    isActive.value = {
        contact: hash === '#contact',
    };
};
const isActive = ref({

    contact: false,
})

</script>

<template>
    <div class="h-full xl:flex p-5 w-full ">
        <section
            class="main-profile flex flex-col justify-around gap-4 px-9 py-6 border-2 border-gray-600 border-opacity-30 rounded-3xl xl:w-[30%] shadow-sm shadow-white ">
            <div class="header flex justify-between items-center">
                <h1 class="name text-[20px] mobile400:text-[25px] font-bold xl:text-[28px]">Alfarizi</h1>
                <p class="role text-[15px] mobile400:text-[18px]">
                    Framer Designer <br />
                    & Developer
                </p>
            </div>
            <div
                class="body mt-10 text-center mobile500:flex mobile500:gap-6 mobile500:justify-around mobile500:items-center xl:flex-col ">
                <img src="../public/user.jpeg" alt="" class="rounded-2xl mobile500:w-[40%] xl:w-full 2xl:w-1/2" />
                <div class="mt-10">
                    <p class="text-[20px]">
                        Hello@alfarizi.design <br />
                        Base in Indonesia, Yogyakarta
                    </p>
                    <div class="flex justify-center gap-2 mt-4">
                        <Icon size="30px" class="border rounded-full p-1" name="uil:twitter" />
                        <Icon size="30px" class="border rounded-full p-1" name="ri:instagram-line" />
                        <Icon size="30px" class="border rounded-full p-1" name="uil:github" />
                    </div>
                </div>
            </div>
            <div class="footer text-center flex justify-center mt-10">
                <button @click="handleLinkClick('#contact')"
                    class="flex items-center gap-3 justify-center dark:bg-[#2AE98D] px-10 py-1 xl:px-20 xl:py-2 rounded-full dark:text-[black]">
                    <Icon name="ic:outline-email" size="30px" />
                    Here me
                </button>
            </div>
        </section>
        <div class="block xl:hidden mt-6">
            <Icon name="pixelarticons:scroll-vertical" size="40px" class="w-full" />
        </div>
        <slot />
        <BarStatus class="" />
    </div>
</template>
