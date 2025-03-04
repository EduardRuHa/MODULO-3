document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const commentText = document.getElementById('comment').value;
    if (commentText.trim() === '') {
      alert('Por favor, escribe un comentario.');
      return;
    }
  
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
  
    const commentTextNode = document.createElement('p');
    commentTextNode.classList.add('comment-text');
    commentTextNode.textContent = commentText;
    
    const commentTimeNode = document.createElement('p');
    commentTimeNode.classList.add('comment-time');
    const now = new Date();
    commentTimeNode.textContent = `Publicado el ${now.toLocaleDateString()} a las ${now.toLocaleTimeString()}`;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
      commentContainer.remove();
    });
  
    commentContainer.appendChild(commentTextNode);
    commentContainer.appendChild(commentTimeNode);
    commentContainer.appendChild(deleteButton);
  
    document.getElementById('comments-list').appendChild(commentContainer);
  
    document.getElementById('comment').value = ''; // Limpiar el campo de texto
  });
  