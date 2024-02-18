buttonNOt = document.querySelector('.chose-not')
buttonYes = document.querySelector('.chose-yes')
heartImg = document.querySelector('.heart')

function deviates() {
  buttonNOt.style.position = 'absolute'
  buttonNOt.style.bottom = `${randomNumber()}%`
  buttonNOt.style.left = `${randomNumber()}%`
}

buttonYes.onclick = () => {
  heartImg.classList.remove('hide')
  setTimeout(() =>{
    window.open('https://youtu.be/izGwDsrQ1eQ?si=v0P8qxxhDAvnq4dA', '_blank')
  },2000)
  
}

function randomNumber() {
 return Math.round((Math.random() * 80) + 10)
}
