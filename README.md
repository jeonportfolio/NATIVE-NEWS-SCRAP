## 뉴스 스크랩 앱 만들기 (프로젝트 생성)

▣ `npx expo init NATIVE-NEWS-SCRAPPER`


## 부가기능 설치 (네비게이션 ,안전영역, 리덕스)

▣ `npm install @react-navigation/native`<br>
▣ `npm install @react-navigation/native-stack @react-navigation/bottom-tabs`<br>
▣ `npm install react-native-screens react-native-safe-area-context`<br>
▣ `npm i redux react-redux redux-logger redux-thunk`<br>

## 기존의 컴포넌트를 이용 

▣ TabICon을 활용하여 BottomTab의 설정<br>


## 네비게이션 

▣ RootNavigation으로 전체의 네비게이션 제어 -> StackNavigator<br>
▣ NewsTabNavigation.js -> bottomTab의 뉴스 List,favorite,detail페이지 이동하기 <br>

## 효율적인 관리를 위한 redux 사용 

▣ actions, reducers, store 폴더 생성<br>
▣ store에서 combineReducer를 통해 reducer를 취합하고 thunk 비동기기능을 활용함 <br>

## 뉴스 리스트 가져오고 보여주는 로직 추가 

▣ Fetch를 사용해 네이버 API를 가져온다.<br>
▣ reducer에서 switch문에 의해 판별 <br>
▣ action을 활용해 FlatList로 제목과 내용 미리 보여주기 <br>
▣ 웹뷰를 활용해 세부페이지 접속 (url사용) -> ` npm install react-native-webview` -> route를 통해 가져옴 <br>


## FavoriteNews 기능 

▣ CLIP_NEWS_ITEM 액션을 추가하여 관리<br>
▣ filter를 통해 중복을 방지 <br>
▣ favorite을 추가하고 삭제하는 기능 (dispatch를 통해 reducer에 저장)-> 아이콘 상태 변경 <br>


## async-storage를 활용한 저장기능 

▣ `npm install @react-native-async-storage/async-storage` 설치
▣ utils폴더에 AsyncStorageUtils.js 생성 
▣ thunk 비동기 처리로 상황에 맞는 설정가능 


