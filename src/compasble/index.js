import { createI18n } from 'vue-i18n'
import zhTW from 'vxe-table/lib/locale/lang/zh-TW'
import enUS from 'vxe-table/lib/locale/lang/en-US'

const messages = {
  zhTW: {
    ...zhTW
  },
  en_US: {
    ...enUS
  }
}

const i18n = createI18n({
  locale: 'zhTW',
  messages,
})

export default i18n