import {
  debounce
} from 'lodash'

class MenuDesktop {
  constructor(breakpointStart) {
    this.leftEL = document.querySelectorAll('.menu-desktop--left')
    this.rightEL = document.querySelectorAll('.menu-desktop--right')
    this.topEL = document.querySelectorAll('.menu-desktop--top')

    this.breakpointStart = breakpointStart
    this.isRunStatus = false

    this.init()
    this.isRun()
  }

  // events
  events() {
    window.addEventListener('scroll', () => {
      // console.log('MenuDesktop Scroll run')
      this.updateAll()
    })

    window.addEventListener('resize', debounce(() => {
      // console.log('MenuDesktop Resize run')
      this.isRun()
      this.updateAll()
    }, 300))
  }

  // methods
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
    if (this.isRunStatus) {
      this.updateSide(this.leftEL)
      this.updateSide(this.rightEL)
      this.updateTop(this.topEL)
    }
  }

  isRun() {
    if (window.innerWidth > this.breakpointStart) {
      this.isRunStatus = true
    } else {
      this.isRunStatus = false
    }
  }
}

export default MenuDesktop