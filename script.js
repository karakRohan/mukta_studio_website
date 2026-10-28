const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  })
);

const translations = {
  location: [
    '📍 Pathartoria, West Bengal — 721127',
    '📍 পাথরতোড়িয়া, পশ্চিমবঙ্গ — 721127'
  ],

  topcall: [
    'For bookings & enquiries: <a href="tel:8016252885">8016252885</a>',
    'বুকিং ও তথ্যের জন্য ফোন করুন: <a href="tel:8016252885">8016252885</a>'
  ],

  navhome: ['Home', 'হোম'],
  navservices: ['Services', 'আমাদের পরিষেবা'],
  navevents: ['Event Booking', 'অনুষ্ঠান বুকিং'],
  navgallery: ['Gallery', 'গ্যালারি'],
  navabout: ['About', 'আমাদের সম্পর্কে'],
  navcontact: ['Contact', 'যোগাযোগ'],
  call: ['☎ Call Us', '☎ কল করুন'],

  eyebrow: [
    '📸 YOUR MOMENTS, OUR FRAME',
    '📸 আপনার স্মৃতি, আমাদের ফ্রেমে'
  ],

  heroTitle: [
    'Every Moment Deserves<br><em>To Be Remembered.</em>',
    'প্রতিটি মুহূর্ত হোক<br><em>সারা জীবনের স্মৃতি।</em>'
  ],

  heroText: [
    "Welcome to Mukta Studio & Xerox — your local destination for photography, printing, school stationery and capturing life's special celebrations.",
    'মুক্তা স্টুডিও ও জেরক্সে আপনাকে স্বাগতম—ফটোগ্রাফি, প্রিন্টিং, স্কুলের সামগ্রী এবং জীবনের বিশেষ অনুষ্ঠানগুলোর জন্য আপনার কাছের ঠিকানা।'
  ],

  bookEvent: [
    '🎉 Book Event Photography',
    '🎉 অনুষ্ঠানের বুকিং'
  ],

  explore: [
    'Explore Services <span>→</span>',
    'সব পরিষেবা দেখুন <span>→</span>'
  ],

  trustTitle: [
    'Many Services. One Convenient Place.',
    'এক জায়গায় নানা পরিষেবা'
  ],

  floatingTitle: [
    'Made to Remember',
    'স্মৃতির যত্নে'
  ],

  floatingText: [
    'Love in every frame',
    'প্রতিটি ফ্রেমে ভালোবাসা'
  ],

  quick1: ['Photography', 'ফটোগ্রাফি'],
  quick1s: ["Capture life's moments", 'মুহূর্তকে ফ্রেমবন্দি করুন'],

  quick2: ['Xerox & Printing', 'জেরক্স ও প্রিন্ট'],
  quick2s: ['Fast, convenient service', 'দ্রুত ও সুবিধাজনক পরিষেবা'],

  quick3: ['School Supplies', 'স্কুলের সামগ্রী'],
  quick3s: [
    'Notebooks, pens, pencils & more',
    'খাতা, কলম, পেনসিলসহ আরও'
  ],

  quick4: ['Event Booking', 'অনুষ্ঠান বুকিং'],
  quick4s: [
    'Weddings, Annaprashan & more',
    'বিয়ে, অন্নপ্রাশন ও অন্যান্য'
  ],

  servicesTitle: [
    'Everything You Need, <em>All in One Place</em>',
    'আপনার প্রয়োজনের <em>সবকিছু একসাথে</em>'
  ],

  servicesIntro: [
    "From everyday essentials to life's biggest celebrations, we're here to help.",
    'দৈনন্দিন প্রয়োজন থেকে জীবনের বিশেষ দিন—যত্নসহকারে পরিষেবা দেওয়াই আমাদের লক্ষ্য।'
  ],

  s1: ['Photography', 'ফটোগ্রাফি'],
  s1p: [
    'Wedding, birthday, family and special-moment photography.',
    'বিয়ে, জন্মদিন, পারিবারিক অনুষ্ঠান ও বিশেষ মুহূর্তের ছবি তোলা।'
  ],

  s2: ['Videography', 'ভিডিওগ্রাফি'],
  s2p: [
    'Video coverage for celebrations, events and memorable days.',
    'বিভিন্ন অনুষ্ঠান ও স্মরণীয় দিনের ভিডিও রেকর্ডিং।'
  ],

  s3: ['Xerox & Printouts', 'জেরক্স ও প্রিন্ট আউট'],
  s3p: [
    'Document photocopying, black-and-white and colour printing.',
    'ডকুমেন্টের ফটোকপি, সাদা-কালো ও কালার প্রিন্টের কাজ।'
  ],

  s4: ['Passport & ID Photos', 'পাসপোর্ট ও ID ছবি'],
  s4p: [
    'Passport-size photos, ID photos and photo printing.',
    'পাসপোর্ট সাইজ ছবি, আইডি কার্ডের ছবি এবং ফটো প্রিন্ট।'
  ],

  s5: ['Online Forms & Scanning', 'অনলাইন ফর্ম ও স্ক্যান'],
  s5p: [
    'Help with online forms, document scanning and printouts.',
    'অনলাইন ফর্ম পূরণে সহায়তা, ডকুমেন্ট স্ক্যান ও প্রিন্ট।'
  ],

  s6: ['Stationery & School Supplies', 'স্টেশনারি ও স্কুলের সামগ্রী'],
  s6p: [
    'Notebooks, pens, pencils and everyday study essentials.',
    'খাতা, কলম, পেনসিল এবং পড়াশোনার প্রয়োজনীয় জিনিসপত্র।'
  ],

  s7: ['Lamination & Binding', 'ল্যামিনেশন ও বাইন্ডিং'],
  s7p: [
    'Lamination, spiral binding and document finishing.',
    'ল্যামিনেশন, স্পাইরাল বাইন্ডিং এবং কাগজপত্র গোছানোর কাজ।'
  ],

  s8: ['Photo Prints & Photoshop', 'ফটোশপ ও ফটো প্রিন্ট'],
  s8p: [
    'Photo editing and quality prints to suit your needs.',
    'ছবির প্রয়োজনীয় এডিটিং এবং পছন্দমতো ছবি প্রিন্ট।'
  ],

  learn: [
    'Enquire now <span>↗</span>',
    'বিস্তারিত জানুন <span>↗</span>'
  ],

  visit: [
    'Visit our shop <span>↗</span>',
    'দোকানে আসুন <span>↗</span>'
  ],

  eventTitle: [
    'Your Happy Moments,<br><em>Beautifully Preserved.</em>',
    'আপনার আনন্দের মুহূর্ত<br><em>আমরা রাখব যত্নে</em>'
  ],

  eventText: [
    'From wedding vows and Annaprashan ceremonies to birthdays and family celebrations, contact us to discuss photography and videography for your event.',
    'বিয়ের শুভক্ষণ, অন্নপ্রাশন, জন্মদিন কিংবা পারিবারিক অনুষ্ঠান—ফটোগ্রাফি ও ভিডিওগ্রাফির জন্য আগাম কথা বলুন।'
  ],

  event1: ['✓ Weddings & receptions', '✓ বিয়ে ও রিসেপশন'],
  event2: ['✓ Annaprashan & baby ceremonies', '✓ অন্নপ্রাশন ও শিশুর অনুষ্ঠান'],
  event3: ['✓ Birthdays & family functions', '✓ জন্মদিন ও পারিবারিক অনুষ্ঠান'],
  event4: ['✓ Other social occasions', '✓ অন্যান্য সামাজিক অনুষ্ঠান'],

  waBooking: [
    'Ask about a booking on WhatsApp →',
    'WhatsApp-এ বুকিং জানতে →'
  ],

  everyMoment: ['Every moment', 'প্রতিটি মুহূর্ত'],
  priceless: ['A priceless memory', 'একটি অমূল্য স্মৃতি'],

  galleryTitle: ['A Gallery of Memories', 'স্মৃতির অ্যালবাম'],

  galleryIntro: [
    'A few sample wedding, Annaprashan and studio photos to inspire your next celebration.',
    'বিয়ে, অন্নপ্রাশন এবং স্টুডিওর কিছু নমুনা ছবি—আপনার অনুষ্ঠানের জন্য অনুপ্রেরণা।'
  ],

  galleryNote: [
    '* Some gallery photos are samples for inspiration. Please discuss your event requirements and preferences when booking.',
    '* গ্যালারির কিছু ছবি নমুনা হিসেবে দেওয়া হয়েছে। বুকিংয়ের সময় নিজের অনুষ্ঠানের প্রয়োজন ও পছন্দ জানিয়ে নিন।'
  ],

  ownerLabel: ['Here for our community', 'আপনাদের পাশে'],

  aboutTitle: [
    "Your Neighbourhood's<br><em>Studio & Xerox Partner</em>",
    'আপনার এলাকার<br><em>বিশ্বস্ত স্টুডিও ও জেরক্স</em>'
  ],

  aboutP1: [
    'Mukta Studio & Xerox in Pathartoria is here for your everyday needs and for preserving the memories of your most special occasions.',
    'পাথরতোড়িয়ার মুক্তা স্টুডিও ও জেরক্স দৈনন্দিন প্রয়োজনীয় পরিষেবা এবং বিশেষ অনুষ্ঠানের স্মৃতি ধরে রাখার কাজে পাশে থাকতে চায়।'
  ],

  aboutP2: [
    'From school supplies, printing and photocopying to photography and videography, get in touch with us directly.',
    'স্কুলের সামগ্রী, প্রিন্টিং ও জেরক্স থেকে ফটোগ্রাফি এবং ভিডিওগ্রাফি—সবকিছুর জন্য সরাসরি যোগাযোগ করুন।'
  ],

  localService: [
    'Local service<small>Pathartoria, West Bengal</small>',
    'স্থানীয় পরিষেবা<small>পাথরতোড়িয়া, পশ্চিমবঙ্গ</small>'
  ],

  directContact: [
    'Personal assistance<small>Tell us what you need</small>',
    'সরাসরি যোগাযোগ<small>আপনার প্রয়োজন আমাদের জানান</small>'
  ],

  contactUs: ['Contact Us', 'যোগাযোগ করুন'],

  ready: [
    'Planning something special?',
    'বিশেষ কিছু পরিকল্পনা করছেন?'
  ],

  ctaTitle: [
    "Let's talk with Mukta Studio today!",
    'আজই কথা বলুন Mukta Studio-র সঙ্গে!'
  ],

  contactTitle: [
    "We're Right Around the Corner",
    'আমরা আছি আপনার কাছেই'
  ],

  contactIntro: [
    'Visit our shop, call us, or tell us what you need on WhatsApp.',
    'দোকানে আসুন, ফোন করুন অথবা WhatsApp-এ আপনার প্রয়োজন জানান।'
  ],

  phone: ['Phone number', 'ফোন নম্বর'],
  tapCall: ['Tap to call', 'কল করতে ট্যাপ করুন'],
  address: ['Studio address', 'দোকানের ঠিকানা'],

  maps: [
    'Get directions on Google Maps ↗',
    'Google Maps-এ পথ দেখুন ↗'
  ],

  viewProfile: ['View profile ↗', 'প্রোফাইল দেখুন ↗'],
  sendMessage: ['Send a message', 'মেসেজ পাঠান'],

  waInfo: [
    'Ask about bookings and services ↗',
    'বুকিং ও পরিষেবা সম্পর্কে জানুন ↗'
  ],

  formTitle: ['How Can We Help?', 'আপনার প্রয়োজন জানান'],

  formIntro: [
    'Fill in the form and continue to WhatsApp to send your enquiry.',
    'ফর্মটি পূরণ করে WhatsApp-এ মেসেজ পাঠান।'
  ],

  yourName: ['Your name', 'আপনার নাম'],
  mobile: ['Mobile number', 'মোবাইল নম্বর'],

  serviceNeeded: [
    'Which service do you need?',
    'কোন পরিষেবা দরকার?'
  ],

  chooseService: ['Choose a service', 'পরিষেবা বেছে নিন'],
  detailsLabel: ['Details (optional)', 'বিস্তারিত (ঐচ্ছিক)'],

  sendWhatsApp: [
    'Send via WhatsApp ↗',
    'WhatsApp-এ পাঠান ↗'
  ],

  formNote: [
    'This form opens WhatsApp. Your information is not stored on this website.',
    'এই ফর্ম WhatsApp খুলবে; কোনও তথ্য ওয়েবসাইটে সংরক্ষণ করা হয় না।'
  ],

  footerText: [
    'Here for your everyday needs and the special moments that become lifelong memories.',
    'আপনার প্রতিদিনের প্রয়োজন আর জীবনের বিশেষ মুহূর্ত—দুটিরই যত্নে আমরা পাশে আছি।'
  ],

  quickLinks: ['Quick Links', 'দ্রুত লিংক'],
  contact: ['Contact', 'যোগাযোগ'],

  hours: [
    '🕒 Call to confirm opening hours',
    '🕒 খোলার সময় জানতে ফোন করুন'
  ],

  rights: [
    'All rights reserved.',
    'সর্বস্বত্ব সংরক্ষিত।'
  ]
};


