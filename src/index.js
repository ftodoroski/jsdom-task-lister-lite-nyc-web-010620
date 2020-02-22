document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementsByTagName('input')[1]
  submitButton.id = 'submit'

  document.addEventListener('click', event => {
    const input = document.querySelector('#new-task-description')
    const ul = document.querySelector('#list')
    event.preventDefault()
    
    switch (true) {
      case event.target.id === 'submit':
       const li = document.createElement('li')
        li.innerText = input.value
        ul.append(li)
    }
  })
});
