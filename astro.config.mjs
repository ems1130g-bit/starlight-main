import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'No Mute',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Getting Started', link: '/guides/example/' },
                    ],
                },
            ],
            customCss: ['./src/styles/custom.css'],
            components: {
                SiteTitle: './src/components/SiteTitle.astro',
            },
        }),
    ],
});
