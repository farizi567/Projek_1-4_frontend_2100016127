<template>
  <div class="h-full w-full">
    <NuxtLayout>
      <main class="flex flex-col overflow-y-scroll px-5 xl:px-32 pt-[70px] xl:w-[60%] dark-scrollbar">
        <IntroDuce />
        <AboutMySelf />
        <MyResume />
        <ContactMe />
      </main>
    </NuxtLayout>
  </div>
</template>


<style scoped>
.dark-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.dark-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 20px;
}

.dark-scrollbar::-webkit-scrollbar-track {
  background-color: none;
}

/* Gaya scrollbar untuk tema terang */
.light-scrollbar-thumb {
  background-color: #888;
}

.custom-scrollbar-track {
  background-color: white;
}
</style>