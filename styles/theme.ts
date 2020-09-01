const colors = {
    base: '#202040',
    light: '#f4f4f4',
};

export type Colors = Record<keyof typeof colors, string>;

const variables = {
    fontSize: 12,
    margin: 10,
    padding: 10,
    borderRadius: 10,
};

export type Variables = Record<keyof typeof variables, string>;

export const theme: Theme = {
    colors,
    variables,
};

export type Theme = {
    colors: Colors;
    variables: Variables;
};
