const quoteList = ['hey', 'it works', 'we did it']


document.getElementById('generator-button').addEventListener('click', generator)

function generator(){
let random = quoteList[Math.floor(Math.random() * quoteList.length)]

document.getElementById('quote').innerHTML = random
}

generator()
