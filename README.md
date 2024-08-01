## 뉴스 스크랩 앱 만들기 (프로젝트 생성)

▣ `npx expo init NATIVE-NEWS-SCRAPPER`


## 부가기능 설치 (네비게이션 ,안전영역, 리덕스)

▣ `npm install @react-navigation/native`
▣ `npm install @react-navigation/native-stack @react-navigation/bottom-tabs`
▣ `npm install react-native-screens react-native-safe-area-context`
▣ `npm i redux react-redux redux-logger redux-thunk`

## 기존의 컴포넌트를 이용 

▣ TabICon을 활용하여 BottomTab의 설정


## 네비게이션 

▣ RootNavigation으로 전체의 네비게이션 제어 -> StackNavigator
▣ NewsTabNavigation.js -> bottomTab의 뉴스 List,favorite,detail페이지 이동하기 

## 효율적인 관리를 위한 redux 사용 

▣ actions, reducers, store 폴더 생성
▣ store에서 combineReducer를 통해 reducer를 취합하고 thunk 비동기기능을 활용함 

