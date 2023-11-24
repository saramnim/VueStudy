<template>
  <header h-5vh flex flex-row justify-end items-center bg-amber>
    <!-- 바보
    <Link to="/" element='Home'/>
    <Link to="/user/login" element='Login'/>
    <Link to="/user/register" element='Register'/> -->
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4"  chip-color="primary" chip-text="" chip-position="top-right" size="sm" />
    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
    <NuxtLink to="/" border-none decoration-none color-black mr-5 font-size-17px
      >Home</NuxtLink
    >
    <NuxtLink
      to="/user/login"
      border-none
      decoration-none
      color-black
      mr-5
      font-size-17px
      >Login</NuxtLink
    >
    <NuxtLink
      to="/user/register"
      border-none
      decoration-none
      color-black
      mr-5
      font-size-17px
      >Register</NuxtLink
    >
    <NuxtLink
      to="/post/postlist"
      border-none
      decoration-none
      color-black
      mr-5
      font-size-17px
      >PostList</NuxtLink
    >
    <NuxtLink
      to="/project/ProjectManage"
      border-none
      decoration-none
      color-black
      mr-5
      font-size-17px
      >Project</NuxtLink
    >
  </header>
</template>
<script setup>
import Link from "../link/Link.vue";
const items = [
  [
    {
      label: "ben@example.com",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
    },
  ],
  [
    {
      label: "Documentation",
      icon: "i-heroicons-book-open",
    },
    {
      label: "Changelog",
      icon: "i-heroicons-megaphone",
    },
    {
      label: "Status",
      icon: "i-heroicons-signal",
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
    },
  ],
];
</script>