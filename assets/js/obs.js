var logo = document.getElementsByClassName('site-logo')[0]

var setColorTheme = function (theme) {
  // Set Theme and save it
  jtd.setTheme(theme)
  localStorage.setItem('theme', theme)

  if (theme == 'dark') {
    logo.style.filter = 'invert(100%)'
  } else {
    logo.style.filter = 'invert(0%)'
  }
}

// On button click
var switchColorTheme = function () {
  theme = localStorage.getItem('theme')
  if (theme == 'dark') {
    setColorTheme('light')
  } else {
    setColorTheme('dark')
  }
}

// On load of the site
var theme = localStorage.getItem('theme')
setColorTheme(theme == undefined ? 'light' : theme)

