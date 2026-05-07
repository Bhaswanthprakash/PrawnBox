document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    const scrollBar = `
      <style>
        @keyframes scrollText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      </style>

      <div class="bg-orange-500 text-black text-sm font-bold overflow-hidden">
        <div class="whitespace-nowrap px-4 py-2" style="animation: scrollText 22s linear infinite;">
          Premium Prawn Supply from Andhra Pradesh • Freshness You Can Trust • Supplying Across Hyderabad • No Middleman • FSSAI Certified • Quality Assured Seafood • Procured and Marketed by M/s. Tejase Traders pvt ltd 
        </div>
      </div>
    `;

    const navbar = `
      <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <div class="bg-white/90 border border-orange-100 rounded-full shadow-xl px-6 py-4 flex items-center justify-between gap-6">

            <a href="index.html" class="flex items-center gap-3">
              <img src="image/logo.jpg" alt="PrawnBox Logo" class="h-16 w-auto rounded-2xl">
            </a>

            <button id="menuBtn" class="md:hidden text-3xl text-orange-500">☰</button>

            <nav class="hidden md:flex items-center gap-2 text-lg font-semibold text-black">
              <div class="relative group">

  <button class="px-5 py-3 rounded-full hover:bg-orange-50 hover:text-orange-500 transition font-semibold">
    Prawns ▾
  </button>

  <div class="absolute left-0 top-full hidden group-hover:block bg-white shadow-2xl rounded-2xl p-4 w-72 border border-orange-100 z-50">

    <!-- ✅ FIXED: vertical layout -->
    <div class="flex flex-col gap-2">

      <a href="vannamei-prawns.html" class="block px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition">
        Vannamei Prawn
      </a>

      <a href="tiger-prawns.html" class="block px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition">
        Tiger Prawn
      </a>

      <a href="scampi-prawns.html" class="block px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition">
        Scampi Prawn
      </a>

    </div>

  </div>
</div>

              <a href="about.html" class="px-5 py-3 rounded-full hover:bg-orange-50 hover:text-orange-500 transition">About</a>
              <a href="our-stores.html" class="px-5 py-3 rounded-full hover:bg-orange-50 hover:text-orange-500 transition">Our Stores</a>
            </nav>

            <div class="hidden md:flex items-center gap-4">
              <a href="contact.html" class="px-7 py-4 border border-orange-500 text-orange-500 rounded-full font-bold hover:bg-orange-500 hover:text-white transition">
                Contact Us
              </a>

              <a href="quote.html" class="px-8 py-4 bg-orange-500 text-black rounded-full font-bold shadow-lg hover:bg-orange-400 transition">
                Get Quote →
              </a>
            </div>

          </div>
        </div>

        <div id="mobileMenu" class="hidden md:hidden bg-white border-t border-orange-100 px-6 pb-6">

         <div class="w-full">

  <button id="prawnsMobileBtn"
    class="w-full text-left py-3 font-semibold flex justify-between items-center">
    Prawns
    <span id="prawnsArrow">▾</span>
  </button>

  <div id="prawnsMenu" class="hidden pl-4 pb-2">

    <!-- ✅ FIXED mobile layout -->
    <a href="vannamei-prawns.html" class="block py-2">Vannamei Prawn</a>
    <a href="tiger-prawns.html" class="block py-2">Tiger Prawn</a>
    <a href="scampi-prawns.html" class="block py-2">Scampi Prawn</a>

  </div>
</div>

          <a class="block py-3 font-semibold" href="about.html">About</a>
          <a class="block py-3 font-semibold" href="our-stores.html">Our Stores</a>
          <a class="block py-3 font-semibold" href="contact.html">Contact Us</a>
          <a class="block py-3 font-semibold text-orange-500" href="quote.html">Get Quote</a>
        </div>
      </header>
    `;

    header.innerHTML = scrollBar + navbar;

    document.getElementById("menuBtn")?.addEventListener("click", () => {
      document.getElementById("mobileMenu")?.classList.toggle("hidden");
    });

    document
      .getElementById("prawnsMobileBtn")
      ?.addEventListener("click", () => {
        const menu = document.getElementById("prawnsMenu");
        const arrow = document.getElementById("prawnsArrow");

        menu?.classList.toggle("hidden");
        arrow.textContent = menu.classList.contains("hidden") ? "▾" : "▴";
      });
  }

  if (footer) {
    footer.innerHTML = `
    <footer class="bg-[#111111] text-white mt-20 border-t border-orange-500/30">

      <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">

        <div>
          <h4 class="text-3xl font-bold text-orange-400 mb-5">Stay Updated</h4>
          <p class="text-lg leading-8 mb-6 text-gray-200">
            Subscribe to get updates on prawn availability, fresh stock, and offers.
          </p>
          <form class="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" class="w-full px-5 py-4 rounded-2xl text-black outline-none">
            <button class="bg-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-orange-400 transition">Subscribe</button>
          </form>
        </div>

         <div class="md:ml-20">
           <h4 class="text-3xl font-bold text-orange-400 mb-5">📍 Our Location</h4>
           <p class="text-lg leading-9 text-gray-200">
           Flat No 101, Gracious Residency,<br>
           Royal Colony, Beside BPCL Bunk,<br>
           Narsingi, Rangareddy,<br>
           Telangana - 500089
          </p>
         </div>

        <div class="flex flex-col items-center">
          <h4 class="text-3xl font-bold text-orange-400 mb-5">Follow Us</h4>

          <div class="flex gap-5 mb-6">
            <a href="#" class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
              <img src="image/instagram.png" class="w-8 h-8">
            </a>
            <a href="#" class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
              <img src="image/facebook.png" class="w-8 h-8">
            </a>
            <a href="#" class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
              <img src="image/youtube.png" class="w-8 h-8">
            </a>
          </div>

          <a href="https://play.google.com/store" target="_blank">
            <img src="image/playstore.png" class="h-14 w-auto scale-125">
          </a>
        </div>

      </div>

      <div class="w-full border-t border-orange-500/30 py-5 text-gray-300 text-lg text-center">
        © 2026 PrawnBox. All rights reserved.
      </div>

    </footer>
  `;
  }
});

function scrollProcess(direction) {
  const slider = document.getElementById("processSlider");
  const scrollAmount = 320;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    slides[0].classList.remove("opacity-0");

    setInterval(() => {
      slides[currentSlide].classList.add("opacity-0");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.remove("opacity-0");
    }, 3200);
  }
});
