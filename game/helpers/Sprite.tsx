import styled, { keyframes, css } from 'styled-components';

interface SpriteProps {
    src: string;
    width: number;
    height: number;
    frames: number;
    rate?: number;
    vertical?: boolean;
}

export const Sprite = styled.span.withConfig({
    shouldForwardProp(prop, defaultValidatorFn) {
        return !['src', 'width', 'height'].includes(prop) && defaultValidatorFn(prop);
    },
})<SpriteProps>`
    ${({ src, width, height, frames, rate = 1 }) => css`
        display: inline-block;
        width: ${width}px;
        height: ${height}px;
        animation: ${({ theme, ...props }) => moveSprite(props)} ${1 / rate}s steps(${frames})
            infinite;
        background-image: url(${src});
    `}
`;

function moveSprite({ width, frames, vertical }: Partial<SpriteProps>) {
    return keyframes`
        100% {
            background-position-${vertical ? 'y' : 'x'}: ${frames * width}px;
        }
    `;
}
