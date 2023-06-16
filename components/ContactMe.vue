<template>
    <div id="contact" class="mt-32">
        <button class="flex items-center gap-3 border p-1 px-5 rounded-full">
            <Icon name="mdi:email-edit-outline" /> CONTACT
        </button>

        <h1 class="text-[30px] xl:text-[35px] mt-10">Let's Work <span class="dark:text-[#2AE98D]">Together!</span></h1>
        <p>Leave a message if any !</p>
        <form @submit.prevent="" class="flex flex-col mt-10 gap-10">
            <div class="name flex flex-col">
                <label for="name" class="text-xs">FULL NAME</label>
                <input type="text" id="name" placeholder="Input your name"
                    class="py-2 border-b-2 bg-[#1F1F21] outline-none">
            </div>

            <div class="email flex flex-col">
                <label for="email" class="text-xs">EMAIL</label>
                <input type="text" id="email" placeholder="Input your email address"
                    class="py-2 border-b-2 bg-[#1F1F21] outline-none">
            </div>

            <div>
                <label for="message" class="mb-5 block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Leave a comment..."></textarea>
            </div>

        </form>
    </div>
</template>