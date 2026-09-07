import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { onMounted } from 'vue'

export default {
  extends: DefaultTheme,

  Layout,

  setup() {
    onMounted(() => {
      const script = document.createElement('script')

      script.src =
        'https://unpkg.com/google-translate-pure-js/js/multilang.js'

      script.onload = () => {
        if (window.initMultiLang) {
          window.initMultiLang({
            pageLanguage: 'en',

            languages: [
              { code: 'en', name: 'English', flag: '🇬🇧' },
              { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
              { code: 'it', name: 'Italiano', flag: '🇮🇹' },
              { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
              { code: 'fr', name: 'Français', flag: '🇫🇷' },
              { code: 'es', name: 'Español', flag: '🇪🇸' },
              { code: 'pt', name: 'Português', flag: '🇵🇹' },
              { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
              { code: 'pl', name: 'Polski', flag: '🇵🇱' },
              { code: 'uk', name: 'Українська', flag: '🇺🇦' },
              { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
              { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
              { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
              { code: 'ro', name: 'Română', flag: '🇷🇴' },
              { code: 'bg', name: 'Български', flag: '🇧🇬' },
              { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
              { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
              { code: 'da', name: 'Dansk', flag: '🇩🇰' },
              { code: 'no', name: 'Norsk', flag: '🇳🇴' },
              { code: 'fi', name: 'Suomi', flag: '🇫🇮' },

              { code: 'ru', name: 'Русский', flag: '🇷🇺' },
              { code: 'ar', name: 'العربية', flag: '🇸🇦' },
              { code: 'he', name: 'עברית', flag: '🇮🇱' },
              { code: 'fa', name: 'فارسی', flag: '🇮🇷' },

              { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
              { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
              { code: 'ja', name: '日本語', flag: '🇯🇵' },
              { code: 'ko', name: '한국어', flag: '🇰🇷' },

              { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
              { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
              { code: 'ur', name: 'اردو', flag: '🇵🇰' },
              { code: 'th', name: 'ไทย', flag: '🇹🇭' },
              { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
              { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
              { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
              { code: 'tl', name: 'Filipino', flag: '🇵🇭' },

              { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
              { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
              { code: 'ca', name: 'Català', flag: '🇪🇸' },
              { code: 'eu', name: 'Euskara', flag: '🇪🇸' },
              { code: 'gl', name: 'Galego', flag: '🇪🇸' },
              { code: 'la', name: 'Latina', flag: '🇻🇦' }
            ]
          })
        }
      }

      document.head.appendChild(script)
    })
  }
}
