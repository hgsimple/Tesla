// 상수(const), 변수(var,let) 등을 선언(수정할 html 태그 선택)
const fullpageEl = document.getElementById('fullpage');
// 메뉴버튼
const menuBtn = document.querySelector('.menu_btn');
//오른쪽 네비게이션 메뉴바(안보임)
const navigation = document.querySelector('.navigation');
// 오른쪽 메뉴바 X버튼
const navCloseBtn = document.querySelector('.navigation_close_btn');
// 화면 전체를 흐리게 덮는 오버레이
const blurOverlay = document.querySelector('.blur_overlay');
//문자열 is--active 선언
const IS_ACTIVE = 'is--active';

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle('no-scroll');
};
// 오른쪽 상단 메뉴버튼
menuBtn.addEventListener('click', toggleNavigation);
// X버튼
navCloseBtn.addEventListener('click', toggleNavigation);
// 왼쪽 흐린화면 클릭하면
blurOverlay.addEventListener('click', toggleNavigation);

// 여기에서 fullpage를 초기화 설정
new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
});