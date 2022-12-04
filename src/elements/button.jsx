/*
нужно разработать кнопку:

Проп size имеет два возможных значения, medium и large (по умолчанию medium). Определяет размер кнопки.
Проп variant имеет два возможных значения, filled и outlined (по умолчанию filled). Определяет оформление кнопки.
Проп color имеет два возможных значения, orange и green (по умолчанию orange). Определяет цвет кнопки.

*/
import styled, {css} from 'styled-components';
import {Radius} from "../tokens/radiuses";
import {Color} from "../tokens/сolors";

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
export const ButtonColorKind = {
    ORANGE: "ORANGE",
    GREEN: "GREEN"

}
const ButtonSizeToCSS = {
    [ButtonSize.MEDIUM]: css`
      padding: 0 4px 2px;
      font-size: 14px;
      line-height: 20px;
    `,
    [ButtonSize.LARGE]: css`
      padding: 2px 6px 4px;
      font-size: 16px;
      line-height: 22px;
    `
};

export const ButtonDetailColorTypes = {
    COLOR: "COLOR",
    HOVER_OR_FOCUS: "HOVER_OR_FOCUS",
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
}

const ButtonColors = {
    [ButtonColorKind.GREEN]: {
        [ButtonDetailColorTypes.COLOR]: `${Color.GREEN_30}`,
        [ButtonDetailColorTypes.HOVER_OR_FOCUS]: `${Color.GREEN_20}`,
        [ButtonDetailColorTypes.ACTIVE]: `${Color.GREEN_40}`,
        [ButtonDetailColorTypes.DISABLED]: `${Color.GRAY_30}`
    },
    [ButtonColorKind.ORANGE]: {
        [ButtonDetailColorTypes.COLOR]: `${Color.ORANGE_30}`,
        [ButtonDetailColorTypes.HOVER_OR_FOCUS]: `${Color.ORANGE_20}`,
        [ButtonDetailColorTypes.ACTIVE]: `${Color.ORANGE_40}`,
        [ButtonDetailColorTypes.DISABLED]: `${Color.GRAY_30}`
    }
};


export const StyledButton = styled.button.attrs((props) => ({
    type: props.type || 'button',
    size: props.size || ButtonSize.MEDIUM,
    variant: props.variant || ButtonVariant.FILLED,
    color: props.color || ButtonColorKind.ORANGE
}))`

  cursor: ${CursorVariants.POINTER};
  border-radius: ${Radius.RADIUS_4};

  ${({size}) => ButtonSizeToCSS[size]}
  ${({color, variant}) => {

    switch (variant) {
      case ButtonVariant.FILLED: {
        return ({
          border: "none",
          "background-color": ButtonColors[color].COLOR,
          color: `${Color.WHITE}`

        })
      }
      case ButtonVariant.OUTLINED: {
        return ({
          "box-sizing": "border-box",
          border: "1px solid",
          color: ButtonColors[color].COLOR
        })

      }
      default:
    }
  }}
  &:hover, &:focus {
    ${({color, variant}) => {
      switch (variant) {
        case ButtonVariant.FILLED: {
          return ({
            "background-color": ButtonColors[color][ButtonDetailColorTypes.HOVER_OR_FOCUS],
          })
        }
        case ButtonVariant.OUTLINED: {
          return ({
            color: ButtonColors[color][ButtonDetailColorTypes.HOVER_OR_FOCUS]
          })

        }
        default:
      }
    }}

  }

  &:active {
    ${({color, variant}) => {

      switch (variant) {
        case ButtonVariant.FILLED: {
          return ({
            "background-color": ButtonColors[color][ButtonDetailColorTypes.ACTIVE],
          })
        }

        case ButtonVariant.OUTLINED: {
          return ({
            color: ButtonColors[color][ButtonDetailColorTypes.ACTIVE]
          })

        }
        default:
      }
    }}

  }

  &:disabled {
    cursor: ${CursorVariants.NOT_ALLOWED};
    ${({color, variant}) => {

      switch (variant) {
        case ButtonVariant.FILLED: {
          return ({
            "background-color": ButtonColors[color].DISABLED,

          })
        }
        case ButtonVariant.OUTLINED: {
          return ({
            color: ButtonColors[color].DISABLED
          })
        }
        default:
      }
    }}
  }


`;

