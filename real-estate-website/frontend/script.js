document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');

            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Property data
            const properties = [
                {
                    id: 1,
                    title: "Luxury Penthouse in Downtown",
                    price: "$2,500,000",
                    address: "123 Skyscraper Ave, New York, NY",
                    type: "Apartment",
                    bedrooms: 3,
                    bathrooms: 3.5,
                    sqft: 3200,
                    yearBuilt: 2020,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "This stunning penthouse offers breathtaking city views from every room. Features include floor-to-ceiling windows, a gourmet chef's kitchen with premium appliances, a spacious living room with fireplace, and a private rooftop terrace with outdoor kitchen and jacuzzi. Building amenities include 24/7 concierge, fitness center, spa, and residents' lounge.",
                    tag: "Featured"
                },
                {
                    id: 2,
                    title: "Modern Beachfront Villa",
                    price: "$3,800,000",
                    address: "456 Oceanview Dr, Miami, FL",
                    type: "Villa",
                    bedrooms: 4,
                    bathrooms: 4.5,
                    sqft: 4500,
                    yearBuilt: 2018,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "Contemporary oceanfront villa with direct beach access. Features include an open-concept living space with retractable glass walls, infinity pool overlooking the ocean, chef's kitchen with waterfall island, smart home technology, and master suite with private balcony and spa-like bathroom. Includes a guest house and expansive deck for entertaining.",
                    tag: "Luxury"
                },
                {
                    id: 3,
                    title: "Historic Townhouse",
                    price: "$1,950,000",
                    address: "789 Brownstone Ln, Brooklyn, NY",
                    type: "House",
                    bedrooms: 5,
                    bathrooms: 3,
                    sqft: 3800,
                    yearBuilt: 1920,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "Beautifully restored brownstone with period details and modern upgrades. Features include original hardwood floors, crown molding, updated kitchen with stainless appliances, finished basement with wine cellar, private backyard garden, and rooftop deck with skyline views. Close to parks, restaurants and subway.",
                    tag: "Classic"
                },
                {
                    id: 4,
                    title: "Lakefront Luxury Estate",
                    price: "$5,250,000",
                    address: "101 Lakeshore Dr, Chicago, IL",
                    type: "House",
                    bedrooms: 6,
                    bathrooms: 5.5,
                    sqft: 7800,
                    yearBuilt: 2015,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "Magnificent custom-built estate on pristine lakefront property. Features include a grand foyer with sweeping staircase, chef's kitchen with butler's pantry, home theater, wine cellar, indoor pool and spa, boat dock, and professionally landscaped grounds with outdoor kitchen and fire pit.",
                    tag: "Waterfront"
                },
                {
                    id: 5,
                    title: "Downtown Loft",
                    price: "$850,000",
                    address: "248 Industrial Way, Los Angeles, CA",
                    type: "Condo",
                    bedrooms: 2,
                    bathrooms: 2,
                    sqft: 1800,
                    yearBuilt: 2010,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "Stylish converted warehouse with soaring ceilings and exposed brick. Open floor plan with gourmet kitchen featuring quartz countertops and stainless appliances. Large windows provide abundant natural light. Building has rooftop pool and lounge area with panoramic city views.",
                    tag: "Urban"
                },
                {
                    id: 6,
                    title: "Suburban Family Home",
                    price: "$750,000",
                    address: "625 Maple St, Boston, MA",
                    type: "House",
                    bedrooms: 4,
                    bathrooms: 2.5,
                    sqft: 2800,
                    yearBuilt: 2008,
                    images: [
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600",
                        "https://placehold.co/800x600"
                    ],
                    description: "Spacious family home in top-rated school district. Features include modern kitchen with island, formal dining room, finished basement with home office, fenced backyard with deck and playset, 2-car garage. Quiet street close to parks and amenities.",
                    tag: "Family"
                }
            ];

            // Render properties
            const propertiesContainer = document.getElementById('properties-container');
            
            function renderProperties(filteredProperties = properties) {
                propertiesContainer.innerHTML = '';
                
                filteredProperties.forEach(property => {
                    const propertyCard = document.createElement('div');
                    propertyCard.className = 'property-card';
                    propertyCard.innerHTML = `
                        <div class="property-image">
                            <img src="${property.images[0]}" alt="${property.title} - ${property.address}">
                            <span class="property-tag">${property.tag}</span>
                        </div>
                        <div class="property-info">
                            <div class="property-price">${property.price}</div>
                            <div class="property-address">${property.address}</div>
                            <div class="property-features">
                                <div class="property-feature">
                                    <i class="fas fa-bed"></i>
                                    <span>${property.bedrooms} bds</span>
                                </div>
                                <div class="property-feature">
                                    <i class="fas fa-bath"></i>
                                    <span>${property.bathrooms} ba</span>
                                </div>
                                <div class="property-feature">
                                    <i class="fas fa-ruler-combined"></i>
                                    <span>${property.sqft} sqft</span>
                                </div>
                            </div>
                            <a href="#" class="view-btn" data-id="${property.id}">View Details</a>
                        </div>
                    `;
                    propertiesContainer.appendChild(propertyCard);
                });

                // Add event listeners to view buttons
                document.querySelectorAll('.view-btn').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        const propertyId = parseInt(this.getAttribute('data-id'));
                        showPropertyModal(propertyId);
                    });
                });
            }

            // Filter properties
            const searchBtn = document.getElementById('search-btn');
            searchBtn.addEventListener('click', function() {
                const loadingSpinner = document.getElementById('loading-spinner');
                loadingSpinner.style.display = 'flex';
                
                setTimeout(() => {
                    const propertyType = document.getElementById('property-type').value;
                    const location = document.getElementById('location').value;
                    const bedrooms = document.getElementById('bedrooms').value;
                    const priceRange = document.getElementById('price-range').value;
                    
                    let filtered = properties.filter(property => {
                        let matches = true;
                        
                        if (propertyType !== 'any' && property.type.toLowerCase() !== propertyType) {
                            matches = false;
                        }
                        
                        if (location !== 'any') {
                            const propertyCity = property.address.split(',')[1].trim().toLowerCase();
                            if (!propertyCity.includes(location.toLowerCase().replace('-', ' '))) {
                                matches = false;
                            }
                        }
                        
                        if (bedrooms !== 'any' && property.bedrooms < parseInt(bedrooms)) {
                            matches = false;
                        }
                        
                        if (priceRange !== 'any') {
                            const price = parseInt(property.price.replace(/\D/g, ''));
                            if (priceRange === '0-500' && price > 500000) {
                                matches = false;
                            } else if (priceRange === '500-1000' && (price <= 500000 || price > 1000000)) {
                                matches = false;
                            } else if (priceRange === '1000-1500' && (price <= 1000000 || price > 1500000)) {
                                matches = false;
                            } else if (priceRange === '1500+' && price <= 1500000) {
                                matches = false;
                            }
                        }
                        
                        return matches;
                    });
                    
                    renderProperties(filtered);
                    loadingSpinner.style.display = 'none';
                }, 1000);
            });

            // Property modal
            const propertyModal = document.getElementById('property-modal');
            const closeModal = document.querySelector('.close-modal');

            function showPropertyModal(id) {
                const property = properties.find(p => p.id === id);
                if (!property) return;

                // Set modal content
                document.getElementById('modal-property-title').textContent = property.title;
                document.getElementById('modal-price').textContent = property.price;
                document.getElementById('modal-address').textContent = property.address;
                document.getElementById('modal-description').textContent = property.description;
                
                // Set main image
                const mainImage = document.getElementById('modal-main-image');
                mainImage.src = property.images[0];
                mainImage.alt = `${property.title} - Main Image`;
                
                // Set thumbnails
                const thumbnailContainer = document.getElementById('thumbnail-container');
                thumbnailContainer.innerHTML = '';
                
                property.images.forEach((image, index) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = 'thumbnail';
                    thumbnail.innerHTML = `<img src="${image}" alt="${property.title} - Image ${index + 1}">`;
                    thumbnail.addEventListener('click', () => {
                        mainImage.src = image;
                        mainImage.alt = `${property.title} - Image ${index + 1}`;
                    });
                    thumbnailContainer.appendChild(thumbnail);
                });
                
                // Set details
                const detailsGrid = document.getElementById('property-details-grid');
                detailsGrid.innerHTML = `
                    <div class="detail-item">
                        <i class="fas fa-home"></i>
                        <span>${property.type}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} Bedrooms</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Bathrooms</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.sqft} Square Feet</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Built in ${property.yearBuilt}</span>
                    </div>
                `;
                
                // Show modal
                propertyModal.style.display = 'block';
                
                // Contact agent button
                document.getElementById('contact-agent-btn').onclick = function() {
                    propertyModal.style.display = 'none';
                    showContactForm();
                };
            }

            closeModal.addEventListener('click', function() {
                propertyModal.style.display = 'none';
            });

            window.addEventListener('click', function(e) {
                if (e.target === propertyModal) {
                    propertyModal.style.display = 'none';
                }
            });

            // Contact form
            const contactForm = document.getElementById('contact-form');
            const closeContactForm = document.getElementById('close-contact-form');
            const contactAgentForm = document.getElementById('contact-agent-form');

            function showContactForm() {
                contactForm.style.display = 'flex';
            }

            closeContactForm.addEventListener('click', function() {
                contactForm.style.display = 'none';
            });

            window.addEventListener('click', function(e) {
                if (e.target === contactForm) {
                    contactForm.style.display = 'none';
                }
            });

            contactAgentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const loadingSpinner = document.getElementById('loading-spinner');
                loadingSpinner.style.display = 'flex';
                
                setTimeout(() => {
                    loadingSpinner.style.display = 'none';
                    alert('Thank you for your message! Our agent will contact you shortly.');
                    contactForm.style.display = 'none';
                    contactAgentForm.reset();
                }, 1500);
            });

            // Newsletter form
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input');
                if (emailInput.value.trim() === '') return;
                
                this.querySelector('button').textContent = 'Subscribing...';
                
                setTimeout(() => {
                    emailInput.value = '';
                    this.querySelector('button').textContent = 'Subscribe';
                    alert('Thank you for subscribing to our newsletter!');
                }, 1000);
            });

            // Initialize with all properties
            renderProperties();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    navLinks.classList.remove('active');
                }
            });
        });