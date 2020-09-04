import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';

import { SceneContext } from '../context';
import { SCENE_VALUES } from '../variables';

export const useScroll = (key: SCENE_VALUES): void => {
    const router = useRouter();
    const { IndividualSceneRefs } = useContext(SceneContext);

    useEffect(() => {
        const { scene } = router.query;

        const handleLoad = () => {
            if (scene === key) {
                IndividualSceneRefs[key].current?.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        };

        document.addEventListener('load', handleLoad, true);

        () => {
            document.removeEventListener('load', handleLoad, true);
        };
    }, [key, router, IndividualSceneRefs]);
};
