const url = 'http://localhost:3000/books'

const user = {"id":1, "username":"pouros"}

const ulList = document.querySelector('#list')
const showPanel = document.querySelector('#show-panel')
const likeBtn = document.createElement('button')
const ulLiksUsers = document.createElement('ul')

const image = document.createElement('img')
const title = document.createElement('h2')
const subtitle = document.createElement('h2')
const author = document.createElement('h2')
const description = document.createElement('p')

getBooks().then(data => {
  console.log(data)
  listOfBooks(data)
  handleLike()
})

function getBooks(){
  return fetch(url)
  .then(res => res.json())
}

function listOfBooks(books){
  books.forEach(book => {
    const li = document.createElement('li')
    li.textContent = book.title
    ulList.append(li)

    li.addEventListener('click', () => {
      showDetails(book)
    })
  })
}

function showDetails(book){
  showPanel.innerHTML = ""
  ulLiksUsers.innerHTML = ""


  image.src = book.img_url
  title.textContent = book.title
  subtitle.textContent = book.subtitle
  author.textContent = book.author
  description.textContent = book.description

  if (book.users) {    
    book.users.forEach(user => {
      const liLikeUsers = document.createElement('li')

      liLikeUsers.textContent = user.username
      ulLiksUsers.append(liLikeUsers)
    })
  }

  while(showPanel.firstChild) {
    console.log(showPanel.firstChild)
    showPanel.removeChild(showPanel.lastChild)
  }

  showPanel.append(image, title, subtitle, author, description, ulLiksUsers)
}

function handleLike(){
  likeBtn.id = 'like-btn'
  likeBtn.textContent = 'Like'
  likeBtn.addEventListener('click', () => {
    console.log(user)
  })

  showPanel.append(likeBtn)
}