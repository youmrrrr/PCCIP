const IMG_PATH = "R:/ПССИП/ИДЗ/image/";

const listingsData = [
    { id: 1, title: "HOUSE", location: "California St.", beds: "16", bathrooms: "2", rooms: "11", imageFile: "g.png" },
    { id: 2, title: "VILLA", location: "Welford Gardens", beds: "5", bathrooms: "3", rooms: "8", imageFile: "1.png" },
    { id: 3, title: "HOUSE", location: "The Grove", beds: "3", bathrooms: "2", rooms: "5", imageFile: "s.png" },
    { id: 4, title: "APARTMENT", location: "Wallace St.", beds: "2", bathrooms: "1", rooms: "4", imageFile: "а.png" },
    { id: 5, title: "APARTMENT", location: "Dwight Way", beds: "2", bathrooms: "1.5", rooms: "4", imageFile: "q.png" },
    { id: 6, title: "HOUSE", location: "North Avenue", beds: "4", bathrooms: "3", rooms: "7", imageFile: "j.png" }
];

const newsData = [
    { title: "Market watch: are condos still a good investment?", date: "August 12, 2021", category: "PRESS RELEASE", imageFile: "1f.png" },
    { title: "The history of great design", date: "August 12, 2021", category: "ANNOUNCEMENT", imageFile: "2f.png" },
    { title: "Designers who changed everything", date: "August 12, 2021", category: "COMPANY NEWS", imageFile: "3f.png" }
];

function getImageSrc(imageFile) {
    return IMG_PATH + imageFile;
}

