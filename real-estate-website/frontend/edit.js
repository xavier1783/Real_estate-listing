const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`http://localhost:5000/api/properties/${id}`)
  .then(res => res.json())
  .then(property => {
    document.getElementById('title').value = property.title;
    document.getElementById('description').value = property.description;
    document.getElementById('price').value = property.price;
    document.getElementById('location').value = property.location;
    document.getElementById('imageUrl').value = property.imageUrl;
  });

document.getElementById('editForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const updatedProperty = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    price: document.getElementById('price').value,
    location: document.getElementById('location').value,
    imageUrl: document.getElementById('imageUrl').value
  };

  fetch(`http://localhost:5000/api/properties/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedProperty)
  })
  .then(res => res.json())
  .then(() => {
    alert('Property updated successfully!');
    window.location.href = 'index.html';
  });
});
