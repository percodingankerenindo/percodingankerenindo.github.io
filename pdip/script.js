var foto=['delapan','lima','tujuh','tiga','satu','empat','dua']

for (let i = 0; i < foto.length; i++) {
  console.log('img/'+foto[i]+'.jpg')
  document.getElementById('pdip').innerHTML+='<div class="item"><img src="img/'+foto[i]+'.jpg" alt="Los Angeles" style="width:100%;"></div>'
  
}

var x = document.getElementById("audio")
x.play()