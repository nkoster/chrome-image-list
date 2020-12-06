typeof elX !== 'undefined' && elX.remove()
elX = document.createElement('div')
buttonX = document.createElement('button')
buttonX.textContent = 'Exit Image List'
buttonX.cssText = 'padding:40px'
imgs = [...new Set(Array.from(document.images))]
    .map(img => img.src)
    .filter(src => src ? true : false )
    .sort()
elX.style.cssText = 'position:absolute;text-align:center;top:10px;left:10px;right:10px;background:#abc;z-index:10000;border:4px solid black;border-radius:10px'
elX.innerHTML = '<ul>'
imgs.forEach(img => elX.innerHTML +=
    `<li style="list-style-type:none"><img style="border:2px solid red" src="${img}"><a href="${img}">${img}</a></li>`
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
