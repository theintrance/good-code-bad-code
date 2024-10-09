// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  integrations: [mdx(), preact(), react(), sitemap()],
  base: `/good-code-bad-code/`,  // GitHub Pages 프로젝트 경로로 수정
  site: `https://theintrance.github.io/good-code-bad-code`,  // GitHub Pages 배포 URL로 수정
})