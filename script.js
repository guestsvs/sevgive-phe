const evetBtn = document.getElementById("evetBtn");
const hayirBtn = document.getElementById("hayirBtn");
const eminBtn = document.getElementById("eminBtn");
const eminBtnContainer = document.getElementById("eminBtnContainer");
const siirContainer = document.getElementById("siirContainer");
const baslik = document.getElementById("baslik");
const sonrakiBtn = document.getElementById("sonrakiBtn");
const seniSeviyorumContainer = document.getElementById("seniSeviyorumContainer");
const geriBtn = document.getElementById("geriBtn");
const sesToggleBtn = document.getElementById("sesToggleBtn");
const muzik = document.getElementById("muzik");

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");
const audioControl = document.getElementById("audioControl");

muzik.volume = 0.3;

// Başlat
startBtn.addEventListener("click", () => {
  muzik.play();
  sesToggleBtn.textContent = "⏸️";

  startScreen.classList.add("hidden");
  content.classList.remove("hidden");
  audioControl.classList.remove("hidden");
});

// Ses toggle
sesToggleBtn.addEventListener("click", () => {
  if (muzik.paused) { muzik.play(); sesToggleBtn.textContent = "⏸️"; }
  else { muzik.pause(); sesToggleBtn.textContent = "▶️"; }
});

// EVET basınca
evetBtn.addEventListener("click", () => {
  baslik.textContent = "Emin misin?";
  eminBtnContainer.classList.remove("hidden");
  evetBtn.style.display = "none";
  hayirBtn.style.display = "none";
});

// EMİNİM basınca
eminBtn.addEventListener("click", () => {
  eminBtnContainer.style.display = "none";

  baslik.textContent = "Şüphe ve Sevgi";

  siirContainer.innerHTML = `
<p style="white-space: pre-line;">
Şüphe, sevginin üstüne düşen ilk gölgedir.
O gölge büyüdükçe, sözler yetmez olur.
İnsan kendini anlatmaktan yorulur;
Sevilmek isterken savunma yapar.
En acısı da şudur:
Aşk bitmeden önce güven ölür
ve insan, sevildiğini değil,
neden yetmediğini düşündüğü için ağlar.
</p>
  `;
  siirContainer.classList.remove("hidden");
  setTimeout(() => {
    siirContainer.style.opacity = 1;
    siirContainer.style.transform = "translateY(0)";
    sonrakiBtn.classList.remove("hidden");
  }, 50);
});

// Sonraki buton -> Seni Seviyorum 🤍
sonrakiBtn.addEventListener("click", () => {
  content.classList.add("hidden");
  seniSeviyorumContainer.classList.remove("hidden");
  setTimeout(() => { seniSeviyorumContainer.style.opacity = 1; }, 50);
});

// Geri buton -> Şiir sayfasına dön
geriBtn.addEventListener("click", () => {
  seniSeviyorumContainer.classList.add("hidden");
  content.classList.remove("hidden");
});
