import {
  debounce
} from 'lodash'

class MenuDesktop {
  constructor(breakpointStart) {
    this.leftEL = document.querySelectorAll('.menu-desktop--left')
    this.rightEL = document.querySelectorAll('.menu-desktop--right')
    this.topEL = document.querySelectorAll('.menu-desktop--top')
    this.socialEL = document.querySelectorAll('.menu-desktop--social')

    this.breakpointStart = breakpointStart
    this.lastScrollY = window.scrollY
    this.isRunStatus = false

    this.isRun()
    this.init()
  }
  
  // events
  events() {
    requestAnimationFrame(() => this.updateAll())

    window.addEventListener('resize', debounce(() => {
      // console.log('MenuDesktop Resize run')
      this.isRun()
      this.updateAll()
    }, 300))
  }

  // methods
  isRun() {
    if (window.innerWidth > this.breakpointStart) {
      this.isRunStatus = true
    } else {
      this.isRunStatus = false
    }
  }

  init() {
    let header = document.getElementById('site-header')
    if (header.getAttribute('data-menu') === 'scroll') {
      this.events()
      console.log('Menu launch')
    } else {
      console.log('Menu standBy')
    }
  }

  updateSide(elements) {
    let scrollY = window.scrollY
    // window.innerHeight - (window.innerHeight / 5) = style.top = calc(100vh - 20%)
    let top = window.innerHeight - (window.innerHeight / 5)
    let offsetTop = scrollY + top + 'px'

    elements.forEach(item => item.style.top = offsetTop)
  }

  updateTop(elements) {
    elements.forEach(item => item.style.top = window.scrollY + 'px')
  }

  updateAll() {
    if (this.isRunStatus && this.lastScrollY != window.scrollY) {
      this.updateSide(this.leftEL)
      this.updateSide(this.rightEL)
      this.updateTop(this.topEL)
      this.updateTop(this.socialEL)
    }
    this.lastScrollY = window.scrollY
    requestAnimationFrame(() => this.updateAll())
  }
}

export default MenuDesktop