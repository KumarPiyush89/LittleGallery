const $ = (s) => document.querySelector(s);

const GALLERY = [
  {
    title: "Aurora",
    img: {
      src: "https://i.pinimg.com/originals/0d/ee/c7/0deec720000b2066289b9f2a989b5194.gif",
      title: "Photo by The Lucky Neko for Unsplash"
    }
  },
  {
    title: "Miranda",
    img: {
      src: "https://i.pinimg.com/originals/c1/a1/6d/c1a16d8d25097c20dd8d46777b77e618.gif",
      title: "Photo by Karsten Winegeart for Unsplash"
    }
  },
  {
    title: "Phoebe",
    img: {
      src: "https://i.pinimg.com/originals/96/47/ad/9647ad80eff67094200a6c586e712860.gif",
      title: "Photo by Kabo for Unsplash"
    }
  },
  {
    title: "Samson",
    img: {
      src: "https://i.pinimg.com/originals/5e/e5/f5/5ee5f50989bbad6accc7505f811aba04.gif",
      title: "Photo by Giacomo Lucarini for Unsplash"
    }
  },
  {
    title: "Maffei",
    img: {
      src: "https://i.pinimg.com/originals/94/8d/4a/948d4ac2a7d012b5d2e5d1aa32db19aa.gif",
title: "Photo by Sergey Semin for Unsplash"
    }
  }
];

const initGallery = (function() {
  const createContent = function(content) {
    const $creaBlock = document.createElement('figure')
    $creaBlock.classList.add('creaBlock')
    $creaBlock.classList.add('creaBlockPrez')
    const $lineSeparator = document.createElement('div')
    $lineSeparator.classList.add('lineSeparator')
    $creaBlock.appendChild($lineSeparator)
    const $blocImg = document.createElement('div')
    $blocImg.classList.add('blocImg')
    const $img = document.createElement('img')
    $img.setAttribute('src', content.img.src)
    $img.setAttribute('alt', content.img.alt)
    $img.setAttribute('title', content.img.title)
    $blocImg.appendChild($img)
    $creaBlock.appendChild($blocImg)
    const $title = document.createElement('figcaption')
    $title.innerText = content.title;
    $creaBlock.appendChild($title)
    return $creaBlock
  }
  const $galleryBloc = document.createElement('div')
  const $galleryContent = document.createElement('div')
  $galleryContent.classList.add('creationsBlocUl')
  GALLERY.forEach((e, index) => $galleryContent.appendChild(createContent(e)))
  $galleryBloc.appendChild($galleryContent)
  $('main').appendChild($galleryBloc)
})()