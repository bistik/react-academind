export default function Tabs({buttons, children, ButtonsContainer = "menu"}) {
    // It has to start with UPPERCASE letter, in this case 'B' cause this will be a component
    return (<>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    );
}