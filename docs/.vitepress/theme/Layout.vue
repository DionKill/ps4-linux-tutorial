<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme

onMounted(() => {
  const style = document.createElement('style')

  style.textContent = `
    .ml-language-popup {
      display: none;

      position: fixed !important;

      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;

      background: #4f4f4f !important;

      padding: 20px !important;
      border-radius: 12px !important;

      width: auto !important;
      max-width: 400px !important;

      height: auto !important;
      max-height: 80vh !important;

      overflow-y: auto !important;

      z-index: 1001 !important;

      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
    }

    .ml-language-grid {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 15px !important;
    }

    .ml-language-option {
      display: flex !important;
      align-items: center !important;

      padding: 14px !important;

      cursor: pointer !important;

      border: 1px solid #666 !important;
      border-radius: 8px !important;

      background: #4f4f4f !important;
      color: white !important;

      transition: all 0.2s ease !important;
    }

    .ml-language-option:hover {
      background: #5f5f5f !important;
      border-color: #999 !important;
    }

    .ml-language-option .ml-flag {
      font-size: 24px !important;
      margin-right: 15px !important;

      display: inline-block !important;
      min-width: 24px !important;
    }

    .ml-language-option .ml-language-name {
      font-size: 16px !important;
      font-weight: 500 !important;

      color: white !important;
    }

    #ml-languageButton {
      font-size: 16px !important;

      padding: 6px 16px !important;

      background: #1b1b1f !important;
      color: white !important;

      border: none !important;
      border-radius: 5px !important;

      cursor: pointer !important;

      display: flex !important;
      align-items: center !important;

      gap: 7px !important;

      margin: 8px !important;
    }

    #ml-languageButton:hover {
      background: #2f2f2f !important;
    }
  `

  document.head.appendChild(style)
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <div id="multilang"></div>
    </template>
  </Layout>
</template>