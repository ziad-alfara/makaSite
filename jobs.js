/* ===== JOBS SECTION JAVASCRIPT ===== */
/* وظائف قسم الوظائف المتاحة */

// بداية وحدة الوظائف
// معالجة الأحداث والتفاعلات مع بطاقات الوظائف

document.addEventListener('DOMContentLoaded', function() {
  const jobCards = document.querySelectorAll('.job-card');

  // إضافة تأثيرات hover للبطاقات
  jobCards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// نهاية وحدة الوظائف
