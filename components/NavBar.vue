<script setup lang="ts">
type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>
<template>
    <div>
        <nav class="flex py-[20px] px-[50px] justify-between items-center bg-opacity-10 backdrop-blur-md shadow-md dark:shadow-[#41b38a] transition duration-500 ease-in-out">
            <div class="flex gap-20">
                <!-- logo -->
                <h1>PORTO-KU</h1>
                
                <!-- navigation -->
                <ul class="flex gap-20">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>

            <!-- set protoku -->
            <div class="flex gap-10 items-center">
                <NuxtLink to="" class="border-2 border-[#ddd] dark:border-[#41b38a] rounded-md px-3 py-2 cursor-pointer">Settings</NuxtLink>
                <button class="border-2 border-[#ddd] dark:border-[#41b38a] rounded-md px-2 py-2 outline-none" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                    <IconLight v-if="$colorMode.value == 'dark'"/>
                    <IconDark v-else />
                </button>
            </div>
        </nav>
    </div>
</template>