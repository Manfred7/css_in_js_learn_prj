import {ButtonColorKind, ButtonSize, ButtonVariant, StyledButton} from "./elements/button";


function App() {
    return (
        <div className="App">
            <div>
                <StyledButton size={ButtonSize.MEDIUM}
                              variant={ButtonVariant.FILLED}
                              color={ButtonColorKind.GREEN}>
                    Кнопка
                </StyledButton>
                <StyledButton size={ButtonSize.MEDIUM}
                              variant={ButtonVariant.OUTLINED}
                              color={ButtonColorKind.GREEN}>
                    Кнопка
                </StyledButton>
                <StyledButton size={ButtonSize.LARGE}
                              color={ButtonColorKind.GREEN}
                              disabled={false}>
                    Кнопка
                </StyledButton>
                <StyledButton size={ButtonSize.LARGE}
                              color={ButtonColorKind.GREEN}
                              disabled={true}>
                    Кнопка
                </StyledButton>
            </div>

            <div>
                <StyledButton size={ButtonSize.MEDIUM}
                              variant={ButtonVariant.FILLED}
                              color={ButtonColorKind.ORANGE}>
                    Кнопка
                </StyledButton>
                <StyledButton size={ButtonSize.MEDIUM}
                              variant={ButtonVariant.OUTLINED}
                              color={ButtonColorKind.ORANGE}>
                    Кнопка
                </StyledButton>

                <StyledButton size={ButtonSize.LARGE}
                              color={ButtonColorKind.ORANGE}
                              disabled={false}>
                    Кнопка
                </StyledButton>

                <StyledButton size={ButtonSize.LARGE}
                              variant={ButtonVariant.OUTLINED}
                              color={ButtonColorKind.ORANGE}
                              disabled={true}>
                    Кнопка
                </StyledButton>
            </div>


        </div>
    );
}

export default App;
