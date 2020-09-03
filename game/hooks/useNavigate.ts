import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';

import { GameContext } from '../context';
import { SCENE_VALUES } from '../variables';

type NavigateReturn = { navigate(scene: SCENE_VALUES): void };

export const useNavigate = (): NavigateReturn => {
    const router = useRouter();
    const { setScene } = useContext(GameContext);

    const returnValue = useMemo<NavigateReturn>(
        () => ({
            navigate(scene) {
                setScene(scene);
                router.replace(`/?scene=${scene}`, `/?scene=${scene}`, { shallow: true });
            },
        }),
        [router, setScene]
    );

    return returnValue;
};
