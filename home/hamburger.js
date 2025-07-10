// DOM 요소 선택
const hamburgerBtn = document.getElementById('hamburger-btn');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');

// 메뉴 열기 함수
function openMenu() {
  slideMenu.classList.remove('translate-x-full');
  slideMenu.classList.add('translate-x-0');
  slideMenu.style.display = 'flex'; // 메뉴를 flex로 표시
  document.body.style.overflow = 'hidden';
}

// 메뉴 닫기 함수
function closeMenu() {
  slideMenu.classList.remove('translate-x-0');
  slideMenu.classList.add('translate-x-full');
  setTimeout(() => {
    slideMenu.style.display = 'none'; // 애니메이션 후 완전히 숨김
  }, 300); // transition-duration과 맞춤
  document.body.style.overflow = '';
}

// 초기 상태에서 메뉴 완전히 숨김
slideMenu.style.display = 'none';

// 이벤트 리스너
hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && slideMenu.classList.contains('translate-x-0')) {
    closeMenu();
  }
});

const menuLinks = document.querySelectorAll('#slide-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
