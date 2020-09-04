import { MemoExoticComponent, ForwardRefExoticComponent } from 'react';

import { SCENES, SCENE_VALUES } from '../variables';

import { About } from './About';
import { Intro } from './Intro';
import { Work } from './Work';

export type SceneFactoryInternal = {
    key: SCENE_VALUES;
    Component:
        | MemoExoticComponent<() => JSX.Element>
        | MemoExoticComponent<ForwardRefExoticComponent<any>>;
};

export type SceneFactoryReturn = Array<SceneFactoryInternal>;

export const PrimaryScene: SceneFactoryInternal = {
    key: SCENES.INTRO,
    Component: Intro,
};

export const SceneFactory: SceneFactoryReturn = [
    {
        key: SCENES.ABOUT,
        Component: About,
    },
    {
        key: SCENES.WORK,
        Component: Work,
    },
];
