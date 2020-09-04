import styled, { css, keyframes } from 'styled-components';

interface ScrollerProps {
    src: string;
    width?: number | string;
    height: number | string;
    duration?: number;
}

const infinite = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 0;
    }
`;

export const Scroller = styled.div.withConfig({
    shouldForwardProp(prop, defaultValidatorFn) {
        return !['src', 'width', 'height'].includes(prop) && defaultValidatorFn(prop);
    },
})<ScrollerProps>`
    ${({ width = 'auto', height = 'auto', src, duration = 500 }) => css`
        position: absolute;
        top: 0;
        left: 0;
        width: ${width};
        height: ${typeof height === 'number' ? height + 'px' : height};
        animation: ${infinite} ${duration}s linear infinite;
        background-image: url(${src});
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto 100%;
        opacity: 0.5;
    `}
`;
