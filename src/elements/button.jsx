// TODO реализовать компонент Button в этом файле
import styled, {css} from 'styled-components';

const Color = {
    TEXT: '#ffffff',
    BACKGROUND: '#56aaf7',
    BACKGROUND_HOVER_OR_FOCUS: '#8fc8fd',
    BACKGROUND_ACTIVE: '#2891f1',
    BACKGROUND_DISABLED: '#dfdfdf'
};

const CursorVariants = {
    POINTER: 'pointer',
    NOT_ALLOWED: 'not-allowed'
};

export const ButtonSize = {
    MEDIUM: 'medium',
    LARGE: 'large'
};
export const ButtonVariant = {
    FILLED: "filled",
    OUTLINED: "outlined"
}
export const ButtonColor = {
    ORANGE: "ORANGE",
    GREEN: "GREEN"

}
const ButtonSizeToCSS = {
    [ButtonSize.MEDIUM]: css`
      padding: 4px 8px;
      font-size: 14px;
      line-height: 20px;
    `,
    [ButtonSize.LARGE]: css`
      padding: 8px 16px;
      font-size: 16px;
      line-height: 22px;
    `
};

const ButtonColorToCSS = {
    [ButtonColor.GREEN]: css`
      background-color:#5FCB45 ;
    `,
    [ButtonColor.ORANGE]: css`
      background-color: #FF833E;
    `
};
export const StyledButton = styled.button.attrs((props) => ({
    type: props.type || 'button',
    size: props.size || ButtonSize.MEDIUM,
    variant: props.variant || ButtonVariant.FILLED,
    color: props.color || ButtonColor.ORANGE
}))`

  ${({size}) => ButtonSizeToCSS[size]}

  /*color: ${Color.TEXT};*/
  ${ ({color})=>ButtonColorToCSS[color]};
  cursor: ${CursorVariants.POINTER};
  //background: #5FCB45;
  border-radius: 4px;


  &:hover,
  &:focus {
    background-color: ${Color.BACKGROUND_HOVER_OR_FOCUS};
  }

  &:active {
    background-color: ${Color.BACKGROUND_ACTIVE};
  }

  &:disabled {
    background-color: ${Color.BACKGROUND_DISABLED};
    cursor: ${CursorVariants.NOT_ALLOWED};
  }
`;
