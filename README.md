## CRUD_Node_project


> Goal: "Node.js와 express를 활용한 나만의 내배캠 장터 백엔드 서버 만들기"

<br />

> [👉배포 링크](http://woogi.shop/api/products)

## 🎈 구현 목표

- Node.js를 이용해서 웹 프레임워크를 구현.
- MongoDB와 mongoose를 이용하여 원하는 데이터베이스를 설계하고 활용
- Express.js를 기반으로 CRUD(Create, Read, Update, Delete) 기능이 포함된 REST API 구현.
- AWS EC2에 Express.js 를 이용한 웹 서비스를 배포
- API 리스트를 작성, 백엔드 서버를 설계

<br />

## 🗄 폴더 구조

```bash
📦CRUD_Node_project
┣ 📂routes
┃ ┗ 📜projects.js
┣ 📂schemas
┣ ┗ 📜projects.js
┃ ┗ 📜index.js
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜app.js
┣ 📜package.json
┗ 📜README.md
```

<br />

## ⛏ 사용 기술

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

<br />

## API
![image](https://github.com/heyfuxkingcheez/CRUD_Node_project/assets/143869354/dfaa1323-7fce-408f-a661-a7f7bb54e4d2)


<br />

## 🙋‍♀️ To Do List

### 1. Directory setting

- [x] .env
- [x] .prettierrc
- [x] .gitignore
- [x] express
- [x] nodemon

### 2. 데이터베이스 연결

- [x] mongodb, mongoose 설치
- [x] Atlas 설치, 연결
- [x] 스키마 모델 설정, 확인

### 3. API 구현하기

- [x] 상품 작성 POST
  - [x] 상품명, 작성 내용, 작성자명, 비밀번호를 request에서 전달받기
  - [x] 상품은 두 가지 상태, 판매 중(FOR_SALE)및 판매 완료(SOLD_OUT)
  - [x] 상품 등록 시 기본 상태는 판매 중 (FOR_SALE)

<br />

- [x] 상품 목록 조회 GET
  - [x] 상품명, 작성자명, 상품 상태, 작성 날짜 조회
  - [x] 상품 목록은 작성 날짜를 기준으로 내림차순(최신순) 정렬

<br />

- [x] 상품 상세 조회
  - [x] 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회

<br />

- [x] 상품 정보 수정
  - [x] 상품명, 작성 내용, 상품 상태, 비밀번호를 request에서 전달받기
  - [x] 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정되게
  - [x] 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환

<br />

- [x] 상품 삭제
  - [x] 비밀번호를 request에서 전달받기
  - [x] 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 삭제되게
  - [x] 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환

<br />

### 4. AWS 배포

- [x] AWS EC2 배포
