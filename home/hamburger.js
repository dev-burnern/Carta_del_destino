// DOM 요소 선택
const hamburgerBtn = document.getElementById('hamburger-btn');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');

// transition-duration을 JS와 CSS 모두 300ms로 맞춤
const SLIDE_DURATION = 300;

// 메뉴 상태 추적 변수
let isMenuOpen = false;

// 메뉴 열기 함수
function openMenu() {
  slideMenu.style.display = 'flex';
  // 강제로 리플로우를 발생시켜 transition이 항상 적용되도록 함
  void slideMenu.offsetWidth;
  slideMenu.classList.remove('translate-x-full');
  slideMenu.classList.add('translate-x-0');
  document.body.style.overflow = 'hidden';
  isMenuOpen = true;
}

// 메뉴 닫기 함수
function closeMenu() {
  slideMenu.classList.remove('translate-x-0');
  slideMenu.classList.add('translate-x-full');
  setTimeout(() => {
    slideMenu.style.display = 'none';
  }, SLIDE_DURATION);
  document.body.style.overflow = '';
  isMenuOpen = false;
}

// 햄버거 버튼 토글 기능
function toggleMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// 초기 상태에서 메뉴 완전히 숨김
slideMenu.style.display = 'none';

// 이벤트 리스너
hamburgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen) {
    closeMenu();
  }
});

const menuLinks = document.querySelectorAll('#slide-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
