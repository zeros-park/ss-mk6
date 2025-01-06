updated - 25.1.6

1. https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

위 가이드에서 제공하는 세팅을 참고해서 진행함.

---

2. redux를 사용하기 위해서, 최근 제공되는 가이드에 맞춰 명령어 진행
npm install @reduxjs/toolkit redux react-redux'

---


3. 1차적으로 순수 react로 작업한 결과물들을 ssr 적용하는 next.js 로 이관처리 진행

---


4. 몇가지 추가로 만져준 것들
- router만 살짝 만져줌
- 상대경로로 사용하던 내부모듈 참조방식을 변경함 > tsconfig.json -> paths 추가

---

5. 다음엔 ts 처리 진행하고, 노후모듈로 돌아간가 있나 한번 볼 예정