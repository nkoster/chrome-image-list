function getCurrentTabUrl(callback) {
    let queryInfo = {
        active: true,
        currentWindow: true
    }
    try {
        chrome.tabs.query(queryInfo, tabs => {
            let tab = tabs[0]
            let url = tab.url
            console.assert(typeof url === 'string', 'tab.url should be a string')
            callback(url)
        })
    } catch(err) {
        console.error(err.message)
    }
}

document.addEventListener('DOMContentLoaded', _ => {
    getCurrentTabUrl(async _ => {
        try {
            await chrome.tabs.executeScript({
                file: 'list.js'
            })    
        } catch (err) {
            console.error(err.message)
        }
        window.close()
    })
})
