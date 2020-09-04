export enum SCENES {
    INTRO = 'intro',
    ABOUT = 'about',
    WORK = 'work',
}

export type SCENE_VALUES = 'intro' | 'about' | 'work';

export type SceneOrderType = {
    [key in SCENE_VALUES]?: {
        previous?: string;
        next?: string;
    };
};

export const SceneOrder: SceneOrderType = {
    about: {
        next: 'work',
    },
    work: {
        previous: 'about',
    },
};
