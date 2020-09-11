# 포트폴리오 사이트 만들기👩‍💻

## Description.

- React, ES6, SCSS를 사용하여 포트폴리오 사이트 만들기
- **다양한 애니메이션을 구현**해보는 것이 목표

## Tech Stack.

React, ES6, SCSS

## Process.

**09.01**

- SCSS 사용을 위해 node-sass 패키지 설치
- 배경 star 뿌려주는 함수 추가 → `backgroundJs`

💡 컴포넌트가 호출된 후 함수가 실행되어야 append()오류가 발생하지 않는다.  
 → componentDidMount()에서 함수 호출

**09.02**

- **projcetheader**영역 추가
- header 영역은 neon sign처럼 애니메이션 구현
- header 영역은 scroll 유무에 상관없이 애니메이션 실행

**09.03**
- **projectSection**영역 추가
- `.projectHeading` & `.projectDesc` 공통 UI 추가
- 텍스트 opacity를 제어하는 스크롤 함수 추가 → `opacityAniJs()`

**09.04**
- **projectSection02**영역 추가
- 텍스트 위치를 제어하는 스크롤 함수 추가 → `revealAniJS()`

**09.06**
- **projectSection02** layout 완료
- 그래프 box-shadow는 `overflow:hidden`으로 구현이 어려울것 같아 skill 타이틀만 shadow 처리
- hover시 skill 정보 제공 구현 예정
- 싱글 데이터 그래프 애니메이션 스크롤 함수 추가 → `graphAniJs()`

**09.07**
- 멀티 데이터 그래프 애니메이션 스크롤 함수 추가 → `multiGraphAniJs()`
- JavaScript는 세부 요소가 있어 요소 hover시 info 노출
- 화면상 미세한 border가 보여 수정 예정

**09.09**
- 텍스트 타이핑 애니메이션 스크롤 함수 추가 → `typingAniJS()`
- 모든 영역에 opacityAniJs() 적용을 위해 typingAniJS()에도 delay값 전달 받을 수 있도록 수정

**09.11**
- **Work Experience** 영역 추가
- **projectTimeline** 구조 추가
