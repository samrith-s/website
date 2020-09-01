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

interface HelperType<T = number> {
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
        variables: { margin: marginVar },
    },
}) =>
    _margin(
        top * marginVar,
        (right ?? top) * marginVar,
        (bottom ?? top) * marginVar,
        (left ?? right ?? top) * marginVar
    );

export const padding: HelperType<number> = (top = 1, right, bottom, left) => ({
    theme: {
        variables: { padding: paddingVar },
    },
}) =>
    _padding(
        top * paddingVar,
        (right ?? top) * paddingVar,
        (bottom ?? top) * paddingVar,
        (left ?? right ?? top) * paddingVar
    );

export const borderRadius: HelperType<number> = (
    topLeft = 1,
    topRight,
    bottomRight,
    bottomLeft
) => ({
    theme: {
        variables: { borderRadius: borderRadiusVar },
    },
}) => css`
    border-radius: ${topLeft * borderRadiusVar}px ${(topRight ?? topLeft) * borderRadiusVar}px
        ${(bottomRight ?? topLeft) * borderRadiusVar}px
        ${(bottomLeft ?? bottomRight ?? topLeft) * borderRadiusVar}px;
`;
