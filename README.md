# TODO에 Compound Component 적용하기

✏️ Context API를 활용히여 Modal, Accordion을 구현하고 TODO 웹에 적용

<br>

## 👨‍💻 팀원 소개
| 임지섭 | 윤선영 |
| --- | --- |
| <img src="https://avatars.githubusercontent.com/icebear0111" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/yunsy1103" width="100" height="100"> |
<br>

## 💡 구현 방식
  
###  Modal
- Context API를 사용해 모달의 열림/닫힘 상태 관리
- Modal.jsx로 모달의 열림/닫힘 동작을 관리하며 트리거(Open)와 내용을 컴파운드 컴포넌트로 제공

```
Modal
 ├── Modal.Open (모달 열기 버튼 또는 트리거)
 └── Modal.Content (모달 내용 및 렌더링)
```
<br>

### Accordion
- Context API를 통한 상태 관리( toggle 동작 )
- AccordionItem.jsx로 개별 항목의 열림/닫힘 상태를 관리하며  제목, 카테고리, 내용을 컴파운드 컴포넌트로 제공
  
```
AccordionProvider
 ├── AccordionItem
```

<br><br>

<img width="497" alt="스크린샷 2025-01-16 오후 5 35 32" src="https://github.com/user-attachments/assets/b2c7dc49-81a3-4460-96a0-f3b91229f69e" />


<br><br>

## 💡 APP.jsx
<img width="421" alt="스크린샷 2025-01-16 오후 5 24 12" src="https://github.com/user-attachments/assets/ef7f8243-e0f4-4b11-b7ff-b21603dec670" />


<br>
<br>
<br>


## 📌 브랜치
- branch 이름은 feat/{feature name}-{name} 으로 통일 (ex. feat/button-sy)
<br>

## 📌 커밋 메세지
- `feat` 새로운 기능을 추가한 경우
- `fix` 버그를 고친 경우
- `docs` 문서를 수정한 경우
- `refactor` 코드 리팩토링에 대한 커밋
- `rename` 파일 혹은 폴더명을 수정한 경우
- `remove` 파일을 삭제한 경우
- ex) feat: button 추가
<br>
