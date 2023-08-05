import styled from 'styled-components';

const Container = styled.div`
    display: block;
    padding: 0.5em;
    margin-bottom: 0.25em;
    position: relative;
    width: max-content;
    height: max-content;
    box-sizing: content-box;
`;

const StyledButton = styled.button`
    display: block;
    position: relative;
    letter-spacing: 0.1em;
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #ff6b6b, #ffa8a8);
`;

const StyledClip = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
`;

const FilterOverlay = styled.div`
    position: absolute;
    inset: 0;
    mix-blend-mode: overlay;
    // THank you @https://www.magicpattern.design/tools/css-backgrounds
    background-color: white;
    opacity: 0;
    background-image: repeating-radial-gradient(
        circle at center center,
        white,
        black,
        4px,
        white 4px,
        black 4px
    );
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

export const FancyButton = () => {
    return (
        <Container className="fancybutton-container">
            <StyledClip className="fancybutton-clip">
                <svg
                    width={'100%'}
                    height={'100%'}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none">
                    <rect width="100" height="100" />
                </svg>
            </StyledClip>
            <StyledButton className="fancybutton-btn">
                <span>Click me!</span>
            </StyledButton>
            <FilterOverlay className="fancybutton-filter"></FilterOverlay>
        </Container>
    );
};
