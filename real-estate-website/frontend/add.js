document.getElementById('propertyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const property = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    price: document.getElementById('price').value,
    location: document.getElementById('location').value,
    imageUrl: document.getElementById('imageUrl').value
  };

  fetch('http://localhost:5000/api/properties', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(property)
  })
  .then(res => res.json())
  .then(data => {
    alert('Property added successfully!');
    window.location.href = 'index.html';
  })
  .catch(err => {
    alert('Error adding property');
    console.error(err);
  });
});