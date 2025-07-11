// 문의내역 데이터 저장용
let inquiries = [];

// 탭 전환
const faqTab = document.getElementById('tab-faq');
const historyTab = document.getElementById('tab-history');
const faqSection = document.getElementById('faq-section');
const historySection = document.getElementById('history-section');

faqTab.onclick = () => {
  faqTab.classList.add('border-black', 'font-bold');
  faqTab.classList.remove('text-gray-500');
  historyTab.classList.remove('border-black', 'font-bold');
  historyTab.classList.add('text-gray-500');
  faqSection.classList.remove('hidden');
  historySection.classList.add('hidden');
};

historyTab.onclick = () => {
  historyTab.classList.add('border-black', 'font-bold');
  historyTab.classList.remove('text-gray-500');
  faqTab.classList.remove('border-black', 'font-bold');
  faqTab.classList.add('text-gray-500');
  historySection.classList.remove('hidden');
  faqSection.classList.add('hidden');
  renderInquiries();
};

// 글쓰기 모달
const writeBtn = document.getElementById('write-btn');
const modalBg = document.getElementById('modal-bg');
const modalCancel = document.getElementById('modal-cancel');

writeBtn.onclick = () => { modalBg.classList.remove('hidden'); };
modalCancel.onclick = () => { modalBg.classList.add('hidden'); };

// 문의내역 추가
const inquiryForm = document.getElementById('inquiry-form');
const inquiryList = document.getElementById('inquiry-list');

function formatDate(date) {
  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  return `${y}.${m}.${d}`;
}

inquiryForm.onsubmit = function(e) {
  e.preventDefault();
  const name = inquiryForm.name.value.trim();
  const email = inquiryForm.email.value.trim();
  const message = inquiryForm.message.value.trim();
  if (!name || !email || !message) return;

  // 문의내역 데이터에 추가 (기본값: 미답변)
  inquiries.unshift({
    name,
    email,
    message,
    date: new Date(),
    status: "pending" // "answered" 또는 "pending"
  });

  inquiryForm.reset();
  modalBg.classList.add('hidden');
  historyTab.click();
};

// 필터 요소
const periodFilter = document.getElementById('period-filter');
const statusFilter = document.getElementById('status-filter');

// 필터링 및 렌더링
function renderInquiries() {
  let filtered = [...inquiries];

  // 기간 필터
  const period = periodFilter.value;
  if (period !== "all") {
    const months = parseInt(period, 10);
    const now = new Date();
    filtered = filtered.filter(q => {
      const diffMonth = (now.getFullYear() - q.date.getFullYear()) * 12 + (now.getMonth() - q.date.getMonth());
      return diffMonth < months;
    });
  }

  // 상태 필터
  const status = statusFilter.value;
  if (status !== "all") {
    filtered = filtered.filter(q => q.status === status);
  }

  // 렌더링
  inquiryList.innerHTML = '';
  if (filtered.length === 0) {
    inquiryList.innerHTML = '<div class="text-gray-400 text-base">문의내역이 없습니다.</div>';
    return;
  }
  filtered.forEach(q => {
    const div = document.createElement('div');
    div.className = "border rounded-lg p-6 flex items-center space-x-6 mb-2 bg-white";
    div.innerHTML = `
      <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-500 font-bold">
        ${q.name[0]}
      </div>
      <div>
        <div class="font-bold text-lg">${q.name}</div>
        <div class="text-base text-gray-600 break-words mt-1">${q.message}</div>
        <div class="text-sm text-gray-400 mt-2">${formatDate(q.date)} · ${q.status === "answered" ? "답변완료" : "미답변"}</div>
      </div>
    `;
    inquiryList.appendChild(div);
  });
}

// 필터 변경 시마다 렌더링
periodFilter.onchange = renderInquiries;
statusFilter.onchange = renderInquiries;

// 문의내역 탭 진입 시 필터 적용
renderInquiries();

// 햄버거 메뉴 슬라이드 관련
const hamburgerBtn = document.getElementById('hamburger-btn');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');
const SLIDE_DURATION = 300;
let isMenuOpen = false;

function openMenu() {
  slideMenu.style.display = 'flex';
  void slideMenu.offsetWidth;
  slideMenu.classList.remove('translate-x-full');
  slideMenu.classList.add('translate-x-0');
  document.body.style.overflow = 'hidden';
  isMenuOpen = true;
}

function closeMenu() {
  slideMenu.classList.remove('translate-x-0');
  slideMenu.classList.add('translate-x-full');
  setTimeout(() => {
    slideMenu.style.display = 'none';
  }, SLIDE_DURATION);
  document.body.style.overflow = '';
  isMenuOpen = false;
}

function toggleMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// 초기 상태에서 메뉴 숨김
slideMenu.style.display = 'none';

// 이벤트 리스너
hamburgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', closeMenu);

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen) {
    closeMenu();
  }
});

// 메뉴 내 링크 클릭 시 닫기
const menuLinks = document.querySelectorAll('#slide-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
