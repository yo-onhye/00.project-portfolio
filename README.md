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
- 재활용성을 위해 **opacityAniJs()**추가

**09.04**
- **projectSection02**영역 추가
- 재활용성을 위해 **revealAniJS()**추가