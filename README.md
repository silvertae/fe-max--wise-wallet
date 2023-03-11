# <1주차> HTML, CSS, DOM, Event 기초

## ⭐️ 학습키워드: `#html5 layout` `#HTML,CSS 디버깅` `#html` `#css` `#css layout` `#SPA`

## 🎯 학습 목표

- HTML 태그 활용
- CSS 기반 동작원리 이해
- CSS 레이아웃 구성 원리 이해
- HTML,CSS 지식을 활용한 웹 단일 페이지 개발
- HTML,CSS 기본 디버깅 방법

## ⏰ 학습 계획

- 루카스에 올라온 학습 자료들은 차근차근 살펴보며 학습한다.
  - HTML 구조화 설계 ✅
  - CSS로 스타일 입히기(CSS 기초 & CSS Layout)
  - HTML, CSS 실습 영상 시청
  - DOM, Event란?
- 깃허브에 학습 계획을 정리해서 PR을 보낸다. ✅
- 1주차에 만들어야하는 기능들 하나씩 구현해본다.
  - HTML, CSS로 메인 페이지 UI 만들기
    - HTML ✅
    - CSS
  - '월' 이동 기능 구현
  - 새로운 내역 입력 기능 구현
- HTML 시맨틱(semantic) 태그에 대해서 공부한다. ✅
- 웹 접근성(Web Accessibility)에 대해서 알아본다.
- SPA에 대해서 조사해본다.
- 깔끔한 코드 작성을 위해서 ESLint, Prettier에 대해서 알아보고 설정한다. ✅
- Figma로 만들어진 기획서를 읽어보고 이해해본다. ✅

## 📚 학습 정리

### 1) Draft Pull Request

- Draft PR
  깃허브에서 프로젝트를 협업으로 진행하는 경우 Contribution을 PR(Pull Request)를 통해서 하게 된다. PR을 한 번 보내면 리뷰어는 수정사항이나 기능을 확인하고 승인을 하면 머지가 되면서 수정사항이 반영되는데,

  draft(초안) 모드로 PR 이슈를 오픈해두면 작업중인 코드가 아직 리뷰 받을 준비가 되어있지 않고 작업이 계속 이뤄지고 있는 상태임을 뜻하게 되며 머지가 활성화되지 않는다.

  이러한 draft PR은 개발이 완료되지는 않았지만 현재 진행 상황을 리뷰어와 공유하며 서로 의견을 조율하거나 소통하는데 사용할 수 있다.

  후에 개발이 완료되어 리뷰받을 준비가 되면 'Ready for review' 버튼을 눌러 일반 PR 이슈로 전환되어 코드를 머지할 수 있게된다.

- 바뀐 PR 운영방식에 맞추어 다음과 같은 흐름으로 작업을 진행하였다.
  - feature/mainUI 브랜치를 만들어 리드미에 학습 계획을 작성하고 커밋 후에 origin에 푸시한다.
  - feature/mainUI 브랜치를 upstream의 fuse 브랜치에 draft PR을 보낸다.
  - 열려있는 feature/mainUI 브랜치에 기능개발을 이어서 하되, html, css 작업 등 큰 기능들은 feature 브랜치를 따로 만들어 작업을 진행하고 커밋 후에 feature/mainUI 브랜치로 fast forward merge를 한다.
  - feature/mainUI에 작업을 완료한 브랜치를 머지한 이후에는 origin에 다시 푸시한다.
  - 추가할 기능마다 위와 같은 과정으로 반복한다.

![image](https://user-images.githubusercontent.com/76121068/223161913-985d80d7-85aa-4dfb-8f34-f893126da87e.png)

### 2) HTML

- HTML Attributes
  - data: 특정 요소들을 DOM요소에 저장해두기 위해서 사용한다. 브라우저는 이러한 데이터 속성에는 일체 관여하지 않는다.
- class와 id
- Semantic MarkUp
  HTML은 웹페이지의 뼈대를 이루고 레이아웃을 구성한다. 하지만 뼈대역할 말고도 요소들의 의미를 나타내는 역할도 담당하고 있기 때문에, 의미있는 요소들을 적절한 Layout 태그들(header, nav, main, section, footer...)을 사용해서 semantice하게 나타나는 작업 또한 중요하다.
  이렇게 semantic하게 html을 작성하면 다음과 같은 장점들이 있다.
  - 구글같은 검색엔진의 크롤러 시스템이 코드를 더 잘 이해할 수 있게 만들어준다.
  - 접근성 측면에서 좋다. ex) 시각장애인을 위한 스크린리더
  - 개발자들 입장에서 관리, 유지, 보수가 편해진다.

