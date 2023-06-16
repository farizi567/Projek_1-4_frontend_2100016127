<script setup lang="ts">
type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

const handleLinkClick = (hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    isActive.value = {
        introduce: hash === '#introduce',
        about: hash === '#about',
        resume: hash === '#resume',
        contact: hash === '#contact',
    };
};
const isActive = ref({
    introduce: true,
    about: false,
    resume: false,
    contact: false,
})

</script>
<template>
    <div class="mt-5 sm:mt-0 sticky bottom-3 xl:w-[10%] xl:flex items-center">
        <section class="w-full flex justify-center">
            <ul
                class="border p-2 xl:p-3 w-full xl:w-max rounded-xl xl:rounded-full flex justify-between xl:flex-col gap-3 backdrop-blur-lg">
                <li>
                    <a @click="handleLinkClick('#introduce')" :class="{ 'text-[#2AE98D]': isActive.introduce }">
                        <span>
                            <Icon name="clarity:home-line" />
                        </span>
                    </a>
                </li>
                <li>
                    <a @click="handleLinkClick('#about')" :class="{ 'text-[#2AE98D]': isActive.about }">
                        <span>
                            <Icon name="carbon:user-profile" />
                        </span>
                    </a>
                </li>
                <li>
                    <a @click="handleLinkClick('#resume')" :class="{ 'text-[#2AE98D]': isActive.resume }">
                        <span>
                            <Icon name="ri:profile-line" />
                        </span>
                    </a>
                </li>
                <li>
                    <a @click="handleLinkClick('#contact')" :class="{ 'text-[#2AE98D]': isActive.contact }">
                        <span>
                            <Icon name="mdi:email-edit-outline" />
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

