// ========================================
// RouterStore - JavaScript
// ========================================

// Product Data
const products = [
    {
        id: 1,
        name: "ASUS RT-AX86U",
        category: "WiFi 6 Gaming",
        description: "Router gaming premium dengan teknologi WiFi 6, kecepatan hingga 5700 Mbps, dan fitur prioritasi gaming.",
        price: "Rp 4.500.000",
        image: "images/router-1.jpg",
        features: ["WiFi 6 AX5700", "2.5G Port", "Gaming Priority", "AiProtection Pro"],
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "TP-Link Archer AX73",
        category: "WiFi 6 AX5400",
        description: "Router WiFi 6 performa tinggi dengan 6 antena untuk jangkauan maksimal dan kecepatan 5400 Mbps.",
        price: "Rp 1.800.000",
        image: "images/router-2.jpg",
        features: ["WiFi 6 AX5400", "6 Antena", "HomeShield", "USB 3.0"],
        badge: "Populer"
    },
    {
        id: 3,
        name: "Netgear Nighthawk RAX50",
        category: "WiFi 6 AX5400",
        description: "Router Nighthawk dengan desain futuristik, performa ekstrem untuk streaming 4K dan gaming.",
        price: "Rp 2.200.000",
        image: "images/router-3.jpg",
        features: ["WiFi 6 AX5400", "Dual Core 1.5GHz", "Dynamic QoS", "Nighthawk App"],
        badge: "Premium"
    },
    {
        id: 4,
        name: "Xiaomi AIoT Router AX3600",
        category: "WiFi 6 Mesh",
        description: "Router pintar dengan 7 antena dan dukungan AIoT untuk smart home, performa stabil harga terjangkau.",
        price: "Rp 1.200.000",
        image: "images/router-4.jpg",
        features: ["WiFi 6 AX3600", "7 Antena", "AIoT Support", "MU-MIMO"]
    },
    {
        id: 5,
        name: "Linksys MR7350",
        category: "WiFi 6 Mesh",
        description: "Router mesh kompak dengan teknologi Intelligent Mesh untuk jaringan seamless di seluruh rumah.",
        price: "Rp 1.500.000",
        image: "images/router-5.jpg",
        features: ["WiFi 6 AX1800", "Intelligent Mesh", "Easy Setup", "Parental Control"]
    },
    {
        id: 6,
        name: "ASUS RT-AX55",
        category: "WiFi 6 AX1800",
        description: "Router WiFi 6 entry-level dengan fitur lengkap, ideal untuk rumah dan kantor kecil.",
        price: "Rp 950.000",
        image: "images/router-6.jpg",
        features: ["WiFi 6 AX1800", "4 Antena", "AiProtection", "ASUS Router App"],
        badge: "Terlaris"
    },
    {
        id: 7,
        name: "TP-Link Deco X20",
        category: "Mesh WiFi 6",
        description: "Sistem mesh WiFi 6 dengan desain minimalis, cakupan hingga 560 m² untuk rumah besar.",
        price: "Rp 2.800.000",
        image: "images/router-7.jpg",
        features: ["WiFi 6 AX1800", "3 Pack", "Seamless Roaming", "Deco App"]
    },
    {
        id: 8,
        name: "Netgear Orbi RBK352",
        category: "Mesh WiFi 6",
        description: "Sistem mesh premium dengan satelit, performa tinggi untuk rumah bertingkat dan area luas.",
        price: "Rp 3.500.000",
        image: "images/router-8.jpg",
        features: ["WiFi 6 AX1800", "Router + Satelit", "Coverage 300m²", "Orbi App"]
    }
];

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Testimonial Slider
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dots .dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// Product Modal
// ========================================
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function openModal(productIndex) {
    const product = products[productIndex];
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-info">
            <p class="modal-category">${product.category}</p>
            <h3>${product.name}</h3>
            <p class="modal-desc">${product.description}</p>
            <div class="modal-features">
                <h4>Fitur Unggulan:</h4>
                <ul>
                    ${product.features.map(feature => `
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="modal-footer">
                <div>
                    <p class="modal-price-label">Harga</p>
                    <p class="modal-price">${product.price}</p>
                </div>
                <div class="modal-buttons">
                    <button class="btn-outline" onclick="closeModal()">Tutup</button>
                    <button class="btn-primary" onclick="addToCart(${product.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// Shopping Cart
// ========================================
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');

function addToCart(productId) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    
    // Show notification
    showNotification('Produk ditambahkan ke keranjang!');
    
    closeModal();
}

// Add to cart buttons
document.querySelectorAll('.product-actions .cart-btn').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(products[index].id);
    });
});

// ========================================
// Notification
// ========================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 24px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Show success message
    showNotification('Pesan berhasil dikirim!');
    
    // Reset form
    contactForm.reset();
});

// ========================================
// Newsletter Form
// ========================================
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input').value;
    
    if (email) {
        showNotification('Berhasil berlangganan newsletter!');
        newsletterForm.reset();
    }
});

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-header, .category-card, .product-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Parallax Effect for Hero
// ========================================
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (scrollY < heroHeight) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollY / heroHeight);
    }
});

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('RouterStore - Website loaded successfully!');
});
