#  원티드 프리온보딩 프론트엔드 코스 사전과제 설명

## Assignment 1 - `Login`

- useRef를 이용해 ID, PW 값을 입력할때 리랜더링이 발생하지 않도록 구현하였습니다.
- 로그인 성공시 Local Storage에 로그인 정보를 저장해 정보가 유지되도록 구현하였습니다.
<hr>

- 로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개) ✅
- 약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용) ✅
- 로그인 시(ID, PW 입력 후 버튼 클릭) ✅
  - Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.) ✅
  - 메인 페이지로 이동합니다.(로그인이 완료되면) ✅
  - 반응형 CSS 적용은 하지 않으셔도 좋습니다. 해당 페이지는 반응형 CSS를 평가하지 않습니다. ✅

## Assignment2 - `GNB`

- Logout 아이콘을 클릭시 로그아웃이 되도록 구현하였습니다.

<hr>

- 로그인 후 이동하는 메인페이지의 GNB를 구현해주세요. ✅
- 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 를 구현해주세요. ✅
- 모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다. ✅
- 가장 오른쪽 아이콘을 Logout으로 변경해주세요. ✅
- 그 외 기능은 평가하지 않습니다.
  - (가운데 검색바는 `input` 요소로만 만들어주세요. 기능은 X)
  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O)

## Assignment3 - `Validation`

- entered, valid state를 이용해 유효성 검사를 통과하지 못한 경우 입력창의 테두리가 빨간색이 되도록 구현하였습니다.
- 정규표현식을 사용해 유효성 검사를 구현하였습니다.

<hr>

- 이메일과 비밀번호의 유효성을 확인합니다. ✅
  - 이메일 조건 - `@` , `.` 포함 ✅
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상 ✅
  - 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인 ✅
- Validation 상태를 CSS로 표현해주세요. ✅
  - Email Input ✅
    Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경) ✅
  - Password Input ✅
    Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.) ✅
  - Login Button ✅
    Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.) ✅
- 유효성 검사 시 아래 두 가지를 적용해서 구현해주세요. ✅
  - 정규표현식 사용 ✅
  - Validation 함수 분리 ✅

## Assignment4 - `Routing`

- Local Storage와 Context API를 이용해 라우팅 로직을 구현하였습니다.

<hr>

- 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage) ✅
- 로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X) ✅
- 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X) ✅

## Assignment5 - `Feeds`

- fetch를 이용해 json형식의 mock data를 요청하도록 구현하였습니다.
- image.onload를 이용해 Loading을 구현하였습니다.

<hr>

- 피드 컴포넌트를 개발합니다. ✅
- 레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. (픽셀 단위까지 맞추실 필요는 없으나 보기에 자연스럽도록 개발해주세요.) ✅
- 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다. ✅
- Feed는 최소 3개이상 랜더링 되도록 구현해주세요. ✅
- 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록) ✅
- Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다. ✅
- 게시 후 Input은 초기화 되어야 합니다. ✅
- Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등) ✅
- Feed Image는 자유롭게 사용하셔도 되지만 필요하시면 아래의 url을 사용하세요.(사이즈를 변경하셔도 됩니다. 같은 사이즈 X) ✅
  "[https://source.unsplash.com/random/600x500](https://source.unsplash.com/random/600x500)"
  "[https://source.unsplash.com/random/900x500](https://source.unsplash.com/random/900x500)"
  "[https://source.unsplash.com/random/700x1080](https://source.unsplash.com/random/700x1080)"
- Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload) ✅
  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. icon 라이브러리 설치 O)
  - 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)

