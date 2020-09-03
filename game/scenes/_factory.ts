import { SCENES, SCENE_VALUES } from '../variables';

import { About } from './About';
import { Intro } from './Intro';

export type SceneFactoryReturn = Array<{
    key: SCENE_VALUES;
    Component: React.ComponentType;
}>;

export const SceneFactory: SceneFactoryReturn = [
    {
        key: SCENES.INTRO,
        Component: Intro,
    },
    {
        key: SCENES.ABOUT,
        Component: About,
    },
];
