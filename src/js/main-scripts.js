import MenuDesktop from './modules/MenuDesktop'
import MenuMobile from './modules/MenuMobile'

import ToggleClassNameAfterHeader from './modules/ToggleClassNameAfterHeader'

new MenuDesktop(1599)
new MenuMobile(1600)
new ToggleClassNameAfterHeader('header-logo-front-page', 'header__logo--hide', 'remove')
new ToggleClassNameAfterHeader('menu-mobile-trigger', 'menu-burger--is-black', 'add')