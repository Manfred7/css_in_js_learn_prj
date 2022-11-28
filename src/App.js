
import {ButtonColor, ButtonSize, ButtonVariant, StyledButton} from "./elements/button";



function App() {
  return (
    <div className="App">
      <StyledButton size={ButtonSize.MEDIUM} variant={ButtonVariant.FILLED} >Кнопка</StyledButton>
        <StyledButton size={ButtonSize.MEDIUM} variant={ButtonVariant.OUTLINED} >Кнопка</StyledButton>
        <StyledButton size={ButtonSize.LARGE} variant={ButtonVariant.OUTLINED}  color={ButtonColor.GREEN}>Кнопка green</StyledButton>

      <StyledButton size={ButtonSize.LARGE} color={ButtonColor.GREEN}>Кнопка green</StyledButton>


    </div>
  );
}

export default App;