function renderListings() {
    var container = document.getElementById('listingsGrid');
    if (!container) return;
    var html = '';
    for (var i = 0; i < listingsData.length; i++) {
        var item = listingsData[i];
        html += '<div class="card">' +
            '<div class="card-img">' +
                '<img src="' + getImageSrc(item.imageFile) + '" alt="' + item.title + ' - ' + item.location + '" title="' + item.title + ' in ' + item.location + '">' +
            '</div>' +
            '<div class="card-content">' +
                '<h3>' + item.title + '</h3>' +
                '<p class="card-location"><strong>' + item.location + '</strong></p>' +
                '<div class="card-details">' +
                    '<span class="detail-item">' + item.beds + ' beds</span>' +
                    '<span class="detail-separator">•</span>' +
                    '<span class="detail-item">' + item.bathrooms + ' bathrooms</span>' +
                    '<span class="detail-separator">•</span>' +
                    '<span class="detail-item">' + item.rooms + ' rooms</span>' +
                '</div>' +
                '<a href="#" class="card-link">View →</a>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = html;
}

function renderNews() {
    var container = document.getElementById('newsGrid');
    if (!container) return;
    var html = '';
    for (var i = 0; i < newsData.length; i++) {
        var item = newsData[i];
        html += '<div class="card">' +
            '<div class="card-img">' +
                '<img src="' + getImageSrc(item.imageFile) + '" alt="' + item.title + '" title="' + item.category + ': ' + item.title + '">' +
            '</div>' +
            '<div class="card-content">' +
                '<span style="font-size:0.8rem; color:#ff8a63;">' + item.category + '</span>' +
                '<h3>' + item.title + '</h3>' +
                '<p>' + item.date + '</p>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = html;
}

function initScrollButton() {
    var scrollBtn = document.getElementById('scrollDownBtn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var listingsSection = document.getElementById('listings');
            if (listingsSection) {
                listingsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function initBurger() {
    var burger = document.getElementById('burgerBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (!burger || !mobileNav) return;
    burger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        var spans = burger.querySelectorAll('span');
        if (mobileNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

function fixUnknownLinks() {
    var links = document.querySelectorAll('a[href="#"]');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.textContent.trim()) {
            var anchorText = link.textContent.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
            if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
                link.setAttribute('href', '#' + (anchorText || 'page'));
            }
        }
    }
}

function smoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        if (anchor.id === 'scrollDownBtn') continue;
        anchor.addEventListener('click', function(e) {
            var hash = this.getAttribute('href');
            if (hash === "#" || hash === "") return;
            var target = document.querySelector(hash);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                var mobileNav = document.getElementById('mobileNav');
                if (mobileNav) mobileNav.classList.remove('active');
                var spans = document.querySelectorAll('#burgerBtn span');
                if (spans.length) {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    }
}

function addImageFallback() {
    var images = document.querySelectorAll('.card-img img');
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.addEventListener('error', function() {
            console.log('Image failed to load:', this.src);
            this.style.display = 'none';
            var parent = this.parentElement;
            var fallback = document.createElement('div');
            fallback.style.cssText = 'width:100%; height:100%; background:#d9e2e8; display:flex; align-items:center; justify-content:center; font-size:3rem; color:#45525b;';
            fallback.textContent = '🏠';
            parent.appendChild(fallback);
        });
    }
}

var testimonialsData = [
    { stars: 5, text: "We found the perfect home! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.", author: "Nate Davidsson" },
    { stars: 5, text: "We're so happy with Estate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", author: "Laura Paulie" },
    { stars: 3, text: "Thanks to Estate team for amazing support! Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.", author: "Greg T" },
    { stars: 4, text: "Great service! The agents were very professional and helped us find our dream home quickly. Highly recommend Estate to anyone looking for a new home.", author: "Sarah Johnson" },
    { stars: 5, text: "Absolutely outstanding! From start to finish everything was perfect. The team was responsive, knowledgeable, and genuinely cared about our needs.", author: "Michael Brown" }
];

function renderStars(rating) {
    var html = '';
    for (var i = 1; i <= 5; i++) {
        html += i <= rating ? '<span class="star">★</span>' : '<span class="star empty">★</span>';
    }
    return html;
}

function initTestimonialsSlider() {
    var track = document.getElementById('testimonialsTrack');
    if (!track) return;
    
    var html = '';
    for (var i = 0; i < testimonialsData.length; i++) {
        var t = testimonialsData[i];
        html += '<div class="testimonial-card">' +
            '<div class="stars">' + renderStars(t.stars) + '</div>' +
            '<div class="testimonial-text">"' + t.text + '"</div>' +
            '<div class="testimonial-author">— ' + t.author + '</div>' +
        '</div>';
    }
    track.innerHTML = html;
    
    var currentPosition = 0;
    var cards = document.querySelectorAll('.testimonial-card');
    
    function getCardWidth() {
        if (cards.length === 0) return 304;
        return cards[0].offsetWidth + 24;
    }
    
    function getVisibleCards() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 2.5;
    }
    
    function getMaxPosition() {
        var visible = getVisibleCards();
        return Math.max(0, cards.length - visible);
    }
    
    function updateSlider() {
        var cardWidth = getCardWidth();
        var maxPos = getMaxPosition();
        if (currentPosition > maxPos) currentPosition = maxPos;
        if (currentPosition < 0) currentPosition = 0;
        track.style.transform = 'translateX(-' + (currentPosition * cardWidth) + 'px)';
    }
    
    function nextSlide() {
        var maxPos = getMaxPosition();
        if (currentPosition < maxPos) {
            currentPosition++;
            updateSlider();
        }
    }
    
    function prevSlide() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
        }
    }
    
    var prevBtn = document.getElementById('prevTestimonial');
    var nextBtn = document.getElementById('nextTestimonial');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    window.addEventListener('resize', function() {
        setTimeout(updateSlider, 100);
    });
    
    updateSlider();
}

function initFooterForm() {
    var form = document.getElementById('footerForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var emailInput = document.getElementById('footerEmail');
        var messageDiv = document.getElementById('footerMessage');
        var email = emailInput.value.trim();
        var emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (email === "") {
            messageDiv.innerHTML = '<span style="color:#ff8a63;">❌ Email cannot be empty.</span>';
        } else if (!emailPattern.test(email)) {
            messageDiv.innerHTML = '<span style="color:#ff8a63;">❌ Please enter a valid email address.</span>';
        } else {
            messageDiv.innerHTML = '<span style="color:#7fdb8a;">✅ Thanks for subscribing!</span>';
            emailInput.value = '';
            setTimeout(function() { messageDiv.innerHTML = ''; }, 3000);
        }
    });
}

function initContactButtons() {
    var listingsBtn = document.querySelector('.btn-contact:last-child');
    if (listingsBtn) {
        listingsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var listingsSection = document.getElementById('listings');
            if (listingsSection) {
                listingsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function fixAvatarImages() {
    var avatars = document.querySelectorAll('.member-avatar');
    for (var i = 0; i < avatars.length; i++) {
        var img = avatars[i];
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2345525b"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"%3E%3C/path%3E%3C/svg%3E';
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderListings();
    renderNews();
    initBurger();
    initScrollButton();
    fixUnknownLinks();
    smoothScroll();
    addImageFallback();
    initTestimonialsSlider();
    initFooterForm();
    initContactButtons();
    fixAvatarImages();
});