// Language Toggle
function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;

    if (translations[key]) {
      el.innerHTML = translations[key][lang === 'bn' ? 1 : 0];
    }
  });

  document.getElementById('languageToggle').textContent =
    lang === 'en' ? 'বাংলা' : 'English';

  document.getElementById('customerName').placeholder =
    lang === 'bn' ? 'আপনার নাম লিখুন' : 'Enter your name';

  document.getElementById('customerPhone').placeholder =
    lang === 'bn' ? '১০ সংখ্যার মোবাইল নম্বর' : '10-digit mobile number';

  document.getElementById('details').placeholder =
    lang === 'bn'
      ? 'তারিখ, পরিমাণ বা প্রয়োজনীয় তথ্য লিখুন'
      : 'Date, quantity or any details';

  localStorage.setItem('mukta-language', lang);
}

setLanguage(localStorage.getItem('mukta-language') || 'en');

document.getElementById('languageToggle').addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'en' ? 'bn' : 'en');
});


// Dark Mode and Light Mode
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const btn = document.getElementById('themeToggle');

  btn.innerHTML =
    theme === 'dark' ? '☀ <span>Light</span>' : '☾ <span>Dark</span>';

  localStorage.setItem('mukta-theme', theme);
}

setTheme(localStorage.getItem('mukta-theme') || 'light');

