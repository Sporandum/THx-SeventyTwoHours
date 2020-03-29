class AnchorWithOffsetTop {
  constructor(anchor, offsetTop) {
    this.anchor = anchor
    this.offsetTop = offsetTop

    this.anchorTarget = document.querySelector(anchor)
    this.anchorTriggersEls = []
    this.getTriggersEls()

    if (this.anchorTarget) {
      this.events()
    }
    console.log(this)
  }


  // Events
  events() {
    this.anchorTriggersEls.forEach(el => el.addEventListener('click', e => {
      e.preventDefault()
      this.scrollTo()
    }))

    window.addEventListener('load', () => this.onLoad())
  }


  // Methods
  getTriggersEls() {
    let els = Array.from(document.getElementsByTagName('a'))
    els.map(el => {
      if (el.hash === this.anchor) {
        this.anchorTriggersEls.push(el)
      }
    })
  }

  getAnchorTargetY() {
    if (this.anchorTarget) {
      return this.anchorTarget.getBoundingClientRect().y + window.scrollY
    }
  }

  scrollTo() {
    window.scrollTo(0, this.getAnchorTargetY() - this.offsetTop)
  }

  onLoad() {
    if (window.location.hash === this.anchor) {
      this.scrollTo()
    }
  }
}

export default AnchorWithOffsetTop