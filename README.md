# TODO에 Compound Component 적용하기

TODO에 Compound Component Modal, Accordion을 적용

## 👨‍💻 팀원 소개
| 임지섭 | 윤선영 |
| --- | --- |
| ![js](https://avatars.githubusercontent.com/icebear0111)  | ![sy](https://avatars.githubusercontent.com/yunsy1103) |
<br>


## 💡 APP.jsx
```
function App() {
  return (
    <>
      <DefaultLayout>
        <section className="max-w-xl m-4 mx-auto justify-center items-center flex">
          <ModalProvider>
            <Modal>
              <Modal.Open>
                <button className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[248px] h-12 relative gap-2.5 px-5 py-3.5 rounded-lg bg-black border border-black text-white">
                  OPEN MODAL
                </button>
              </Modal.Open>
              <Modal.Content>
                <Form />
              </Modal.Content>
            </Modal>
          </ModalProvider>
          <AccordionProvider  >
              <AccordionItem />
          </AccordionProvider>
        </section>
      </DefaultLayout>
    </>
  );
}

```
<br>


### 브랜치
- branch 이름은 feat/{feature name}-{name} 으로 통일 (ex. feat/button-sy)
<br>

### 커밋 메세지
- `feat` 새로운 기능을 추가한 경우
- `fix` 버그를 고친 경우
- `docs` 문서를 수정한 경우
- `refactor` 코드 리팩토링에 대한 커밋
- `rename` 파일 혹은 폴더명을 수정한 경우
- `remove` 파일을 삭제한 경우
- ex) feat: button 추가
<br>
