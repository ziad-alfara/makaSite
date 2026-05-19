/* ===== NAVBAR JAVASCRIPT ===== */
/* وظائف شريط التنقل */

// بداية وحدة شريط التنقل
// Function لإضافة وإزالة فئة 'scrolled' من الـ navbar عند التمرير

const navbar = document.getElementById('navbar');
const langToggle = document.getElementById('langToggle');

// ===== SCROLL EVENT LISTENER =====
// تتبع تمرير الصفحة وتغيير مظهر الـ navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // ===== SCROLL TO TOP BUTTON =====
  // إظهار زر الرجوع للأعلى عند تمرير أكثر من 400px
  const scrollTopBtn = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// ===== LANGUAGE TOGGLE =====
// تغيير اللغة بين العربية والإنجليزية
if (langToggle) {
  langToggle.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  
  // تحديث اتجاه الصفحة
  const htmlRoot = document.documentElement;
  htmlRoot.lang = currentLang;
  htmlRoot.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث نص الزر
  langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  
  // تطبيق الترجمات
  applyTranslations(currentLang);
}

// ===== APPLY TRANSLATIONS =====
// Function لتطبيق جميع الترجمات على الصفحة
function applyTranslations(lang) {
  const t = translations[lang];
  
  // ===== HERO SECTION =====
  document.getElementById('badgeText').textContent = t.badgeText;
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('heroApplyBtn').textContent = t.heroApplyBtn;
  document.getElementById('heroWhatsBtn').textContent = t.heroWhatsBtn;

  // ===== SERVICES SECTION =====
  document.getElementById('svcTag').textContent = t.svcTag;
  const svcTitle = document.getElementById('svcTitle');
  svcTitle.textContent = t.svcTitle;
  if (svcTitle.nextElementSibling) {
    svcTitle.nextElementSibling.textContent = t.svcTitleSpan;
  }
  document.getElementById('svcSubtitle').textContent = t.svcSubtitle;
  
  // Services cards
  const svcCards = document.querySelectorAll('.service-card');
  const svcData = [
    [t.svc1Title, t.svc1Desc],
    [t.svc2Title, t.svc2Desc],
    [t.svc3Title, t.svc3Desc],
    [t.svc4Title, t.svc4Desc],
    [t.svc5Title, t.svc5Desc],
    [t.svc6Title, t.svc6Desc],
  ];
  svcCards.forEach((card, i) => {
    if (svcData[i]) {
      card.querySelector('h3').textContent = svcData[i][0];
      card.querySelector('p').textContent = svcData[i][1];
    }
  });

  // ===== STATS SECTION =====
  const statLabelsSection = document.querySelectorAll('.stat-label');
  const statKeys = ['statLabel1', 'statLabel2', 'statLabel3', 'statLabel4'];
  statLabelsSection.forEach((el, i) => {
    if (statKeys[i]) el.textContent = t[statKeys[i]];
  });

  // ===== JOBS SECTION =====
  document.getElementById('jobsTag').textContent = t.jobsTag;
  const jobsTitle = document.getElementById('jobsTitle');
  jobsTitle.textContent = t.jobsTitle;
  document.getElementById('jobsTitleSpan').textContent = t.jobsTitleSpan;
  document.getElementById('jobsSubtitle').textContent = t.jobsSubtitle;
  document.querySelectorAll('.btn-apply').forEach(b => b.textContent = t.applyBtn);

  // ===== GALLERY =====
  document.getElementById('galTag').textContent = t.galTag;
  const galTitle = document.getElementById('galTitle');
  galTitle.textContent = t.galTitle;
  document.getElementById('galTitleSpan').textContent = t.galTitleSpan;
  document.getElementById('galSubtitle').textContent = t.galSubtitle;

  // ===== TESTIMONIALS =====
  document.getElementById('testTag').textContent = t.testTag;
  const testTitle = document.getElementById('testTitle');
  testTitle.textContent = t.testTitle;
  document.getElementById('testTitleSpan').textContent = t.testTitleSpan;

  // ===== CTA SECTION =====
  const ctaSection = document.getElementById('contact');
  ctaSection.querySelector('h2').textContent = t.ctaTitle;
  ctaSection.querySelector('p').textContent = t.ctaDesc;
  const ctaBtns = ctaSection.querySelectorAll('a');
  if (ctaBtns[0]) ctaBtns[0].textContent = t.ctaWhatsapp;
  if (ctaBtns[1]) ctaBtns[1].textContent = t.ctaEmail;

  // ===== FOOTER =====
  document.querySelector('.footer-brand p').textContent = t.footerDesc;
  const footerCols = document.querySelectorAll('.footer-col h4');
  if (footerCols[0]) footerCols[0].textContent = t.footerLinks;
  if (footerCols[1]) footerCols[1].textContent = t.footerPartners;
  if (footerCols[2]) footerCols[2].textContent = t.footerContact;
  document.querySelector('.footer-bottom p').textContent = t.footerRights;
  document.querySelector('.footer-license').textContent = t.footerLicense;
  
  // Update hours
  document.querySelectorAll('.footer-contact-item').forEach(item => {
    if (item.querySelector('.icon')?.textContent === '🕐') {
      item.querySelector('span:last-child').textContent = t.footerHours;
    }
  });

  // ===== FORM / MODAL LABELS =====
  document.getElementById('modalTitle').textContent = t.modalTitle;
  document.getElementById('labelName').textContent = t.labelName;
  document.getElementById('labelPhone').textContent = t.labelPhone;
  document.getElementById('labelEmail').textContent = t.labelEmail;
  document.getElementById('labelJob').textContent = t.labelJob;
  document.getElementById('labelExp').textContent = t.labelExp;
  document.getElementById('labelNote').textContent = t.labelNote;
  document.getElementById('submitBtn').textContent = t.submitBtn;
  document.getElementById('errName').textContent = t.errName;
  document.getElementById('errPhone').textContent = t.errPhone;
  document.getElementById('errEmail').textContent = t.errEmail;
  document.getElementById('fieldNote').placeholder = t.notePlaceholder;
  
  const expSel = document.getElementById('fieldExp');
  const expKeys = ['expOpt0', 'expOpt1', 'expOpt2', 'expOpt3', 'expOpt4'];
  expSel.querySelectorAll('option').forEach((opt, i) => {
    if (expKeys[i]) opt.textContent = t[expKeys[i]];
  });

  // ===== POPUP =====
  document.getElementById('popupTitle').textContent = t.popupTitle;
  document.getElementById('popupMsg').textContent = t.popupMsg;
  document.querySelector('.popup-close').textContent = t.popupBtn;
}

// Apply initial translations
applyTranslations(currentLang);
