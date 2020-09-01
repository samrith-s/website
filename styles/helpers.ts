import {
    darken as _darken,
    lighten as _lighten,
    transparentize as _transparentize,
    margin as _margin,
    padding as _padding,
} from 'polished';
import { css } from 'styled-components';

import { Colors, Theme } from './theme';

type HelperReturnType = (props: { theme: Theme }) => any;

interface HelperKeyType {
    (key: keyof Colors, ...argv: number[]): HelperReturnType;
}

interface HelperType<T> {
    (...argv: T[]): HelperReturnType;
}

export const color: HelperKeyType = (key) => ({ theme }) => theme.colors[key];

export const darken: HelperKeyType = (key, value) => ({ theme }) =>
    _darken(value, theme.colors[key]);

export const lighten: HelperKeyType = (key, value) => ({ theme }) =>
    _lighten(value, theme.colors[key]);

export const transparentize: HelperKeyType = (key, value) => ({ theme }) =>
    _transparentize(value, theme.colors[key]);

export const margin: HelperType = (top = 1, right, bottom, left) => ({
    theme: {
        variables: { margin },
    },
}) =>
    _margin(
        top * margin,
        (right ?? top) * margin,
        (bottom ?? top) * margin,
        (left ?? right ?? top) * margin
    );

export const padding: HelperType<number> = (top = 1, right, bottom, left) => ({
    theme: {
        variables: { padding },
    },
}) =>
    _padding(
        top * padding,
        (right ?? top) * padding,
        (bottom ?? top) * padding,
        (left ?? right ?? top) * padding
    );

export const borderRadius: HelperType<number> = (
    topLeft = 1,
    topRight,
    bottomRight,
    bottomLeft
) => ({
    theme: {
        variables: { borderRadius },
    },
}) => css`
    border-radius: ${topLeft * borderRadius}px ${(topRight ?? topLeft) * borderRadius}px
        ${(bottomRight ?? topLeft) * borderRadius}px
        ${(bottomLeft ?? bottomRight ?? topLeft) * borderRadius}px;
`;
