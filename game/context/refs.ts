import { createRef, RefObject } from 'react';

import { SCENES, SCENE_VALUES } from '../variables';

type SceneRefType = Record<SCENE_VALUES, RefObject<HTMLDivElement>>;

export const SceneRef = createRef<HTMLDivElement>();

export const IndividualSceneRefs = Object.values(SCENES).reduce(
    (acc, scene) => ({ ...acc, [scene]: createRef<HTMLDivElement>() }),
    {}
) as SceneRefType;
