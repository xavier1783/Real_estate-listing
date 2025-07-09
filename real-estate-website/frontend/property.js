const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`http://localhost:5000/api/properties/${id}`)
  .then(res => res.json())
  .then(p => {
    const container = document.getElementById('propertyDetails');
    container.innerHTML = `
      <h2>${p.title}</h2>
      ${p.imageUrl ? `<img src="${p.imageUrl}" style="max-width:500px; max-height:350px;">` : ''}
      <p><strong>Location:</strong> ${p.location}</p>
      <p><strong>Description:</strong> ${p.description}</p>
      <p><strong>Price:</strong> ₹${p.price}</p>
    `;
  })
  .catch(err => {
    document.getElementById('propertyDetails').innerHTML = '<p>Property not found.</p>';
    console.error(err);
  });
