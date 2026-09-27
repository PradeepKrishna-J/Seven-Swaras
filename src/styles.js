export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.ssma-nav, .ssma-nav * ,
main, main *,
.ssma-footer, .ssma-footer *,
.ssma-modal-overlay, .ssma-modal-overlay *,
.ssma-whatsapp-float, .ssma-whatsapp-float *,
.ssma-banner, .ssma-banner * {
  font-family: 'DM Sans', sans-serif;
}

h1, h2, h3, h4, .ssma-logo-title, .ssma-hero-title {
  font-family: 'Playfair Display', serif;
}

section, .ssma-nav, .ssma-footer { box-sizing: border-box; }

/* ---------- shared ---------- */

.ssma-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 22px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.15s ease;
}
.ssma-btn:hover { opacity: 0.9; }
.ssma-btn:active { transform: scale(0.98); }
.ssma-btn-indigo { background: #312E81; color: #fff; }
.ssma-btn-amber { background: #F59E0B; color: #fff; }
.ssma-btn-whatsapp { background: #25D366; color: #fff; }
.ssma-btn-full { width: 100%; }

.ssma-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.ssma-section-tint { background: #FCFBF6; }
.ssma-section-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}
.ssma-section-head h2 {
  color: #312E81;
  font-size: 34px;
  margin: 0 0 12px;
}
.ssma-section-head p {
  color: #6b6a75;
  font-size: 16px;
  margin: 0;
}
.ssma-pill {
  display: inline-block;
  background: #F3F1FB;
  color: #312E81;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
}
.ssma-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.ssma-badge-amber { background: #FDE9C8; color: #312E81; }
.ssma-badge-indigo { background: #312E81; color: #fff; }

/* ---------- navbar ---------- */

.ssma-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.ssma-nav--scrolled {
  background: #FFFFFF;
  border-bottom: 1px solid #E0E7FF;
}
.ssma-nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 76px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.ssma-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
}
.ssma-logo-img { width: 42px; height: 42px; object-fit: contain; flex: 0 0 auto; }
.ssma-logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.ssma-logo-title { font-size: 20px; font-weight: 700; color: #312E81; }
.ssma-logo-sub { font-size: 11px; color: #6f6ba0; }
.ssma-nav-links {
  display: flex;
  gap: 26px;
}
.ssma-nav-links > a {
  color: #33314a;
  font-size: 14.5px;
  font-weight: 500;
}
.ssma-nav-links > a:hover { color: #312E81; }
.ssma-nav-cta { white-space: nowrap; }

.ssma-nav-item { position: relative; display: flex; align-items: center; }
.ssma-nav-item > a {
  color: #33314a;
  font-size: 14.5px;
  font-weight: 500;
  padding: 8px 0;
}
.ssma-nav-item > a:hover { color: #312E81; }
.ssma-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 20px 44px -14px rgba(30, 27, 75, 0.3);
  border: 1px solid rgba(49, 46, 129, 0.08);
  padding: 18px;
  display: flex;
  gap: 28px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 1100;
}
.ssma-nav-item:hover .ssma-dropdown,
.ssma-nav-item:focus-within .ssma-dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.ssma-dropdown-group { display: flex; flex-direction: column; gap: 2px; min-width: 170px; }
.ssma-dropdown-heading {
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8582a1;
  font-weight: 700;
  margin: 0 0 6px;
  padding: 0 10px;
}
.ssma-dropdown-group a {
  padding: 7px 10px;
  border-radius: 8px;
  color: #33314a;
  font-size: 13.5px;
  font-weight: 500;
  white-space: nowrap;
}
.ssma-dropdown-group a:hover { background: #F3F1FB; color: #312E81; }
.ssma-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}
.ssma-hamburger span {
  display: block;
  height: 2px;
  background: #312E81;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.ssma-hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.ssma-hamburger.is-open span:nth-child(2) { opacity: 0; }
.ssma-hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.ssma-mobile-overlay {
  position: fixed;
  inset: 0;
  top: 76px;
  background: #FAFAF8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
}
.ssma-mobile-overlay.is-open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}
.ssma-mobile-overlay a {
  color: #312E81;
  font-size: 22px;
  font-weight: 600;
}
.ssma-mobile-overlay { overflow-y: auto; justify-content: flex-start; padding: 100px 24px 32px; }
.ssma-mobile-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.ssma-mobile-group { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 4px; }
.ssma-mobile-heading {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #9a98a8;
  font-weight: 700;
  margin: 10px 0 0;
}
.ssma-mobile-sublink { font-size: 15px !important; font-weight: 500 !important; color: #6f6ba0 !important; }

/* ---------- banner ---------- */

.ssma-banner {
  position: fixed;
  top: 76px;
  left: 0; right: 0;
  z-index: 999;
  height: 60px;
  background: #F59E0B;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;
  animation: ssmaBannerSlide 0.2s ease;
}
@keyframes ssmaBannerSlide {
  from { transform: translateY(-60px); }
  to { transform: translateY(0); }
}
.ssma-banner p { display: flex; align-items: center; gap: 8px; font-size: 15px; margin: 0; font-weight: 500; }
.ssma-banner-actions { display: flex; align-items: center; gap: 14px; }
.ssma-banner-cta {
  position: relative;
  overflow: hidden;
  background: #312E81;
  border: 1px solid #312E81;
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
}
.ssma-banner-cta::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  transform: translateX(-220%);
  animation: ssmaShine 10s ease-in-out infinite;
}
@keyframes ssmaShine {
  0% { transform: translateX(-220%); }
  14% { transform: translateX(220%); }
  100% { transform: translateX(220%); }
}
.ssma-banner-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
}

/* ---------- hero ---------- */

.ssma-hero {
  position: relative;
  padding-top: 76px;
  background: #FAFAF8;
  overflow: hidden;
}
.ssma-hero-staff {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 38px,
    #F0EFF0 38px,
    #F0EFF0 39px,
    transparent 39px,
    transparent 46px,
    #F0EFF0 46px,
    #F0EFF0 47px,
    transparent 47px,
    transparent 54px,
    #F0EFF0 54px,
    #F0EFF0 55px,
    transparent 55px,
    transparent 62px,
    #F0EFF0 62px,
    #F0EFF0 63px,
    transparent 63px,
    transparent 70px,
    #F0EFF0 70px,
    #F0EFF0 71px,
    transparent 71px,
    transparent 160px
  );
  opacity: 0.4;
  pointer-events: none;
}
.ssma-hero-inner {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 90px 24px 48px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
.ssma-hero-copy { flex: 0 0 44%; }
.ssma-eyebrow {
  font-size: 13.5px;
  font-weight: 600;
  color: #F59E0B;
  letter-spacing: 0.3px;
  margin: 0 0 14px;
}
.ssma-hero-title {
  font-size: 56px;
  line-height: 1.12;
  color: #1E1B4B;
  margin: 0 0 20px;
  font-weight: 700;
}
.ssma-hero-sub {
  font-size: 18px;
  color: #625f70;
  max-width: 520px;
  margin: 0 0 32px;
  line-height: 1.6;
}
.ssma-hero-ctas { display: flex; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.ssma-trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13.5px;
  color: #4b4959;
}
.ssma-trust-row span { display: inline-flex; align-items: center; gap: 6px; }
.ssma-hero-art {
  flex: 0 0 54%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ssma-hero-art img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 24px 32px rgba(30, 27, 75, 0.18));
}

@media (max-width: 768px) {
  .ssma-hero-inner { flex-direction: column; align-items: center; padding: 48px 20px 64px; text-align: center; }
  .ssma-hero-copy { flex: none; }
  .ssma-hero-title { font-size: 36px; }
  .ssma-hero-sub { margin-left: auto; margin-right: auto; }
  .ssma-hero-ctas { justify-content: center; }
  .ssma-trust-row { justify-content: center; }
  .ssma-hero-art { display: none; }
  .ssma-nav-links { display: none; }
  .ssma-nav-cta { display: none; }
  .ssma-hamburger { display: flex; }
}

/* ---------- instrument list rows ---------- */

.ssma-teacher-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 32px;
}
@media (max-width: 900px) {
  .ssma-teacher-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .ssma-teacher-grid { grid-template-columns: 1fr; }
}
.ssma-teacher-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 14px;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.ssma-teacher-row:hover {
  background: #F3F1FB;
  transform: translateX(4px);
  box-shadow: 0 8px 20px -10px rgba(49, 46, 129, 0.25);
}
.ssma-teacher-avatar {
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.ssma-teacher-row:hover .ssma-teacher-avatar {
  border-color: #F59E0B;
  transform: scale(1.06);
}
.ssma-teacher-avatar img { width: 100%; height: 100%; object-fit: cover; }
.ssma-teacher-avatar-icon { display: flex; align-items: center; justify-content: center; background: #F3F1FB; }
.ssma-teacher-info { display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 0; }
.ssma-teacher-info strong { font-size: 17px; color: #1E1B4B; transition: color 0.2s ease; }
.ssma-teacher-row:hover .ssma-teacher-info strong { color: #312E81; }
.ssma-teacher-info span { font-size: 12.5px; color: #8582a1; }
.ssma-teacher-arrow {
  flex: 0 0 auto;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.ssma-teacher-row:hover .ssma-teacher-arrow { opacity: 1; transform: translateX(0); }

/* ---------- FAQ ---------- */

.ssma-faq-list {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ssma-faq-item {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.1);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}
.ssma-faq-item.is-open { border-color: #312E81; }
.ssma-faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: none;
  border: none;
  text-align: left;
  padding: 18px 20px;
  font-size: 15px;
  font-weight: 600;
  color: #1E1B4B;
  cursor: pointer;
}
.ssma-faq-toggle {
  flex: 0 0 auto;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #F3F1FB;
  color: #312E81;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  line-height: 1;
}
.ssma-faq-item.is-open .ssma-faq-toggle { background: #312E81; color: #fff; }
.ssma-faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.ssma-faq-item.is-open .ssma-faq-answer { grid-template-rows: 1fr; }
.ssma-faq-answer-inner { overflow: hidden; }
.ssma-faq-answer-inner p {
  margin: 0;
  padding: 0 20px 18px;
  font-size: 14px;
  color: #706e7c;
  line-height: 1.6;
}

/* ---------- class schedule ---------- */

.ssma-schedule-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .ssma-schedule-grid { grid-template-columns: 1fr; }
}
.ssma-schedule-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 4px solid transparent;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 24px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-schedule-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 20px 36px -8px rgba(49, 46, 129, 0.2);
}
.ssma-card-indigo-top { border-top-color: #312E81; }
.ssma-card-amber-top { border-top-color: #F59E0B; }
.ssma-card-gradient-top {
  border-top-color: transparent;
}
.ssma-card-gradient-top::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px; right: -1px;
  height: 4px;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(90deg, #312E81, #F59E0B);
}
.ssma-schedule-card h3 { font-size: 22px; color: #1E1B4B; margin: 14px 0 10px; }
.ssma-schedule-time { font-weight: 600; color: #312E81; font-size: 14.5px; margin: 0 0 4px; }
.ssma-schedule-levels { font-size: 13px; color: #8582a1; margin: 0 0 14px; }
.ssma-schedule-desc { font-size: 14px; color: #625f70; line-height: 1.6; margin: 0 0 18px; }
.ssma-feature-list { list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.ssma-feature-list li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #33314a; }
.ssma-price-row {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin: auto 0 18px;
  padding-top: 16px;
  border-top: 1px solid #E0E7FF;
}
.ssma-price-currency { color: #312E81; font-weight: 700; font-size: 19px; font-family: 'Playfair Display', serif; }
.ssma-price-amount { color: #312E81; font-weight: 700; font-size: 28px; font-family: 'Playfair Display', serif; }
.ssma-price-period { color: #8582a1; font-size: 13px; margin-left: 2px; }
.ssma-price-blurred { filter: blur(6px); user-select: none; pointer-events: none; }
.ssma-card-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
.ssma-card-ctas .ssma-btn { flex: 1 1 130px; font-size: 13.5px; padding: 11px 12px; white-space: nowrap; }
.ssma-btn-outline { background: transparent; border: 1px solid #312E81; color: #312E81; }

/* ---------- why choose ---------- */

.ssma-why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
@media (max-width: 768px) {
  .ssma-why-grid { grid-template-columns: repeat(2, 1fr); }
}
.ssma-why-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 26px 20px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 16px 28px -6px rgba(49, 46, 129, 0.16);
}
.ssma-why-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #312E81, #6D28D9);
}
.ssma-why-card h3 { font-size: 16.5px; color: #1E1B4B; margin: 0 0 6px; }
.ssma-why-card p { font-size: 13px; color: #706e7c; margin: 0; }

.ssma-swara-bar {
  background: #312E81;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  color: #fff;
}
.ssma-swara-words {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-bottom: 10px;
}
.ssma-swara-words span {
  opacity: 0;
  color: #F59E0B;
  animation: ssmaSwaraIn 0.5s ease forwards;
}
@keyframes ssmaSwaraIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.ssma-swara-bar p { margin: 0; font-size: 15px; color: #E0E7FF; }

/* ---------- testimonials ---------- */

.ssma-testimonial-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .ssma-testimonial-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .ssma-testimonial-row { grid-template-columns: 1fr; }
}
.ssma-testimonial-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 14px;
  padding: 18px 18px 20px;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 6px 16px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ssma-testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 14px 24px -6px rgba(49, 46, 129, 0.16);
}
.ssma-stars { display: flex; gap: 2px; margin-bottom: 7px; }
.ssma-quote { font-style: italic; font-size: 12px; color: #33314a; line-height: 1.5; margin: 0 0 11px; }
.ssma-testimonial-divider { height: 1px; background: #E0E7FF; margin-bottom: 8px; }
.ssma-testimonial-name { font-weight: 600; font-size: 12.5px; color: #1E1B4B; margin: 0; }
.ssma-testimonial-meta { font-size: 11px; color: #8582a1; margin: 1px 0 0; }

/* ---------- gallery ---------- */

.ssma-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (min-width: 769px) {
  .ssma-gallery-grid { grid-template-columns: repeat(3, 1fr); }
}
.ssma-video-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 16px 28px -6px rgba(49, 46, 129, 0.16);
}
.ssma-video-frame {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.ssma-video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.ssma-video-info { padding: 12px 16px; }
.ssma-video-title { font-size: 14px; font-weight: 600; color: #1E1B4B; margin: 0 0 8px; }

/* ---------- find us ---------- */

.ssma-findus-grid {
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 28px;
  align-items: start;
}
@media (max-width: 768px) {
  .ssma-findus-grid { grid-template-columns: 1fr; }
}
.ssma-map-wrap { border-radius: 16px; overflow: hidden; border: 1px solid rgba(49, 46, 129, 0.08); box-shadow: 0 8px 24px -6px rgba(30, 27, 75, 0.08); }
.ssma-contact-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px -6px rgba(30, 27, 75, 0.08);
}
.ssma-contact-logo-img { height: 68px; width: auto; display: block; margin: 0 0 20px; }
.ssma-info-row {
  display: flex;
  gap: 14px;
  margin-bottom: 16px;
}
.ssma-info-row strong { display: block; font-size: 13.5px; color: #1E1B4B; margin-bottom: 2px; }
.ssma-info-row p { margin: 0; font-size: 13.5px; color: #706e7c; line-height: 1.5; }
.ssma-social-row { display: flex; gap: 12px; margin: 20px 0; }
.ssma-social-btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 4px rgba(30, 27, 75, 0.1), 0 8px 16px -4px rgba(30, 27, 75, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}
.ssma-social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.14), 0 12px 22px -4px rgba(30, 27, 75, 0.26);
  filter: brightness(1.08);
}
.ssma-social-instagram { background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); }
.ssma-social-youtube { background: #FF0000; }
.ssma-social-facebook { background: #1877F2; }
.ssma-social-whatsapp { background: #25D366; }

/* ---------- footer ---------- */

.ssma-footer {
  background: #1E1B4B;
  color: #E0E7FF;
  padding: 64px 24px 0;
}
.ssma-footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
}
@media (max-width: 768px) {
  .ssma-footer-grid { grid-template-columns: 1fr; }
}
.ssma-footer-logo-img { width: 38px; height: 38px; object-fit: contain; flex: 0 0 auto; }
.ssma-footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 14px;
}
.ssma-footer-tagline { color: #F59E0B; font-size: 14px; margin: 0 0 12px; }
.ssma-footer-para { font-size: 13.5px; line-height: 1.6; color: #c7c5e8; margin: 0 0 18px; }
.ssma-footer-social { display: flex; gap: 12px; }
.ssma-footer-social .ssma-social-btn { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; }
.ssma-footer-col h4 { color: #fff; font-size: 15px; margin: 0 0 16px; font-family: 'DM Sans', sans-serif; }
.ssma-footer-h4-spaced { margin-top: 20px !important; }
.ssma-footer-col a, .ssma-footer-col p {
  display: block;
  color: #c7c5e8;
  font-size: 13.5px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.ssma-footer-col a:hover { color: #F59E0B; }
.ssma-amber-link { color: #F59E0B !important; font-weight: 600; }
.ssma-amber-link-inline { color: #F59E0B; font-weight: 600; }
.ssma-footer-bottom {
  border-top: 1px solid #312E81;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: #9d9bc7;
}
.ssma-footer-bottom a { color: #9d9bc7; }

/* ---------- whatsapp float ---------- */

.ssma-whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  height: 56px;
  width: 56px;
  border-radius: 28px;
  background: #25D366;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  transition: width 0.2s ease, padding 0.2s ease;
  animation: ssmaWaBounce 8.8s ease-in-out infinite;
}
.ssma-whatsapp-float:hover {
  width: 200px;
  padding: 0 18px 0 0;
}
.ssma-whatsapp-icon {
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ssma-whatsapp-label {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s ease 0.05s;
}
.ssma-whatsapp-float:hover .ssma-whatsapp-label { opacity: 1; }
.ssma-whatsapp-tooltip {
  position: absolute;
  bottom: 66px;
  right: 0;
  background: #1E1B4B;
  color: #fff;
  font-size: 12.5px;
  padding: 6px 12px;
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}
.ssma-whatsapp-float:hover .ssma-whatsapp-tooltip { opacity: 1; }
@keyframes ssmaWaBounce {
  0% { transform: translateY(0); }
  2% { transform: translateY(-6px); }
  4% { transform: translateY(0); }
  6% { transform: translateY(-6px); }
  8% { transform: translateY(0); }
  100% { transform: translateY(0); }
}

/* ---------- demo modal ---------- */

.ssma-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.55);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.ssma-modal-card {
  background: #fff;
  border-radius: 24px;
  max-width: 480px;
  width: 92%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ssmaModalIn 0.35s ease-out;
}
.ssma-modal-image { display: none; }
.ssma-modal-content {
  padding: 32px 32px 28px;
  overflow-y: auto;
}
@media (min-width: 768px) {
  .ssma-modal-card {
    flex-direction: row;
    max-width: 860px;
    height: 640px;
    max-height: 88vh;
  }
  .ssma-modal-image {
    display: block;
    flex: 0 0 320px;
  }
  .ssma-modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ssma-modal-content { flex: 1; }
}
@keyframes ssmaModalIn {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.ssma-modal-accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  border-radius: 24px 24px 0 0;
  background: #F59E0B;
  z-index: 2;
}
.ssma-modal-close {
  position: absolute;
  top: 14px; right: 18px;
  font-size: 26px;
  color: #9a98a8;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  z-index: 3;
}
.ssma-modal-close:hover { color: #312E81; }
.ssma-modal-head { text-align: center; margin-bottom: 24px; }
.ssma-modal-logo-img { width: 40px; height: 40px; object-fit: contain; }
.ssma-modal-head h3 {
  color: #312E81;
  font-size: 24px;
  margin: 12px 0 8px;
}
.ssma-modal-head p {
  font-size: 14px;
  color: #706e7c;
  margin: 0 0 16px;
}
.ssma-trust-mini {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 12.5px;
  color: #33314a;
}
.ssma-trust-mini span { display: inline-flex; align-items: center; gap: 4px; }
.ssma-form { display: flex; flex-direction: column; gap: 16px; }
.ssma-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 600;
  color: #33314a;
}
.ssma-muted-label { color: #9a98a8; font-weight: 400; }
.ssma-form input, .ssma-form select {
  height: 44px;
  border: 1px solid #E0E7FF;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: #1E1B4B;
  outline: none;
  transition: border-color 0.15s ease;
}
.ssma-form input:focus, .ssma-form select:focus { border-color: #312E81; }
.ssma-form input.has-error, .ssma-form select.has-error { border-color: #e0574c; }
.ssma-error { color: #e0574c; font-size: 12px; font-weight: 500; }
.ssma-submit-btn { margin-top: 6px; font-size: 16px; font-family: 'Playfair Display', serif; }

.ssma-modal-success {
  text-align: center;
  padding: 24px 0 8px;
}
.ssma-modal-success h3 { color: #312E81; font-size: 24px; margin: 16px 0 8px; }
.ssma-modal-success p { color: #706e7c; font-size: 14px; margin: 0; }
.ssma-check-draw path {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: ssmaDraw 0.6s ease forwards 0.1s;
}
.ssma-check-draw circle {
  stroke-dasharray: 201;
  stroke-dashoffset: 201;
  animation: ssmaDraw 0.6s ease forwards;
}
@keyframes ssmaDraw {
  to { stroke-dashoffset: 0; }
}

/* ---------- page hero (every non-home page) ---------- */

.ssma-page-hero {
  background-size: cover;
  background-position: center;
  background-color: #1E1B4B;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
}
.ssma-page-hero-inner { max-width: 760px; }
.ssma-page-hero-title { font-size: 42px; color: #fff; margin: 0 0 16px; line-height: 1.15; }
.ssma-page-hero-subtitle { font-size: 16px; color: #E0E7FF; margin: 0 0 28px; line-height: 1.6; }
@media (max-width: 768px) {
  .ssma-page-hero { min-height: 300px; }
  .ssma-page-hero-title { font-size: 30px; }
}

/* ---------- breadcrumbs ---------- */

.ssma-breadcrumbs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 0;
}
.ssma-breadcrumbs ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  font-size: 13px;
}
.ssma-breadcrumbs li { display: flex; align-items: center; gap: 6px; }
.ssma-breadcrumbs a { color: #706e7c; }
.ssma-breadcrumbs a:hover { color: #312E81; }
.ssma-breadcrumbs span[aria-current] { color: #312E81; font-weight: 600; }
.ssma-breadcrumb-sep { color: #c7c5d6; }

/* ---------- reusable pill chip (used for "explore other instruments") ---------- */

.ssma-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #E0E7FF;
  border-radius: 24px;
  padding: 10px 18px;
  font-size: 13.5px;
  font-weight: 500;
  color: #33314a;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.ssma-chip:hover { border-color: #312E81; color: #312E81; background: #F3F1FB; transform: translateY(-2px); }

/* ---------- instrument detail page ---------- */

.ssi-hero {
  padding: 24px 24px 64px;
  background: #FAFAF8;
}
.ssi-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}
.ssi-hero-art img {
  width: 100%;
  border-radius: 24px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  box-shadow: 0 24px 48px -16px rgba(30, 27, 75, 0.28);
}
.ssi-eyebrow { font-size: 13.5px; font-weight: 600; color: #F59E0B; margin: 0 0 8px; letter-spacing: 0.3px; }
.ssi-hero-copy h1 { font-size: 42px; line-height: 1.15; color: #1E1B4B; margin: 0 0 12px; }
.ssi-accent { color: #312E81; }
.ssi-hero-tagline { font-size: 15px; font-weight: 600; color: #F59E0B; margin: 0 0 14px; }
.ssi-hero-desc { font-size: 16px; color: #625f70; line-height: 1.6; margin: 0 0 28px; max-width: 480px; }
.ssi-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
.ssi-cta-row-center { justify-content: center; }

@media (max-width: 860px) {
  .ssi-hero-inner { grid-template-columns: 1fr; text-align: center; }
  .ssi-hero-desc { margin-left: auto; margin-right: auto; }
  .ssi-cta-row { justify-content: center; }
  .ssi-hero-art { max-width: 340px; margin: 0 auto; }
}

.ssi-steps-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.ssi-steps-sub { color: #8582a1; font-size: 13.5px; margin: -4px 0 20px; }
.ssi-steps-copy h2 { font-size: 30px; color: #1E1B4B; margin: 0 0 4px; }
.ssi-steps-list { list-style: none; padding: 0; margin: 0 0 28px; position: relative; }
.ssi-steps-list li { display: flex; gap: 16px; padding-bottom: 24px; position: relative; }
.ssi-steps-list li:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 32px;
  bottom: 0;
  width: 2px;
  background: #E0E7FF;
}
.ssi-step-num {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #312E81;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.ssi-steps-list p { margin: 4px 0 0; font-size: 14.5px; color: #625f70; line-height: 1.6; }
.ssi-steps-art img { width: 100%; border-radius: 20px; object-fit: cover; aspect-ratio: 6/5; }

@media (max-width: 860px) {
  .ssi-steps-grid { grid-template-columns: 1fr; }
  .ssi-steps-art { order: -1; max-width: 400px; margin: 0 auto; }
}

.ssi-advantage-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 48px;
  align-items: center;
}
.ssi-advantage-media { max-width: 420px; width: 100%; margin: 0 auto; }
.ssi-advantage-media img { width: 100%; border-radius: 20px; object-fit: cover; aspect-ratio: 4/5; box-shadow: 0 20px 40px -16px rgba(30, 27, 75, 0.25); }
.ssi-advantage-list { display: flex; flex-direction: column; gap: 24px; }
.ssi-advantage-item { display: flex; gap: 16px; }
.ssi-advantage-icon {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #312E81, #6D28D9);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.ssi-advantage-item h4 { margin: 0 0 6px; font-size: 16.5px; color: #1E1B4B; }
.ssi-advantage-item p { margin: 0; font-size: 14px; color: #706e7c; line-height: 1.6; }

@media (max-width: 860px) {
  .ssi-advantage-grid { grid-template-columns: 1fr; }
}

.ssi-cta-banner {
  background: linear-gradient(90deg, #312E81, #4338CA);
  padding: 48px 24px;
  text-align: center;
  color: #fff;
}
.ssi-cta-banner p { margin: 0 0 6px; font-size: 13.5px; letter-spacing: 0.4px; color: #E0E7FF; text-transform: uppercase; }
.ssi-cta-banner h3 { margin: 0 0 24px; font-size: 26px; max-width: 560px; margin-left: auto; margin-right: auto; }

.ssi-genre-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 720px;
  margin: 0 auto;
}
@media (max-width: 640px) {
  .ssi-genre-grid { grid-template-columns: repeat(2, 1fr); }
}
.ssi-genre-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #33314a;
}
.ssi-genre-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
}

.ssi-grade-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  align-items: center;
}
.ssi-grade-art img { width: 100%; border-radius: 20px; object-fit: cover; aspect-ratio: 1/1; }
.ssi-grade-copy h2 { font-size: 28px; color: #1E1B4B; margin: 0 0 4px; }
.ssi-grade-copy p { font-size: 14.5px; color: #625f70; line-height: 1.65; margin: 0 0 16px; }

@media (max-width: 860px) {
  .ssi-grade-grid { grid-template-columns: 1fr; }
  .ssi-grade-art { max-width: 340px; margin: 0 auto; }
}

.ssi-other-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

section[id] { scroll-margin-top: 90px; }

/* ---------- link-wrapped cards (resources, services, blog) ---------- */

a.ssma-why-card { display: block; }
.ssma-why-grid-3 { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) {
  .ssma-why-grid-3 { grid-template-columns: 1fr; }
}
.ssma-card-arrow { display: inline-flex; align-items: center; gap: 4px; color: #F59E0B; font-size: 13px; font-weight: 600; margin-top: 10px; }

/* ---------- blog ---------- */

.ssma-blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .ssma-blog-grid { grid-template-columns: 1fr; }
}
.ssma-blog-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: border-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-blog-card:hover {
  border-color: #312E81;
  transform: translateY(-6px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 20px 32px -8px rgba(49, 46, 129, 0.18);
}
.ssma-blog-tag { margin-bottom: 14px; align-self: flex-start; }
.ssma-blog-card h3 { font-size: 18px; color: #1E1B4B; margin: 0 0 10px; line-height: 1.3; }
.ssma-blog-card p { font-size: 13.5px; color: #706e7c; line-height: 1.6; margin: 0 0 18px; }
.ssma-blog-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
  color: #8582a1;
}
.ssma-blog-foot span:last-child { color: #F59E0B; font-weight: 600; }

/* ---------- long-form article ---------- */

.ssma-article { max-width: 760px; margin: 0 auto; }
.ssma-article-body p { font-size: 16px; line-height: 1.8; color: #3f3d4d; margin: 0 0 20px; }
.ssma-article-foot {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid #E0E7FF;
  text-align: center;
}
.ssma-related-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

/* ---------- simple numbered list (how it works, sample week) ---------- */

.ssma-simple-steps { list-style: none; padding: 0; margin: 0; max-width: 720px; margin: 0 auto; }
.ssma-simple-steps li { display: flex; gap: 18px; padding-bottom: 28px; position: relative; }
.ssma-simple-steps li:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 17px;
  top: 36px;
  bottom: 0;
  width: 2px;
  background: #E0E7FF;
}
.ssma-simple-steps .ssi-step-num { flex: 0 0 auto; }
.ssma-simple-steps h4 { margin: 4px 0 6px; font-size: 16.5px; color: #1E1B4B; }
.ssma-simple-steps p { margin: 0; font-size: 14.5px; color: #625f70; line-height: 1.6; }
`
