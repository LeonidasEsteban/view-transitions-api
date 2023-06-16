const word = 'View Transitions API'.split(' ')
const rate = 1000

let index = 0

setInterval(() => {
  document.startViewTransition(() => {
    container.textContent = word[index++]
    if (index >= word.length) index = 0
  })
}, rate)