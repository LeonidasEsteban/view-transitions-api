const word = 'No Te Rindas'.split(' ')
const rate = 1000

let index = 0

setInterval(() => {
  if (container.hasChildNodes()) {
    const $oldElement = container.firstChild
    $oldElement.classList.add('fade-out');
    $oldElement.addEventListener('animationend', function () {
      this.remove()
    })
  }
  const $newElement = document.createElement('h1')
  $newElement.textContent = word[index++]
  $newElement.classList.add('fade-in')
  $newElement.addEventListener('animationend', function () {
    this.classList.remove('fade-in')
  })
  container.prepend($newElement)

  if (index >= word.length)
    index = 0
}, rate)



