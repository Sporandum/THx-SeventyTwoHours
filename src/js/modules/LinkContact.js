class LinkContact {
  constructor() {
    this.triggers = Array.from(document.querySelectorAll('[data-target-id="#contact"]'))
    this.target = document.getElementById('contact')
    this.offsetTopFromScreen
    if (this.target) {
      this.getOffsetTopFromScreen()
    }
    this.events()
  }

  // events
  events() {
    window.addEventListener('load', () => {
      this.onLoad()
    })

    if (this.target) {
      this.triggers.forEach(el => el.addEventListener('click', e => this.onClick(e)))
    }

  }

  // Methods
  action() {
    this.getOffsetTopFromScreen()
    window.scrollTo(0, this.offsetTopFromScreen)
  }

  getOffsetTopFromScreen() {
    this.offsetTopFromScreen = this.target.getBoundingClientRect().y + window.scrollY - 90
  }

  onLoad() {
    if (window.location.hash === '#contact') {
      this.action()
    }
  }

  onClick(e) {
    e.preventDefault()
    this.action()
  }
}

export default LinkContact