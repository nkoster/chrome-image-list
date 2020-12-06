typeof elX !== 'undefined' && elX.remove()
elX = document.createElement('div')
buttonX = document.createElement('button')
buttonX.textContent = 'Exit Image List'
imgs = [...new Set(Array.from(document.images))]
    .map(img => img.src)
    .filter(src => src ? true : false )
    .sort()
elX.style.cssText = 'position:absolute;top:0;left:0;right:0;background:#abc;z-index:10000;border:4px solid black;border-radius:10px'
elX.innerHTML = '<ul>'
imgs.forEach(img => elX.innerHTML +=
    `<li><img style="border:2px solid red" src="${img}"><a href="${img}">${img}</a></li>`
)
elX.innerHTML += '</ul>'
buttonX.addEventListener('click', evt => {
    evt.preventDefault()
    setTimeout(_ => {
        elX.remove()
    }, 10)
})
elX.append(buttonX)
document.body.append(elX)
