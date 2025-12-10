AOS.init(), lucide.createIcons();

const menuBtn = document.getElementById("menu-btn"),
    mobileMenu = document.getElementById("mobile-menu"),
    layananToggle = document.getElementById("layanan-toggle"),
    layananSubmenu = document.getElementById("layanan-submenu");
let menuOpen = !1;
menuBtn.addEventListener("click", () => {
    (menuOpen = !menuOpen),
        mobileMenu.classList.toggle("hidden"),
        (menuBtn.innerHTML = menuOpen
            ? '<i data-lucide="x" class="w-6 h-6"></i>'
            : '<i data-lucide="menu" class="w-6 h-6"></i>'),
        lucide.createIcons();
}),

// FORM WHATSAPP
function sendWA(event) {
    event.preventDefault();

    const nama = document.getElementById("wa_nama").value;
    const pesan = document.getElementById("wa_pesan").value;
    const nomor = "6285600763166";
    const url = `https://wa.me/${nomor}?text=Halo,%20saya%20${nama}.%0A${pesan}`;
    window.open(url, "_blank");
}
