let allProperties = [];

function fetchProperties() {
  fetch('http://localhost:5000/api/properties')
    .then(res => res.json())
    .then(data => {
      allProperties = data;
      displayProperties(data);
    })
    .catch(err => console.error("Error:", err));
}

function displayProperties(properties) {
  const container = document.getElementById('properties');
  container.innerHTML = '';
  properties.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3><a href="property.html?id=${p._id}">${p.title}</a></h3>
      ${p.imageUrl ? `<img src="${p.imageUrl}" alt="Property Image" style="max-width:300px; max-height:200px;"><br>` : ''}
      <p>${p.description}</p>
      <p>₹${p.price}</p>
      <p>${p.location}</p>
      <button onclick="editProperty('${p._id}')">Edit</button>
      <button onclick="deleteProperty('${p._id}')">Delete</button>
      <hr>
    `;
    container.appendChild(div);
  });
}


function applyFilters() {
  const locationInput = document.getElementById('locationFilter').value.toLowerCase();
  const maxPrice = parseFloat(document.getElementById('priceFilter').value);

  const filtered = allProperties.filter(p => {
    const matchLocation = locationInput ? p.location.toLowerCase().includes(locationInput) : true;
    const matchPrice = maxPrice ? p.price <= maxPrice : true;
    return matchLocation && matchPrice;
  });

  displayProperties(filtered);
}

function resetFilters() {
  document.getElementById('locationFilter').value = '';
  document.getElementById('priceFilter').value = '';
  displayProperties(allProperties);
}

function deleteProperty(id) {
  // eslint-disable-next-line no-restricted-globals
  if (confirm("Are you sure you want to delete this property?")) {
    fetch(`http://localhost:5000/api/properties/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("Property deleted successfully");
      fetchProperties();
    });
  }
}

function editProperty(id) {
  window.location.href = `edit.html?id=${id}`;
}

// Initial fetch
fetchProperties();
