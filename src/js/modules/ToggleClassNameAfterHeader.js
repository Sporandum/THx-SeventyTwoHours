import { debounce, throttle } from 'lodash'

class ToggleClassNameAfterHeader {
  constructor(idOfElement, classNameToToggle, addOrRemove = 'add') {
    this.el = document.getElementById(idOfElement)
    this.classNameToToggle = classNameToToggle
    this.addOrRemove = addOrRemove
    this.headerEl = document.getElementById('site-header')
    this.headerHeight = this.getHeaderHeight()
    this.isInHeader = window.scrollY > this.headerHeight ? true : false
    // console.log(this)

    if (this.el && this.headerEl) {
      this.events();
    }
  }

  events() {
    window.addEventListener('resize', debounce(() => {
      this.headerHeight = this.getHeaderHeight()
    }, 300))

    window.addEventListener('scroll', throttle(() => this.toggleMenuBurgerColor(), 200))

  }

  getHeaderHeight() {
    if (this.headerEl) {
      return this.headerEl.getBoundingClientRect().height
    }
    return null
  }

  toggleMenuBurgerColor() {
    if (!this.isInHeader) {
      if (window.scrollY < this.headerHeight) {
        this.addOrRemove === 'add' ? this.removeClass() : this.addClass()
        this.isInHeader = true
      }
    }
    if (window.scrollY > this.headerHeight && this.isInHeader) {
      this.addOrRemove === 'add' ? this.addClass() : this.removeClass()
      this.isInHeader = false
    }
  }
  
  addClass() {
    this.el.classList.add(this.classNameToToggle)
  }
  
  removeClass() {
    this.el.classList.remove(this.classNameToToggle)
  }
}

export default ToggleClassNameAfterHeader