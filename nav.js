@import 'nav.css';

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="Downloads/Noah Grocery Logo(4).png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="login.html"><img src="profile.png" alt=""></a>
                <a href="cart.html"><img src="cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="products.html" class="link">Products</a></li>
            <li class="link-item"><a href="contact.html" class="link">Contact Us</a></li>
            
        </ul>
    `;
}

createNav();