### 3) CSS

- html 태그로 이미지로 svg파일을 사용하는 이유?
  내비게이션있는 내역, 달력, 리스트 아이콘을 svg 태그로 추가하였다.
  다른 홈페이지들을 참고해보니 svg를 아이콘이나 로고로 사용하는 곳이 많았다.
  조사해보니 svg는 크기가 작을뿐만 아니라 사이트가 로딩될때 html 인라인에
  포함되기 때문에 추가적인 http 요청을 제거할 수 있어 속도가 빨라진다고 한다.
- CSS 스타일 적용방법과 우선순위
  - inline: 적용 우선순위가 가장 높지만, 각 html 요소마다 일일이 스타일을 지정해야 하기 때문에 권장되지 않는 방식
  - internal: html의 style 태그로 스타일을 지정하는 방식이다. 안에 들어갈 코드가 길어지면 html이 지저분해지고 여러 문서나 페이지에 적용하지 못하므로 역시 권장되지 않는다.
  - external: 외부 css를 따로 만들고 link 태그로 html과 연결하는 방식이다. 가장 권장되는 방식
- flex-box로 요소 배치 및 정렬하기
- position absolute인 요소 가운데 정렬하기 (일반적인 margin: auto 로는 불가능!)

### 4) DOM Event

### 5) ESLint

- ESLint는 코드를 깔끔하게 작성하고 오류를 방지하기 위해서 사용하는 툴의 일종이다.
- ES는 ECMAScript 즉 JS언어를 의미하고, Lint는 '보푸라기' 라는 의미로 에러가 있는 코드에 표시해두는 것을 의미하고 이러한 Lint를 수정해주는 것이 Linter이다.
- ESLint는 코드를 정적으로 분석해 프로그램을 실행하기 전에 코딩 컨벤션에 위배되는 코드나 안티패턴을 자동으로 검출해준다.
- `npx eslint --init` 으로 `.eslintrc`설정 파일을 만들 수도 있다.
- 최종적으로 packge.json 파일에 다음과 같이 직접 config 설정을 했다.
  ```json
  {
  	"devDependencies": {
  		"eslint": "^8.35.0",
  		"eslint-config-airbnb-base": "^15.0.0",
  		"eslint-config-prettier": "^8.7.0",
  		"eslint-plugin-import": "^2.27.5",
  		"eslint-plugin-prettier": "^4.2.1",
  		"prettier": "2.8.4"
  	},
  	"eslintConfig": {
  		"extends": ["airbnb-base", "plugin:prettier/recommended"],
  		"parserOptions": {
  			"ecmaVersion": "latest",
  			"sourceType": "module"
  		},
  		"rules": {
  			"object-curly-newline": 0
  		},
  		"env": {
  			"browser": true,
  			"node": true,
  			"commonjs": true,
  			"es2021": true
  		}
  	},
  	"prettier": {
  		"singleQuote": true,
  		"semi": true,
  		"useTabs": true,
  		"tabWidth": 2,
  		"trailingComma": "all",
  		"printWidth": 80,
  		"arrowParens": "avoid"
  	}
  }
  ```

## ✨ 요구사항

### 1주차 주요 개발 feature

<메인화면 UI>

- 헤더
  - 로고
    - 클릭 시 메인페이지로 이동
  - 연월 표시 및 이동창
    - 헤더 중앙에 연월 표시
    - 좌우 화살표 아이콘 클릭시 ‘월’ 이동 기능
  - 내비게이션 아이콘
    - 내역/달력/통계 탭 표시
    - 각 탭 클릭시 화면 이동
- 새로운 내역 입력 창
  - 날짜 인풋 박스
    - 디폴트값 현재 날짜
    - 클릭해서 직접 수정 가능
  - 금액칸
    - 플러스/마이너스 버튼으로 수입/지출 전환 기능
    - 자동으로 세 자리마다 쉼표 입력
  - 내용칸
  - 결제수단 셀렉트 박스
    - 기존 결제수단 삭제 기능
    - 새로운 결제수단 추가 기능
  - 분류 셀렉트 박스
    - 수입 카테고리
    - 지출 카테고리
  - 확인 버튼
    - 입력창에 모든 내용이 입력되었을 때만 활성화
