import { useEffect } from 'react';

import { SCENE_VALUES } from '../variables';

import { useNavigate } from './useNavigate';

type CallbackEvent = Event & KeyboardEvent & MouseEvent;
type Callback = (e: CallbackEvent) => boolean;

export const useScene = (scene: SCENE_VALUES, callback: Callback): void => {
    const navigator = useNavigate();

    useEffect(() => {
        const changeScene = (e: CallbackEvent) => {
            if (callback(e)) {
                navigator.navigate(scene);
            }
        };

        document.addEventListener('keyup', changeScene, true);

        return () => {
            document.removeEventListener('keyup', changeScene, true);
        };
    }, [navigator, scene, callback]);
};
