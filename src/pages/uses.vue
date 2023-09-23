<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Uses</h1>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Editor</h2>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/" target="_blank" class="underline hover:text-primary">Vistual Studio Code</a>
        </li>
        <li>
          Font: <a href="https://www.jetbrains.com/lp/mono/" target="_blank" class="underline hover:text-primary">JetBrains Mono</a>
        </li>
        <li>
          Theme: <a href="https://github.com/catppuccin/catppuccin" target="_blank" class="underline hover:text-primary">Catppuccin</a>
        </li>
        <li>
          Icons: <a href="https://github.com/catppuccin/vscode-icons" target="_blank" class="underline hover:text-primary">Catppuccin Icons</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Terminal</h2>
      <ul>
        <li>
          <a href="https://iterm2.com/" target="_blank" class="underline hover:text-primary">iTerm 2</a>, running on <a href="https://github.com/romkatv/powerlevel10k" target="_blank" class="underline hover:text-primary">PowerLevel10K</a> prompt on <a href="https://www.zsh.org/" target="_blank" class="underline hover:text-primary">zsh</a>
          </li>
        <li>
          Meslo Nerd Font
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Desktop Apps</h2>
      <ul>
        <li>
          Browser: <a href="https://brave.com/" target="_blank" class="underline hover:text-primary">Brave Browser</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Communication</h2>
      <ul>
        <li>
          <a href="https://www.whatsapp.com/" target="_blank" class="underline hover:text-primary">WhatsApp</a>
        </li>
        <li>
          <a href="https://telegram.org/" target="_blank" class="underline hover:text-primary">Telegram</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Hardware</h2>
      <ul>
        <li>
          MacBook Air M1 (2021) 16GB RAM, 256GB SSD
        </li>
        <li>
          Monitors: BenQ GW2780
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Uses - Rahul Gupta';
    const metaDescription = 'A list of tools and software I use for development and productivity';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://guptarahul.tech/uses',
      ogUrl: 'https://guptarahul.tech/uses',
      twitterCard: 'summary_large_image',
    });

    return {};
  },
};
</script>

<style scoped>
li::before {
  content: '• ';
}
</style>
