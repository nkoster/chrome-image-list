if (typeof elX !== 'undefined') elX?.remove()
elX = document.createElement('div')
buttonX = document.createElement('button')
buttonX.textContent = 'Exit Image List'

getBackgroundImagesX = () => {
    const getStyle = (x, styleProp) => {
        if (x.currentStyle) var y = x.currentStyle[styleProp]
        else if (window.getComputedStyle) var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp)
        return y
    }
    const elements = document.getElementsByTagName('*')
    let results = [], i = 0, bgIm
    for (;elements[i];i++) {
        bgIm = getStyle(elements[i], 'background-image');
        if (bgIm && bgIm !== 'none') {
            results.push(bgIm.match(/\((.*?)\)/)[1].replace(/"/g, ''))
        }
    }
    return results
}

imgsX = [...new Set(Array.from(document.images)
    .map(img => img.src)
    .filter(src => src ? true : false))]

backgroundsX = [...new Set(getBackgroundImagesX())]

imgsX = [...new Set([...imgsX, ...backgroundsX])]
    .filter(src => {
        if (src.substring(0, 4) === 'http') {
            // if (src.toLowerCase().includes('.jpeg')) return true
            // if (src.toLowerCase().includes('.jpg')) return true
            // if (src.toLowerCase().includes('.gif')) return true
            // if (src.toLowerCase().includes('.png')) return true
            // if (src.toLowerCase().includes('.apng')) return true
            // if (src.toLowerCase().includes('.webp')) return true
            // if (src.toLowerCase().includes('.apng')) return true
            // if (src.toLowerCase().includes('.svg')) return true
            // if (src.toLowerCase().includes('.bmp')) return true
            // if (src.toLowerCase().includes('.ico')) return true
            // if (src.toLowerCase().includes('.tiff')) return true
            // if (src.toLowerCase().includes('slack')) return true
            return true
        } else {
            if (src.toLowerCase().match(/^data/)) return true
            return false
        }
    })
    .sort()

elX.style.cssText = 'overflow:scroll;position:absolute;text-align:center;height:600px;padding:10px;top:20px;left:20px;right:20px;background:#ddd;z-index:10000;border:4px solid black;border-radius:10px'
if (imgsX.length) {
    elX.innerHTML += `<h3 style="color:black">Image List (${imgsX.length} found)</h3>`
    elX.innerHTML += '<ul>'
    imgsX.forEach((img, index) => elX.innerHTML +=
        `<li style="list-style-type:none;padding:10px"><img style="border:1px solid white;vertical-align:middle" src="${img}"> ${index + 1} <a style="padding-left:5px;" href="${img}">${img}</a></li>`
    )
    elX.innerHTML += '</ul>'
} else {
    elX.innerHTML += '<h3 style="color:black">No Images Found</h3>'
}
buttonX.addEventListener('click', evt => {
    evt.preventDefault()
    setTimeout(_ => {
        elX.remove()
    }, 10)
})
elX.append(buttonX)
document.body.append(elX)