document.getElementById('themeToggle').addEventListener('click', () => {
  setTheme(
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  );
});


// Scroll Reveal Animation
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.img;
    lightboxImage.alt = item.querySelector('img').alt;

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightbox.querySelector('.lightbox-close')
  .addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});


// Booking Form and WhatsApp Integration
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const name = String(form.get('name')).trim();
  const phone = String(form.get('phone')).trim();
  const service = String(form.get('service')).trim();
  const details = String(form.get('details') || '').trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    alert(
      document.documentElement.lang === 'bn'
        ? 'দয়া করে সঠিক ১০ সংখ্যার মোবাইল নম্বর লিখুন।'
        : 'Please enter a valid 10-digit mobile number.'
    );

    return;
  }

  const message =
    `Hello Mukta Studio & Xerox!\n` +
    `Name: ${name}\n` +
    `Mobile: ${phone}\n` +
    `Service: ${service}\n` +
    `Details: ${details || 'Please share more information.'}`;

  window.open(
    `https://wa.me/918016252885?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener'
  );
});


// Back to Top Button
const backTop = document.querySelector('.back-top');

window.addEventListener(
  'scroll',
  () => {
    backTop.classList.toggle('visible', window.scrollY > 500);
  },
  { passive: true }
);

backTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Dynamic Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();