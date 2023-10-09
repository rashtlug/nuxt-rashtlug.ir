import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinux as fabLinux } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
 fabLinux
)

export default defineNuxtPlugin(({vueApp}) => {
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})