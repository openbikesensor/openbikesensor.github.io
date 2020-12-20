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

/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 * Modified version for local thumbnails from <img /> tags.
 */

function labnolIframe(div, videoId) {
  var iframe = document.createElement('iframe')
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0')
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allowfullscreen', '1')
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
  while (div.childNodes.length) {
    div.removeChild(div.childNodes[0])
  }
  div.appendChild(iframe)
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName('youtube-video')
  for (var n = 0; n < playerElements.length; n++) {
    var img = playerElements[n]
    var videoId = img.dataset.videoId

    var div = document.createElement('div')
    div.setAttribute('data-id', videoId)
    div.className = 'youtube-video-wrapper'

    var playButton = document.createElement('div')
    playButton.setAttribute('class', 'play')
    div.appendChild(playButton)
    div.onclick = function () {
      labnolIframe(this, videoId)
    }

    img.parentNode.insertBefore(div, img)
    img.parentNode.removeChild(img)
    div.appendChild(img)
  }
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos)
