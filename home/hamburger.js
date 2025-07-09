// DOM 요소 선택
const hamburgerBtn = document.getElementById('hamburger-btn');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// 메뉴 열기 함수
function openMenu() {
  slideMenu.classList.remove('translate-x-full'); // 슬라이드 메뉴를 화면에 보이도록
  slideMenu.classList.add('translate-x-0'); // 슬라이드 메뉴의 위치를 변경
  overlay.classList.remove('opacity-0', 'invisible');// 오버레이를 보이도록 설정
  overlay.classList.add('opacity-100', 'visible'); // 오버레이의 투명도를 변경
  hamburgerBtn.classList.add('active'); // 햄버거 버튼에 active 클래스 추가
  document.body.style.overflow = 'hidden'; // 스크롤 방지
}

// 메뉴 닫기 함수
function closeMenu() {
  slideMenu.classList.remove('translate-x-0');
  slideMenu.classList.add('translate-x-full');
  overlay.classList.remove('opacity-100', 'visible');
  overlay.classList.add('opacity-0', 'invisible');
  hamburgerBtn.classList.remove('active');
  document.body.style.overflow = ''; // 스크롤 복원
}

// 이벤트 리스너
hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// ESC 키로 메뉴 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && slideMenu.classList.contains('translate-x-0')) {
    closeMenu();
  }
});

// 메뉴 링크 클릭 시 메뉴 닫기 (선택사항)
const menuLinks = document.querySelectorAll('#slide-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
