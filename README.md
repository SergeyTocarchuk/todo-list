static openNav() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

static initProjectButtons() {
  const openNavButton = document.getElementById('button-open-nav')

  openNavButton.addEventListener('click', UI.openNav)
}