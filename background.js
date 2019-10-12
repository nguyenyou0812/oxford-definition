const createProperties = {
  id:"OXDE",
  title: "Definition of '%s'",
  contexts: ['selection']
}

chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create(createProperties)
})

chrome.contextMenus.onClicked.addListener(function(info){
  const selectionText = info.selectionText.toLowerCase()
  const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${selectionText}`
  chrome.windows.create({ 
    url,
    type: 'popup',
    height: 500,
    width: 800
  })
})