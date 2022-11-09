<div align=center>
  <h2> Stack Overflow 클론 </h2>
 
 
배포 링크: http://pre-project-deploy.s3-website.ap-northeast-2.amazonaws.com/


</div>

## 팀원 소개 👩🏻‍💻🧑🏻‍💻

|                                              [🐈‍⬛ 최담은](https://github.com/Inside-eun)                                               |                                              [🐈‍⬛ 이건희](https://github.com/leezer94)                                               |                                              [👍 조원태](https://github.com/tyuiop3762)                                               |                                               [🌱 오영운](https://github.com/you88311)                                                |                                               [🏝 신지훈](https://github.com/Godjih)                                               |                                          [🪁 황윤재](https://github.com/yhwang15)                                           |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/Inside-eun"> <img src="https://avatars.githubusercontent.com/u/103915161?v=4" width=200px alt="_"/> </a> | <a href="https://github.com/leezer94"> <img src="https://avatars.githubusercontent.com/u/83988230?v=4" width=200px alt="_"/> </a> | <a href="https://github.com/tyuiop3762"> <img src="https://avatars.githubusercontent.com/u/105303007?v=4" width=200px alt="_"/> </a> | <a href="https://github.com/you88311"> <img src="https://user-images.githubusercontent.com/29119738/200323540-71aeac68-228a-415b-a37f-6ffc68af681d.png" width=200px alt="_"/> </a> | <a href="https://github.com/Godjih"> <img src="https://avatars.githubusercontent.com/u/97619571?s=400&u=67cb34b433f47f990918bfd5e8c4e1676bfddb52&v=4" width=200px alt="_"/> </a> | <a href="https://github.com/yhwang15"> <img src="https://avatars.githubusercontent.com/u/84262646?s=400&v=4" width=200px alt="_"> |
|                                                               프론트엔드                                                                |                                                               프론트엔드                                                                |                                                            프론트엔드                                                             |                                                              백엔드                                                               |                                                              백엔드                                                               |                                                           백엔드                                                           |
|                                                                                                                     |                                                                                                                     |                                                                                                              |                                                                                                                 |                                                                                                               |                                                                                                      |

<br>

<br>

## ✨ 프론트엔드 기술 스택 
    
  
  REACT: 공통된 하나의 컴포넌트를 생성하고 그 컴포넌트를 필요한 곳에 가져다 사용 이러한 특징은 생산성과 유지 보수를 용이하게 합니다.
           JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공해 줍니다
  
  
  JAVASCRIPT:자바스크립트는 인터프리터 언어*이기 때문에, 자바와 같이 컴파일이 필요한 다른 프로그래밍 언어에 비해 시간이 적게 소요된다. 또한 자바스크립트는 클라이언트 스크립트이기       연결에 드는 시간을 절약할 수 있어서 프로그램 실행 속도를 높인다.
  
  
  EACT-QUERY: React 어플리케이션 내에서 데이터 패칭, 캐싱, 동기적, 그리고 서버의 상태의 업데이트를 좀 더 용이하기 위해 만들어준다,
                 프로젝트 구조가 기존보다 단순해져 애플리케이션을 유지 보수하기 쉽고, 새로운 기능을 쉽게 구축할 수 있다,
                 기존에는 직접 만들어서 사용했던 기능들을 별도의 옵션으로 지원하여 복잡하고 이해할 수 없는 수많은 코드를 대신 React-Query 로직을 통해 짧은 코드로 대체할 수 있게                    되었다
 
  RECOIL: REACT 상태관리 라이브러리
  
  
  STYLE-COMPONENT: 스타일을 입힌 컴포넌트의 이름으로 코딩을 해주면 되기 때문에 className이 전역으로 중복되어 생기는 문제를 방지할 수 있다.
  

## ⚡️ 백엔드 기술 스택 
  JAVA : 메인 언어
  
  SPRING BOOT :  Spring MVC Framework 구현을 위한 SpringBoot 
  
  GRADLE : 빌드 툴
  
  SPRING SECURITY : 로그인/로그아웃/회원가입/JWT 기능 
  
  MYSQL : DB구조. MySQL & H2 사용
  
  SPRIGN DATA JPA HIBERNATE: Mapstruct, DTO, Repository 등을 통한 ORM 기술
  
  REST API: 클라이언트-서버간 JSON Format으로 전송 
  
  Spring Test: TDD 를 위한 테스트 라이브러리 
  
  LOMBOK : Getter, Setter 등과 같은 어노테이션 라이브러리
  
  Ngrok: 로컬호스트의 개발 환경을 외부로 공유하는 툴
  
  AWS: 배포 툴
  
  Discord: 소통 툴 
  
  GIT & GitHub: 협업 툴 
  

## ⚙️ 인프라 기술 스택 
  
  SPRIGN DATA JPA HIBERNATE
  
  MYSQL
  
  AWS
  

## 🕊 프론트엔드 인프라 구조  


## 🦉 백엔드 인프라 구조  
  
  DB 스키마
  
![ERD_Final ](https://user-images.githubusercontent.com/84262646/200247314-1ec3201c-dfc0-49b1-9f45-e7286907074f.png)

 Rest API 기능
-	회원가입 기능 
-	로그인 및 JWT 기능
-	회원 유저 CRUD 기능
-	유저 프로필 및 질문 수, 답변 수, 조회수 표시기능
-	질문 CRUD 기능 (OneToMany)
- 질문 조회수 기능
-	질문 및 답변 추천, 비추천 기능 
- 질문 채택 기능
-	질문 검색 기능
-	질문 목록 페이징 
-	답변 CRUD 기능  (ManyToOne) 
- 답변의 댓글 CRUD 기능 (ManyToOne) 
- 질문의 댓글 CRUD 기능 (ManyToOne)
- 질문의  CRUD 기능 (ManyToMany)
- Dummy 유저 데이터 생성을 통한 Spring Test 기능 
  
## 🤝 팀문화

#### 1. 매일 미팅을 가져요

- 오전 10시에 하루를 시작하는 미팅을 해요
- 오후 5시 40분에 마무리 미팅을 해요
- 주제는 업무 상황부터 사소한 잡담까지 자유로워요



<br/>
  
  
