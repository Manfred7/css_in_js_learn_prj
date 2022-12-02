import {ButtonColorKind, ButtonSize, ButtonVariant, StyledButton} from "./elements/button";
import {GlobalResets} from "./utils/globalResets";
import {GlobalFonts} from "./utils/globalFonts";
import {GlobalColors} from "./utils/globalColors";
import {GlobalGradients} from "./utils/globalGradients";
import {GlobalShadows} from "./utils/globalShadows";


function App() {
    return (
        <div className="App">
            <GlobalResets/>
            <GlobalFonts/>
            <GlobalColors/>
            <GlobalGradients/>
            <GlobalShadows/>
            {/*<ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>*/}

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
