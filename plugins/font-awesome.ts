import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinux, faInstagram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
 faLinux,
 faAngleDown,
 faInstagram,
 faUser

)

export default defineNuxtPlugin(({vueApp}) => {
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})