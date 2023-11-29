document.addEventListener("DOMContentLoaded", function() {
  getDataFromServer()
});

function getDataFromServer() {
  fetch('http://localhost:3000/books')
  .then(res => res.json())
  .then(data => { 
    createBooksList(data)
    createDetails()
    addDetails(data[0])
  })
}

function createBooksList(data) {
  console.log(data)
  const listElement = document.getElementById('list')
  data.forEach(element => {
    let liElement = document.createElement('li')
    liElement.textContent = element.title

    liElement.addEventListener('click', () => addDetails(element))

    listElement.appendChild(liElement)
  });
}

function createDetails() {
  const showPanel = document.getElementById('show-panel')

  const bookImage = document.createElement('img')
  const bookTitle = document.createElement('h3')
  const bookAuthor = document.createElement('h3')
  const bookSubtitle = document.createElement('h3')
  const bookDescription = document.createElement('h3')
  const ulElement = document.createElement('ul')

  const newButton = document.createElement('button');
  newButton.id ='button'
  newButton.textContent = 'Like!';

  bookImage.id = 'book_image'
  bookTitle.id = 'book_title'
  bookAuthor.id = 'book_author'
  bookSubtitle.is = 'book_subtitle'
  bookDescription.id = 'book_description'
  ulElement.id = 'book_ul'

  showPanel.appendChild(bookImage)
  showPanel.appendChild(bookTitle)
  showPanel.appendChild(bookAuthor)
  showPanel.appendChild(bookSubtitle)
  showPanel.appendChild(bookDescription)
  showPanel.appendChild(newButton)
}

function addDetails(item) {
  
  const bookImage = document.createElement('img')
  const bookTitle = document.createElement('h3')
  const bookAuthor = document.createElement('h3')
  const bookSubtitle = document.createElement('h3')
  const bookDescription = document.createElement('h3')
  const ulElement = document.createElement('ul')
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);

  bookImage.src = item.img_url

  showPanel.appendChild(bookImage)
}