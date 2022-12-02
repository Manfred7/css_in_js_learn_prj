import styled from 'styled-components';

const IconName = {
    ARROW_RIGHT: 'arrow-right',
    BAR_CHART_SMALL: 'bar-chart-small',
    BAR_CHART: 'bar-chart',
    BIKE_ADULT: 'bike-adult',
    BIKE_CHILD: 'bike-child',
    CHEVRON_DOWN: 'chevron-down',
    FILTERS: 'filters',
    HEART_SMALL: 'heart-small',
    HEART: 'heart',
    MENU: 'menu',
    SEARCH: 'search',
    SHOPPING_CART: 'shopping-cart',
    TELEGRAM: 'telegram',
    USER: 'user',
    VK: 'vk',
    YOUTUBE: 'youtube'
};

const StyledSpriteWithIcons = styled.svg`
  display: none;
`;

function SpriteWithIcons() {
    return (
        <StyledSpriteWithIcons xmlns='http://www.w3.org/2000/svg'>
            <symbol id='arrow-right'>
                <path
                    d='M11.325 6.135a.46.46 0 0 0-.65.65l3.755 3.755H6.46a.46.46 0 0 0 0 .92h7.97l-3.755 3.755a.46.46 0 1 0 .65.65l4.54-4.54.002-.002a.458.458 0 0 0-.006-.653l-4.536-4.535Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='bar-chart-small'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 6.194c.261 0 .473.212.473.473v6.666a.473.473 0 0 1-.946 0V6.667c0-.261.212-.473.473-.473ZM8 2.194c.261 0 .473.212.473.473v10.666a.473.473 0 0 1-.946 0V2.667c0-.261.212-.473.473-.473ZM4 8.86c.261 0 .473.212.473.473v4a.473.473 0 1 1-.946 0v-4c0-.26.212-.472.473-.472Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='bar-chart'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.5 8.517a.65.65 0 0 1 .65.65v9.166a.65.65 0 1 1-1.3 0V9.167a.65.65 0 0 1 .65-.65ZM11 3.017a.65.65 0 0 1 .65.65v14.666a.65.65 0 1 1-1.3 0V3.667a.65.65 0 0 1 .65-.65ZM5.5 12.183a.65.65 0 0 1 .65.65v5.5a.65.65 0 1 1-1.3 0v-5.5a.65.65 0 0 1 .65-.65Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='bike-adult'>
                <path
                    d='m9.597 5.517.027-.198h-.001l-.026.198Zm-.165-.265a.2.2 0 0 0 .171.225.2.2 0 0 0 .225-.172l-.396-.053Zm-3.933 5.414-.013.2a.2.2 0 0 0 .211-.172l-.198-.028Zm.476.06-.198-.028a.2.2 0 0 0 .162.224l.036-.197Zm.3-1.972-.02-.2a.2.2 0 0 0-.177.167l.197.033Zm9.878 1.978.03.198a.2.2 0 0 0 .162-.253l-.192.055Zm.486-.044-.193.053a.2.2 0 0 0 .2.146l-.007-.2Zm-1.83-2.298-.15-.132a.2.2 0 0 0 .09.323l.06-.19Zm1.573-1.78v-.2a.2.2 0 0 0-.15.067l.15.133Zm-.64 0 .15.132a.2.2 0 0 0-.15-.332v.2Zm-1.454 1.646-.041.196a.2.2 0 0 0 .19-.064l-.15-.132Zm-7.927.007-.197-.035a.2.2 0 0 0 .216.234l-.02-.199Zm-.927 2.88.198.026a.2.2 0 0 0-.187-.226l-.011.2Zm.476.058.037-.197a.2.2 0 0 0-.236.17l.199.027Zm10.363-.001.195-.045a.2.2 0 0 0-.222-.153l.027.198Zm.483-.035-.001-.2a.2.2 0 0 0-.194.242l.195-.042Zm.1 4.11.007-.2c-.015-.001-.029 0-.043.002a.2.2 0 0 0 .03.397l.006-.2ZM7.434 5.518c-.301.123-.558.305-.715.569l.344.204c.098-.165.271-.3.523-.403l-.152-.37Zm.971-.217a3.44 3.44 0 0 0-.97.217l.15.37c.252-.103.553-.16.856-.189l-.036-.398Zm.854-.014a6.07 6.07 0 0 0-.854.014l.036.398c.3-.027.586-.023.797-.012l.021-.4Zm.267.02a5.397 5.397 0 0 0-.267-.02l-.02.4c.104.005.19.013.248.018l.04-.398Zm.073.008a3.979 3.979 0 0 0-.073-.008l-.039.398.066.007.046-.397Zm.02.002-.02-.002-.046.397.015.002.05-.397Zm.004 0h-.004l-.05.397h.003l.05-.396Zm.046-.033a.04.04 0 0 1-.045.034l-.053.396a.44.44 0 0 0 .495-.377l-.397-.053Zm-.034-.045a.04.04 0 0 1 .034.045l.397.053a.44.44 0 0 0-.378-.494l-.053.396Zm.193.065.032-.236-.396-.053-.028.204-.004.032.396.053Zm-.166-.263c.187.07-.049.194-.198-.026v.003l-.004.026-.024.175-.004.032.396.053.028-.207.004-.026V5.07c-.15-.22-.385-.097-.198-.027Zm-.029.198h.002l.053-.396h-.003l-.052.396Zm-.005 0h.005l.052-.397H9.68l-.051.396Zm-.02-.003.02.002.05-.396-.023-.003-.046.397Zm-.074-.008.075.008.046-.397a4.344 4.344 0 0 0-.082-.009l-.039.398Zm-.27-.02a6.317 6.317 0 0 1 .27.02l.04-.398a6.381 6.381 0 0 0-.29-.021l-.02.399Zm-.866.014c.33-.03.639-.026.865-.014l.021-.4a6.548 6.548 0 0 0-.923.016l.037.398Zm-.994.222c.312-.127.664-.192.994-.222l-.037-.398a3.913 3.913 0 0 0-1.108.25l.151.37Zm-.753.602c.168-.284.442-.475.753-.602l-.15-.37c-.362.148-.72.385-.947.768l.344.204Zm-.255.707c.085-.318.17-.565.255-.707l-.344-.204c-.116.194-.212.49-.297.809l.386.102Zm-.255 1.16c.084-.444.17-.84.255-1.16l-.386-.102c-.089.332-.177.739-.262 1.187l.393.075Zm-.444 2.78c.136-.972.288-1.959.444-2.78l-.393-.075a60.243 60.243 0 0 0-.447 2.8l.396.055Zm-.185-.228c-.099-.006-.199-.01-.3-.01v.4c.092 0 .183.004.274.01l.026-.4Zm-.3-.01A4.412 4.412 0 0 0 .8 14.87h.4a4.012 4.012 0 0 1 4.012-4.013v-.4ZM.8 14.87a4.412 4.412 0 0 0 4.412 4.412v-.4A4.012 4.012 0 0 1 1.2 14.87H.8Zm4.412 4.412a4.412 4.412 0 0 0 4.412-4.412h-.4a4.012 4.012 0 0 1-4.012 4.012v.4Zm4.412-4.412a4.414 4.414 0 0 0-3.613-4.34l-.072.393a4.014 4.014 0 0 1 3.285 3.947h.4ZM6.078 8.72a72.334 72.334 0 0 0-.301 1.977l.396.055c.093-.67.195-1.345.3-1.966l-.395-.066Zm.218.232.22-.022-.04-.398c-.092.008-.166.016-.222.022l.042.398Zm.22-.022c.212-.021.518-.05.89-.08l-.032-.398c-.375.03-.683.058-.898.08l.04.398Zm.89-.08c.745-.06 1.753-.126 2.808-.152l-.01-.4c-1.064.027-2.08.093-2.83.154l.032.398Zm2.808-.152c1.058-.025 2.151-.01 3.07.09l.043-.398c-.944-.103-2.057-.118-3.123-.091l.01.4Zm3.07.09c.46.05.866.12 1.197.213l.108-.386a7.98 7.98 0 0 0-1.261-.225l-.044.398Zm1.197.213c.338.094.562.203.69.309l.256-.308c-.191-.158-.478-.286-.838-.387l-.108.386Zm.69.309c.296.245.548.704.745 1.33l.382-.12c-.205-.65-.487-1.198-.871-1.518l-.256.308Zm.745 1.33c.016.048.03.097.045.147l.384-.111a6.95 6.95 0 0 0-.047-.156l-.381.12Zm.207-.106a4.413 4.413 0 0 0-3.748 4.362h.4a4.014 4.014 0 0 1 3.408-3.967l-.06-.395Zm-3.748 4.362a4.412 4.412 0 0 0 4.413 4.413v-.4a4.012 4.012 0 0 1-4.013-4.013h-.4Zm4.413 4.413a4.412 4.412 0 0 0 4.412-4.413h-.4a4.012 4.012 0 0 1-4.012 4.013v.4Zm4.412-4.413a4.412 4.412 0 0 0-4.412-4.412v.4a4.012 4.012 0 0 1 4.012 4.012h.4Zm-4.412-4.412c-.053 0-.105 0-.156.003l.014.4a4.18 4.18 0 0 1 .142-.003v-.4Zm.043.15a7.711 7.711 0 0 0-.076-.258l-.381.12c.025.08.049.161.072.244l.385-.107Zm-.076-.258c-.213-.678-.53-1.334-1.022-1.743l-.256.308c.403.334.69.9.897 1.555l.381-.12Zm-1.022-1.743c-.232-.192-.536-.33-.864-.434l-.12.381c.303.096.552.215.728.361l.256-.308Zm-.774-.111 1.573-1.78-.3-.266-1.573 1.781.3.265Zm1.423-1.713h1.467v-.4h-1.467v.4Zm1.467 0a.44.44 0 0 0 .44-.44h-.4a.04.04 0 0 1-.04.04v.4Zm.44-.44a.44.44 0 0 0-.44-.44v.4a.04.04 0 0 1 .04.04h.4Zm-.44-.44h-1.575v.4h1.575v-.4Zm-1.575 0h-2.055v.4h2.055v-.4Zm-2.055 0a.44.44 0 0 0-.44.44h.4a.04.04 0 0 1 .04-.04v-.4Zm-.44.44c0 .243.197.44.44.44v-.4a.04.04 0 0 1-.04-.04h-.4Zm.44.44h1.523v-.4H14.22v.4Zm1.373-.333-1.454 1.647.3.264 1.454-1.646-.3-.265ZM14.33 8.06a9.858 9.858 0 0 0-.95-.146l-.043.398c.325.035.632.081.91.14l.083-.392Zm-.95-.146c-.975-.106-2.112-.12-3.186-.094l.01.4c1.066-.026 2.183-.011 3.133.092l.043-.398Zm-3.186-.094a52.34 52.34 0 0 0-2.858.155l.033.399c.75-.06 1.768-.128 2.835-.154l-.01-.4Zm-2.858.155c-.378.03-.689.06-.905.08l.039.398c.214-.02.523-.05.899-.08l-.033-.398Zm-.905.08-.09.01.04.397.089-.009-.04-.398Zm-.21-.127c-.02.098-.038.198-.056.3l.393.07.055-.295-.393-.075Zm.253-1.153c-.084.317-.17.71-.254 1.153l.393.075c.083-.438.167-.821.248-1.125l-.387-.103Zm.246-.687c-.078.132-.161.369-.246.687l.387.103c.084-.318.156-.507.203-.586l-.344-.204Zm-1.274 4.855a4.005 4.005 0 0 0-.233-.007v.4c.07 0 .14.002.21.006l.023-.4Zm-.233-.007a3.933 3.933 0 0 0-3.933 3.933h.4a3.533 3.533 0 0 1 3.533-3.533v-.4ZM1.28 14.869a3.933 3.933 0 0 0 3.933 3.933v-.4a3.533 3.533 0 0 1-3.533-3.533h-.4Zm3.933 3.933a3.933 3.933 0 0 0 3.933-3.933h-.4a3.533 3.533 0 0 1-3.533 3.533v.4Zm3.933-3.933a3.934 3.934 0 0 0-3.198-3.865l-.075.394a3.534 3.534 0 0 1 2.873 3.47h.4Zm-3.434-3.695c-.13.959-.24 1.873-.32 2.565l.396.046c.08-.69.192-1.602.32-2.557l-.396-.054Zm-.32 2.565c-.044.374-.08.684-.103.9l.398.043c.023-.215.058-.523.101-.897l-.397-.046Zm-.103.9a99.793 99.793 0 0 0-.027.249l.398.043.027-.249-.398-.044Zm-.027.249-.004.034.398.042.004-.033-.398-.043Zm-.004.034-.003.031.398.043.003-.032-.398-.042Zm-.003.031-.002.017.398.042.002-.016-.398-.043Zm-.002.017v.004l.398.042v-.004l-.398-.042Zm0 .004v.001l.397.042-.397-.043Zm.199.022c-.2-.02-.183-.08-.15-.133a.351.351 0 0 1 .053-.042.2.2 0 0 1 .083-.024h.018a.378.378 0 0 1 .012 0l-.026-.003-.168-.017-.04-.004-.042.398.21.021.027.003a.407.407 0 0 1 .018.001h.018a.202.202 0 0 0 .083-.024.358.358 0 0 0 .053-.043c.034-.052.05-.112-.15-.133Zm-.218-.223A15.508 15.508 0 0 0 5 14.748h-.002H5a.685.685 0 0 0 .017.003.237.237 0 0 0 .058.023c.077.082.098.193-.101.172-.2-.02-.179.09-.102.173a.36.36 0 0 0 .037.017l.022.006a.22.22 0 0 0 .016.003H4.956l.026.003.21.023.041-.398Zm-.06.194v-.001l-.398-.042v.001l.398.042Zm0-.001v-.004l-.398-.042v.004l.398.042Zm0-.004.002-.017-.398-.042-.002.017.398.042Zm.002-.017.007-.066-.398-.042a43.48 43.48 0 0 0-.007.066l.398.042Zm.007-.066a120.665 120.665 0 0 1 .027-.25l-.397-.043-.028.25.398.043Zm.027-.25.102-.9-.397-.045c-.044.375-.079.685-.102.902l.397.044Zm.102-.9c.08-.69.192-1.603.32-2.56l-.396-.053c-.13.96-.24 1.875-.321 2.568l.397.046Zm-.12 1.442.239.024.041-.398-.198-.02-.04-.004-.042.398Zm.06-.196a.04.04 0 0 1-.043.036l-.042.398a.44.44 0 0 0 .483-.392l-.397-.042Zm-.043.036a.04.04 0 0 1-.035-.044l-.398-.042a.44.44 0 0 0 .391.484l.042-.398Zm-.256.134.24.026.041-.398-.039-.005-.2-.02-.042.397Zm11.126-3.901c.104.457.178.943.23 1.417l.397-.043a13.083 13.083 0 0 0-.237-1.463l-.39.089Zm-2.823 3.653a3.534 3.534 0 0 1 3.045-3.5l-.054-.396a3.934 3.934 0 0 0-3.391 3.896h.4Zm3.533 3.533a3.533 3.533 0 0 1-3.533-3.533h-.4a3.933 3.933 0 0 0 3.933 3.933v-.4Zm3.532-3.533a3.533 3.533 0 0 1-3.532 3.533v.4a3.933 3.933 0 0 0 3.932-3.933h-.4Zm-3.532-3.533a3.533 3.533 0 0 1 3.532 3.533h.4a3.933 3.933 0 0 0-3.932-3.933v.4Zm-.03 0h.03v-.4h-.033l.003.4Zm.424 1.202a13.762 13.762 0 0 0-.23-1.444l-.39.085c.1.461.172.941.222 1.402l.398-.043Zm.116 1.9a21.312 21.312 0 0 0-.116-1.9l-.398.043c.077.708.105 1.374.114 1.864l.4-.007Zm.002.596a20.7 20.7 0 0 0-.002-.596l-.4.007c.004.244.004.445.002.584l.4.005Zm-.003.166.003-.166-.4-.005v.018l-.003.144.4.009Zm0 .034v-.034l-.4-.01v.033l.4.011Zm-.001.01v-.01l-.4-.011v.01l.4.012Zm0 .012v-.011l-.4-.012v.011l.4.012Zm0 .004v-.004l-.4-.012v.003l.4.013Zm0 .001v-.001l-.4-.013.4.014Zm-.447.185a200.482 200.482 0 0 0 .237.008h.03c.003-.001.014-.002.027-.006a.352.352 0 0 0 .044-.016c.077-.07.108-.17-.091-.178-.2-.009-.169-.108-.092-.178a.352.352 0 0 1 .044-.016l.027-.005h.024-.001l-.026-.002-.172-.006h-.037l-.014.399Zm.253-.392-.202-.007h-.037l-.014.399.24.008.013-.4Zm-.261.631a.44.44 0 0 0 .454-.424l-.4-.014a.04.04 0 0 1-.04.039l-.014.4Zm-.425-.454a.44.44 0 0 0 .425.454l.014-.4a.04.04 0 0 1-.039-.04l-.4-.014Zm0-.003v.003l.4.014v-.004l-.4-.013Zm0-.01v.01l.4.013v-.01l-.4-.012Zm.001-.006v.007l.4.012v-.008l-.4-.011Zm0-.008v.008l.4.011v-.008l-.4-.011Zm0-.015v.015l.4.01v-.015l-.4-.01Zm0-.01v.01l.4.01v-.01l-.4-.01Zm.003-.155-.002.155.4.01.002-.14v-.02l-.4-.005Zm-.002-.571c.005.24.004.435.003.57l.4.005c.001-.138.002-.338-.003-.582l-.4.007Zm-.11-1.82c.075.689.102 1.34.11 1.82l.4-.007a20.807 20.807 0 0 0-.113-1.856l-.397.043Z'
                    fill='currentColor'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.431 5.3a.2.2 0 0 1 0-.048l.005-.032a6.317 6.317 0 0 0-1.038.003c-.33.03-.682.095-.994.222-.311.127-.585.318-.753.602-.085.142-.17.39-.255.707-.085.32-.17.716-.255 1.16a59.865 59.865 0 0 0-.444 2.78.2.2 0 0 1-.211.172 4.012 4.012 0 1 0 .453.056.2.2 0 0 1-.162-.224c.094-.673.195-1.352.3-1.977a.2.2 0 0 1 .177-.166c.056-.006.13-.014.222-.022a51.849 51.849 0 0 1 3.728-.233c1.066-.027 2.179-.012 3.123.091a7.98 7.98 0 0 1 1.262.225c.36.101.647.229.838.387.384.32.666.868.871 1.518l.047.156a.2.2 0 0 1-.162.253 4.014 4.014 0 1 0 .463-.043.2.2 0 0 1-.2-.146 7.275 7.275 0 0 0-.072-.244c-.206-.655-.494-1.22-.897-1.555-.176-.146-.425-.265-.729-.36a.2.2 0 0 1-.09-.324l1.574-1.78a.2.2 0 0 1 .15-.068h1.467a.04.04 0 1 0 0-.08h-3.63a.04.04 0 1 0 0 .08h1.523a.2.2 0 0 1 .15.332l-1.454 1.646a.2.2 0 0 1-.191.064 9.462 9.462 0 0 0-.91-.14c-.95-.103-2.068-.118-3.134-.092a51.934 51.934 0 0 0-3.734.233l-.089.01a.2.2 0 0 1-.216-.235l.055-.3c.084-.442.17-.836.254-1.153.085-.318.168-.555.246-.687.157-.264.414-.446.715-.57a3.44 3.44 0 0 1 .971-.216A6.07 6.07 0 0 1 9.431 5.3Zm-3.843 5.715a.2.2 0 0 1 .044.154 143.504 143.504 0 0 0-.438 3.6l.04.004.039.004a99.793 99.793 0 0 1 .117-1.038c.08-.692.192-1.606.321-2.565a.2.2 0 0 1 .236-.17 3.934 3.934 0 0 1-.735 7.798 3.933 3.933 0 1 1 .233-7.86.2.2 0 0 1 .143.073Zm10.658-.014a.2.2 0 0 1 .222.154c.108.477.184.979.237 1.463a20.807 20.807 0 0 1 .116 2.438v.021a.198.198 0 0 1 .042-.003l.037.001v-.018a20.884 20.884 0 0 0-.116-2.448c-.05-.46-.122-.94-.223-1.402a.2.2 0 0 1 .194-.242h.033a3.933 3.933 0 1 1-.542.037Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='bike-child'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.857 6.183c.127-.213.34-.37.616-.483.275-.112.595-.173.908-.202a5.837 5.837 0 0 1 1.146.014l.017.002h.004a.238.238 0 1 0 .064-.472l-.031.235.031-.235h-.002l-.006-.001a3.062 3.062 0 0 0-.1-.011 6.314 6.314 0 0 0-1.167-.006c-.339.03-.71.098-1.044.235-.335.136-.649.35-.846.68-.1.168-.19.437-.274.754-.086.325-.172.723-.257 1.167a59.689 59.689 0 0 0-.443 2.773 4.188 4.188 0 1 0 .473.059c.096-.686.2-1.378.308-2.013a11.713 11.713 0 0 1 .262.115c.293.132.709.331 1.196.6.975.538 2.233 1.352 3.37 2.457a27.815 27.815 0 0 1 2.139 2.338 2.758 2.758 0 1 0 .381-.287 28.849 28.849 0 0 0-1.836-2.046l1.6-1.811h1.458a.238.238 0 1 0 0-.477h-3.61a.238.238 0 0 0 0 .477h1.515l-1.302 1.475-.012-.012c-1.178-1.143-2.474-1.98-3.473-2.531a17.088 17.088 0 0 0-1.604-.779l.047-.25c.083-.437.167-.823.249-1.132.084-.316.16-.528.223-.633Zm-1.449 4.924a3.711 3.711 0 1 0 .473.058 142.537 142.537 0 0 0-.454 3.752l-.002.022-.237-.025-.237-.025.002-.022.007-.066a96.364 96.364 0 0 1 .13-1.145c.08-.687.19-1.596.318-2.549Zm-.22 3.807.237.025a.239.239 0 0 1-.474-.05l.237.025Zm8.647.051a30.5 30.5 0 0 0-.315-.404 2.281 2.281 0 1 0 .383-.284 30.247 30.247 0 0 1 1.085 1.461 18.236 18.236 0 0 1 .257.381l.008.013.006.008.003.006.001.001-.2.13.2-.13a.238.238 0 1 1-.402.257v-.001l-.003-.005-.013-.019-.05-.077a27.173 27.173 0 0 0-.96-1.337Z'
                    fill='currentColor'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11.612 5.042a.238.238 0 1 1-.064.472h-.004l-.017-.002a5.671 5.671 0 0 0-.325-.026 5.837 5.837 0 0 0-.821.012c-.313.029-.633.09-.908.202-.275.112-.49.27-.616.483-.062.105-.139.317-.223.633a16.72 16.72 0 0 0-.296 1.382l.019.008c.083.034.203.085.355.153.303.137.73.342 1.23.618.962.53 2.198 1.326 3.34 2.404l.133.127.012.012 1.302-1.475h-1.514a.238.238 0 1 1 0-.477h3.61a.238.238 0 0 1 0 .477h-1.46l-1.6 1.81c.704.71 1.323 1.418 1.837 2.047a2.758 2.758 0 1 1-.381.287 27.815 27.815 0 0 0-2.138-2.338c-1.138-1.105-2.396-1.919-3.371-2.457a16.608 16.608 0 0 0-1.27-.633l-.013-.006-.175-.076-.034.203a74.07 74.07 0 0 0-.274 1.81 4.19 4.19 0 1 1-.473-.059c.135-.967.287-1.952.443-2.773.085-.444.17-.842.257-1.167.085-.317.175-.586.274-.753.197-.332.51-.545.846-.681a3.694 3.694 0 0 1 1.044-.235 6.314 6.314 0 0 1 1.076-.002h.003a5.625 5.625 0 0 1 .166.016l.022.003h.008Zm-.006-.202.023.002.006.001h.003a.439.439 0 0 1-.116.87h-.003l-.016-.003a5.473 5.473 0 0 0-.313-.025 5.636 5.636 0 0 0-.791.013c-.302.027-.6.085-.85.187s-.423.236-.52.4c-.047.079-.118.266-.202.582a16.533 16.533 0 0 0-.263 1.21 17.287 17.287 0 0 1 1.475.725c.97.535 2.22 1.338 3.375 2.43l.872-.987h-1.071a.438.438 0 0 1 0-.877h3.609a.438.438 0 0 1 0 .877h-1.369l-1.416 1.603a29.09 29.09 0 0 1 1.609 1.795 2.958 2.958 0 1 1-.7.53 27.406 27.406 0 0 0-2.005-2.179c-1.12-1.088-2.362-1.892-3.328-2.425a16.41 16.41 0 0 0-1.206-.604 72.388 72.388 0 0 0-.239 1.57 4.39 4.39 0 0 1-.982 8.665 4.388 4.388 0 1 1 .112-8.775c.13-.91.272-1.828.42-2.603.084-.445.172-.85.26-1.18.084-.317.18-.611.295-.805.226-.38.582-.617.942-.764.36-.146.752-.216 1.102-.248a6.513 6.513 0 0 1 1.287.015Zm-4.634 9.85.016-.138a146.313 146.313 0 0 1 .393-3.246c.01-.066.018-.132.027-.199a3.829 3.829 0 0 0-.2-.006h-.02a3.711 3.711 0 1 0 .693.064l-.026.199a144.353 144.353 0 0 0-.42 3.488l-.01.087-.237-.025-.237-.025.01-.088.011-.11Zm.066.41a.238.238 0 0 1-.087-.21l.199.02.038.004.038.004c.199.021.2.02.2.02a.239.239 0 0 1-.388.161Zm-.09-.211-.196-.02.01-.09a101.077 101.077 0 0 1 .128-1.146c.074-.635.174-1.459.29-2.332a3.511 3.511 0 1 0 .87.106 144.36 144.36 0 0 0-.417 3.466l-.009.082v.004m-.676-.07-.196-.02a.438.438 0 1 0 .872.09m9.655 1.416a.237.237 0 0 1-.418.03v-.002l-.003-.005-.013-.019-.05-.077a27.173 27.173 0 0 0-1.275-1.741 2.282 2.282 0 0 0-.739 1.681 2.281 2.281 0 1 0 1.122-1.965 27.704 27.704 0 0 1 .31.399 27.833 27.833 0 0 1 1.032 1.443l.008.013.006.008.003.006.001.001-.2.13.032-.022.168-.108a.24.24 0 0 1 .016.228Zm-.014-.229-.002.001.168-.107v-.002l-.004-.006-.006-.008-.008-.014a28.049 28.049 0 0 0-1.204-1.668 2.081 2.081 0 1 1-.706.52l.172.225a27.173 27.173 0 0 1 1.002 1.401l.012.018.003.005m.573-.365.166-.106a.44.44 0 0 1-.738.472'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='chevron-down'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.04 9.79a.65.65 0 0 1 .92 0L11 14.83l5.04-5.04a.65.65 0 1 1 .92.92l-5.5 5.5a.65.65 0 0 1-.92 0l-5.5-5.5a.65.65 0 0 1 0-.92Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='filters'>
                <path
                    d='M3.5 8.499h4.454A2.003 2.003 0 0 0 9.889 10c.932 0 1.711-.64 1.935-1.501H18.5a.5.5 0 1 0 0-.998h-6.676A2.003 2.003 0 0 0 9.889 6c-.933 0-1.712.64-1.935 1.501H3.5a.5.5 0 1 0 0 .998Zm6.389-1.502c.554 0 1.006.45 1.006 1.003a1.005 1.005 0 0 1-2.012 0c0-.553.451-1.003 1.006-1.003ZM18.5 11.502h-1.07A2.003 2.003 0 0 0 15.493 10c-.932 0-1.711.64-1.935 1.502H3.5a.5.5 0 1 0 0 .996h10.059A2.003 2.003 0 0 0 15.494 14c.933 0 1.712-.64 1.935-1.502H18.5a.5.5 0 1 0 0-.996Zm-3.006 1.5c-.554 0-1.006-.449-1.006-1.002a1.005 1.005 0 0 1 2.012 0c0 .553-.451 1.003-1.006 1.003ZM18.5 15.502H8.812A2.002 2.002 0 0 0 6.878 14c-.933 0-1.712.64-1.936 1.502H3.5a.5.5 0 1 0 0 .996h1.442A2.003 2.003 0 0 0 6.878 18c.932 0 1.71-.64 1.934-1.502H18.5a.5.5 0 1 0 0-.997Zm-11.622 1.5c-.555 0-1.006-.449-1.006-1.002a1.005 1.005 0 0 1 2.01 0c0 .553-.45 1.003-1.004 1.003Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='heart-small'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.715 2.841a4.14 4.14 0 0 1 4.512 6.753l-5.893 5.894a.473.473 0 0 1-.668 0L1.772 9.594A4.14 4.14 0 0 1 7.627 3.74L8 4.112l.372-.373a4.14 4.14 0 0 1 1.343-.898Zm3.844 1.567a3.194 3.194 0 0 0-4.518 0l-.707.706a.473.473 0 0 1-.668 0l-.707-.706A3.195 3.195 0 1 0 2.44 8.926L8 14.485l5.559-5.56a3.195 3.195 0 0 0 0-4.517Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='heart'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.359 2.532a5.691 5.691 0 0 1 7.872 5.26 5.692 5.692 0 0 1-1.668 4.025l-8.103 8.104a.65.65 0 0 1-.92 0l-8.103-8.104a5.693 5.693 0 0 1 8.05-8.05l.513.511.512-.512a5.692 5.692 0 0 1 1.847-1.234Zm5.284 2.153a4.392 4.392 0 0 0-6.212 0l-.971.972a.65.65 0 0 1-.92 0l-.971-.971a4.393 4.393 0 0 0-6.213 6.212L11 18.542l7.644-7.644a4.391 4.391 0 0 0 0-6.213Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='menu'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.864 18c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 0 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 18ZM2.864 9c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 1 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 9ZM2.864 27c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 0 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 27Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='search'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10 3.65a6.35 6.35 0 1 0 0 12.7 6.35 6.35 0 0 0 0-12.7ZM2.35 10a7.65 7.65 0 1 1 15.3 0 7.65 7.65 0 0 1-15.3 0Z'
                    fill='currentColor'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.54 14.54a.65.65 0 0 1 .92 0l4 4a.65.65 0 0 1-.92.92l-4-4a.65.65 0 0 1 0-.92Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='shopping-cart'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.25 18.983a.267.267 0 1 0 0 .534.267.267 0 0 0 0-.534Zm-1.567.267a1.567 1.567 0 1 1 3.134 0 1.567 1.567 0 0 1-3.134 0ZM18.333 18.983a.267.267 0 1 0 0 .534.267.267 0 0 0 0-.534Zm-1.566.267a1.567 1.567 0 1 1 3.133 0 1.567 1.567 0 0 1-3.133 0ZM.267.917a.65.65 0 0 1 .65-.65h3.666a.65.65 0 0 1 .638.522l.813 4.06h15.05a.65.65 0 0 1 .638.773l-1.467 7.69v.005a2.483 2.483 0 0 1-2.477 2H8.879a2.483 2.483 0 0 1-2.476-2L4.87 5.66a.647.647 0 0 1-.013-.063l-.806-4.03H.917a.65.65 0 0 1-.65-.65ZM6.294 6.15l1.383 6.913a1.186 1.186 0 0 0 1.184.954h8.935a1.183 1.183 0 0 0 1.183-.95v-.003l1.319-6.914H6.294Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='telegram'>
                <path
                    d='M2.306 10.319c5.1-2.4 8.501-3.981 10.203-4.745C17.368 3.392 18.377 3.013 19.035 3c.145-.002.469.036.678.22.177.155.226.364.25.511.023.147.052.482.029.744-.264 2.987-1.403 10.235-1.983 13.58-.245 1.416-.728 1.89-1.195 1.937-1.016.1-1.788-.725-2.772-1.422-1.54-1.09-2.41-1.768-3.904-2.831-1.727-1.23-.608-1.905.377-3.009.257-.289 4.734-4.684 4.82-5.083.011-.05.021-.236-.081-.334-.102-.098-.253-.065-.362-.038-.155.038-2.614 1.793-7.38 5.266-.698.518-1.33.77-1.897.757-.625-.015-1.826-.382-2.72-.695-1.095-.385-1.966-.588-1.89-1.241.04-.34.473-.688 1.301-1.043Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='user'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4.281 14.364A4.317 4.317 0 0 1 7.333 13.1h7.334a4.317 4.317 0 0 1 4.316 4.317v1.833a.65.65 0 1 1-1.3 0v-1.833a3.017 3.017 0 0 0-3.016-3.017H7.333a3.017 3.017 0 0 0-3.016 3.017v1.833a.65.65 0 1 1-1.3 0v-1.833c0-1.145.455-2.243 1.264-3.053ZM11 3.4a3.017 3.017 0 1 0 0 6.033A3.017 3.017 0 0 0 11 3.4ZM6.683 6.417a4.317 4.317 0 1 1 8.633 0 4.317 4.317 0 0 1-8.633 0Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='vk'>
                <path
                    d='M11.944 17.535c-6.864 0-10.779-4.697-10.94-12.525h3.453c.11 5.74 2.64 8.17 4.647 8.671V5.01h3.242v4.948c1.977-.21 4.065-2.469 4.767-4.958h3.232a9.565 9.565 0 0 1-4.396 6.253 9.906 9.906 0 0 1 5.149 6.282h-3.563c-.763-2.378-2.67-4.225-5.19-4.476v4.476h-.4Z'
                    fill='currentColor'
                />
            </symbol>
            <symbol id='youtube'>
                <path
                    d='M20.5 6.277c-.25-.938-.875-1.607-1.75-1.875C17.25 4 10.875 4 10.875 4S4.625 4 3 4.402c-.875.268-1.5.937-1.75 1.875C1 8.017 1 11.5 1 11.5s0 3.482.375 5.223c.25.938.875 1.607 1.75 1.875C4.625 19 11 19 11 19s6.25 0 7.875-.402c.875-.268 1.5-.937 1.75-1.875C21 14.983 21 11.5 21 11.5s0-3.482-.5-5.223ZM9 14.714V8.286l5.25 3.214L9 14.714Z'
                    fill='currentColor'
                />
            </symbol>
        </StyledSpriteWithIcons>
    );
}

export { IconName, SpriteWithIcons };
