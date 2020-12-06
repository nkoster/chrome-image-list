function getCurrentTabUrl(callback) {
    let queryInfo = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(queryInfo, tabs => {
        let tab = tabs[0]
        let url = tab.url
        console.assert(typeof url === 'string', 'tab.url should be a string')
        callback(url)
    })
}

document.addEventListener('DOMContentLoaded', _ => {
    getCurrentTabUrl(async _ => {
        await chrome.tabs.executeScript({
            file: 'list.js'
        })
        window.close()
    })
})

