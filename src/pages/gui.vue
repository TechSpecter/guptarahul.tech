<template>

  <main class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">Hello 👋</h1>
        <h1 data-aos="fade-down" class="text-4xl md:text-4xl font-bold mb-6">I'm Rahul Gupta</h1>
        <p class="mb-10">
          A TOGAF certified Enterprise Architect and Cloud professional from India 🇮🇳 I am having 13+ years of experience in designing and implementing cloud-based solutions that drive business growth and innovation.
        </p>
        <div class="grid grid-flow-col gap-4">
          <template v-for="(link, index) in socialLinks" :key="index">
            <div
              data-aos="fade-in"
              class="tooltip tooltip-bottom"
              :data-aos-delay="index * 200"
              :data-tip="link.name"
            >
              <a :href="link.url" target="_blank">
                <i :class="`${link.icon} text-4xl`"></i>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import { SOCIAL_LINKS } from '~/constants';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Home - Rahul Gupta';
    const metaDescription = 'Enterprise Architect and Cloud Professional from 🇮🇳';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://guptarahul.tech/gui',
      ogUrl: 'https://guptarahul.tech/gui',
      twitterCard: 'summary_large_image',
    });

    return {
      socialLinks: SOCIAL_LINKS,
    };
  },
};
</script>