- 수입지출 내역 목록
  - 상단 부분 전체내역
    - 전체내역 건수 표시
    - 해당월의 수입액과 지출액 총합 표시
    - 수입액/지출액 필터링 기능
  - 수입지출 리스트
    - 일별 리스트는 최신순으로 정렬
    - 일별리스트에 각 날짜와 날짜별 수입/지출액 표시
    - 호버시 나타나는 삭제버튼으로 각 내역을 삭제할 수 있는 기능
    - 호버시 삭제 버튼 외 다른 곳 클릭시 내역 수정을 할 수 있는 기능

### HTML

- HTML을 사용할 때 용도에 맞는 태그를 사용해서 작성한다.
- HTML5 Layout 태그를 활용한다.

### CSS

- 모든 요소(element)들을 가지런히 배치하고, 일정한 간격을 유지하도록 한다.
- 배치 시에는 flex 속성(property)을 사용한다.
- CSS 속성은 모두 자유롭게 사용가능하다.

### JavaScript

- UI 조작을 위해서 기본적인 DOM API를 사용해본다.
- 이벤트 등록은 addEventListener 메소드만 사용한다.

## ⚡️ 추가 요구사항

### CSS

- Flexbox에 사용법에 대해서 더 알아보고 정리한다.

### Git, GitHub

- commit 단위를 작게 나눈다.
- commit 로그를 작성하는 좋은 사례를 찾아본다.
- 매일매일 git push를 통해 원격 저장소에 코드를 올린다.

## 🤔 생각할 거리

- ARIA
- BEM
- SPA
- 아이콘이나 로고는 어떤 태그를 사용해야 할까? → <i> 태그를 사용하는 웹사이트들이 꽤 있었다.

## 😵‍💫 삽질 기록

- position absolute 시 요소의 가운데 정렬 → [https://velog.io/@sklove96/css-absolute-일-때-가운데-정렬-방법](https://velog.io/@sklove96/css-absolute-%EC%9D%BC-%EB%95%8C-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC-%EB%B0%A9%EB%B2%95)
- 인풋바 금액 입력창에서 ‘-’버튼, 숫자 입력칸, ‘원’ 알맞게 배열하기 → flex 안에 감싸서 다시 flex
- input [type=”date”]에서 기본 브라우저가 제공하는 달력 타입을 초기화 하니까 인풋창이 작게사라져버림 → 우선 type=number로 바꿔서 작업 계속
  - [https://stackoverflow.com/questions/50052571/html-date-input-without-the-date-picker](https://stackoverflow.com/questions/50052571/html-date-input-without-the-date-picker)
- input, select의 브라우저 기본 제공 스타일 초기화하고 기획서처럼 만들기
  - number type에서 숫자 조절하는 화살표 버튼 없애기 [https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box](https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box)
  - select 디폴트 스타일 없애기 [https://stackoverflow.com/questions/12297600/how-to-remove-default-chrome-style-for-select-input](https://stackoverflow.com/questions/12297600/how-to-remove-default-chrome-style-for-select-input)
  - select 스타일 초기화 후 아래방향 화살표 아이콘은 어떻게 넣을지 고민 → [https://stackoverflow.com/questions/14218307/select-arrow-style-change](https://stackoverflow.com/questions/14218307/select-arrow-style-change) (background-image로 svg파일을 url로 변환해서 넣고 위치 조정해서 해결) → [https://yoksel.github.io/url-encoder/](https://yoksel.github.io/url-encoder/) (svg를 url로 인코딩해주는 사이트)
  - 날짜로 디폴트 value 나오게 하기 → 새로고침 해서 해결
  - select에서 ‘선택하세요’ 기본메세지 나오되 선택은 못하게 하는법? → [https://stackoverflow.com/questions/3518002/how-can-i-set-the-default-value-for-an-html-select-element](https://stackoverflow.com/questions/3518002/how-can-i-set-the-default-value-for-an-html-select-element) → 근데 적용이 안됨, 속성하나씩 지워가면서 직접 선택해서 해결
- form내 input, select 요소 기획안 대로 깔끔하게 배치하기
  - 우선 각 요소마다 div로 감싸서 width 직접 지정후 배치
  - 수직 구분선은 어떻게? → border-left로 만들고 첫 요소랑 마지막 요소만 안 보이도록
  - 자꾸 끝부분이 삐져나가는 문제 → form에서 지정한 최대너비를 넘어가서 넘쳐버린듯 → box-sizing을 border-box로 해서 안넘치게 딱 맞추니까 해결

## 참고자료

- [https://velog.io/@\_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide로-설정하기](https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [https://poiemaweb.com/eslint](https://poiemaweb.com/eslint)
- [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
- [https://github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
