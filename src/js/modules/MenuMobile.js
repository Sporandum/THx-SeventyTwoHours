import {
  debounce, throttle
} from 'lodash'

class MenuMobile {
  constructor(breakpointStop) {
    this.trigger = document.getElementById('menu-mobile-trigger')
    this.menuMobile = document.getElementById('menu-mobile')
    this.menuMobileLinks = Array.from(this.menuMobile.getElementsByTagName('a'))
    this.breakpointStop = breakpointStop
    this.isVisibleStatus = false
    this.isRunStatus = false
    this.isVisible()
    this.isRun()
    this.events()
  }

  // Events
  events() {
    this.trigger.addEventListener('click', () => this.toggleMenu())

    window.addEventListener('resize', debounce(() => {
      this.isRun()

      if (!this.isRunStatus && this.isVisibleStatus) {
        this.closeMenuMobile()
      }
    }, 300))

    this.menuMobileLinks.forEach(item => item.addEventListener('click', () => {
      this.closeMenuMobile()
    }))
  }

  // Methods
  toggleMenu() {
    if (this.isVisibleStatus && this.isRunStatus) {
      this.closeMenuMobile()
    } else {
      this.openMenuMobile()
    }
  }

  openMenuMobile() {
    this.menuMobile.classList.add('menu-mobile__container--is-visible')
    this.trigger.classList.add('menu-burger--menu-is-visible')
    document.body.style.overflow = 'hidden'
    this.isVisibleStatus = true
  }

  closeMenuMobile() {
    this.menuMobile.classList.remove('menu-mobile__container--is-visible')
    this.trigger.classList.remove('menu-burger--menu-is-visible')
    document.body.style.overflow = ''
    this.isVisibleStatus = false
  }

  isVisible() {
    let testTrigger = this.trigger.classList.contains('menu-burger--menu-is-visible')
    let testMenu = this.menuMobile.classList.contains('menu-mobile__container--is-visible')

    if (testMenu && testTrigger) {
      this.isVisibleStatus = true
    } else {
      this.isVisibleStatus = false
    }
  }

  isRun() {
    if (window.innerWidth > this.breakpointStop) {
      this.isRunStatus = false
    } else {
      this.isRunStatus = true
    }
  }
}

export default MenuMobile