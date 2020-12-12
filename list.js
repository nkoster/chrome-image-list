typeof elX !== 'undefined' && elX.remove()
elX = document.createElement('div')
buttonX = document.createElement('button')
buttonX.textContent = 'Exit Image List'
imgs = [...new Set(Array.from(document.images)
        .map(img => img.src)
        .filter(src => src ? true : false )
        .sort()
    )]
elX.style.cssText = 'overflow:scroll;position:absolute;text-align:center;height:600px;padding:10px;top:20px;left:20px;right:20px;background:#cbc;z-index:10000;border:4px solid black;border-radius:10px'
if (imgs.length > 0) {
    elX.innerHTML += `<h3 style="color:black">Image List (${imgs.length} found)</h3>`
    elX.innerHTML += '<ul>'
    imgs.forEach((img, index) => elX.innerHTML +=
        `<li style="list-style-type:none;padding:10px"><img style="border:2px solid red;vertical-align:middle" src="${img}"> ${index + 1} <a style="padding-left:5px;" href="${img}">${img}</a></li>`
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
