const CreateIntern = document.querySelector('.CreateIntern')
CreateIntern.addEventListener('submit', (e) => {
  e.preventDefault()
  const id = CreateIntern.querySelector('.id').value
  const title = CreateIntern.querySelector('.title').value
  const field = CreateIntern.querySelector('.field').value
  const description = CreateIntern.querySelector('.description').value
  post('/createIntern', { id, title, field, description})
})


function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
