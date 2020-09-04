import { useContext, useMemo } from 'react';

import { GameContext } from '../context';
import { SCENE_VALUES, SCENES } from '../variables';

type NavigateReturn = { navigate(scene: SCENE_VALUES): void };

export const useNavigate = (): NavigateReturn => {
    const { setIsIntro } = useContext(GameContext);

    const returnValue = useMemo<NavigateReturn>(
        () => ({
            navigate(scene) {
                setIsIntro(scene === SCENES.INTRO);
                const refresh =
                    window.location.protocol +
                    '//' +
                    window.location.host +
                    window.location.pathname +
                    `?scene=${scene}`;
                window.history.pushState(null, null, refresh);
            },
        }),
        [setIsIntro]
    );

    return returnValue;
};
