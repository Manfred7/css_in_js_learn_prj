import {createGlobalStyle} from "styled-components";


/*

--shadow-card-default-child
тень карточек по-умолчанию (в детской теме)

--shadow-card-hover-or-focus-adult
тень карточек при наведении и фокусе (во взрослой теме)

--shadow-card-hover-or-focus-child
тень карточек при наведении и фокусе (в детской теме)*/

export const Shadow = {
    CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
    CARD_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)',
    CARD_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)'
};

export const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-card-default-child:  0px 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus-adult:inset 0px 0px 0px 1px #FF833E;
    --shadow-card-hover-or-focus-child:inset 0px 0px 0px 1px #5FCB45;   
  }
`;
