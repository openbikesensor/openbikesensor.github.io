/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 * Modified version for local thumbnails from <img /> tags.
 */

function replaceWithIframe(div, videoId) {
  let iframe = document.createElement('iframe')
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.videoId + '?autoplay=1&rel=0')
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allowfullscreen', '1')
  iframe.setAttribute(
    'allow',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  )

  while (div.childNodes.length) {
    div.removeChild(div.childNodes[0])
  }
  div.appendChild(iframe)
}

function initYouTubeVideos() {
  let wrappers = document.getElementsByClassName('youtube-video-wrapper')
  for (let n = 0; n < wrappers.length; n++) {
    let wrapper = wrappers[n]
    let videoId = wrapper.dataset.videoId

    wrapper.onclick = function (e) {
      e.preventDefault()
      e.stopPropagation()
      replaceWithIframe(wrapper, videoId)
    }
  }
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos)

//////////////////////////////////////////////

function initSliders() {
  let wrappers = document.getElementsByClassName('slider')
  for (let n = 0; n < wrappers.length; n++) {
    let wrapper = wrappers[n]

    if (!wrapper.id) {
      wrapper.setAttribute('id', 'slider-' + n)
    }

    let slider = new IdealImageSlider.Slider({
      selector: '#' + wrapper.id,
      transitionDuration: 250,
      effect: 'fade',
      captions: true,
      bullets: true,
      height: '16:9',
    })
    if (slider._attributes) {
      slider.addBulletNav()
      slider.addCaptions()
    }
  }
}
document.addEventListener('DOMContentLoaded', initSliders)

//////////////////////////////////////////////

function initTocHide() {
  // Fix to hide TOC menu when clicking a link inside -- not easy with native HTML
  // without making an ugly DOM.

  const main = document.getElementById('mobile-menu-main')
  for (const item of Array.from(document.querySelectorAll('aside.toc a'))) {
    item.addEventListener('click', () => {
      main.checked = true
    })
  }
}
document.addEventListener('DOMContentLoaded', initTocHide)
