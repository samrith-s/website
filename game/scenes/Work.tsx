import { memo, forwardRef } from 'react';

import { SceneContainer } from '../../styles/containers';
import { DownInOut } from '../animations/entryExit';
import { useRouteChange } from '../hooks/useRouteChange';
import { useScroll } from '../hooks/useScroll';
import { SCENES } from '../variables';

export const Work = memo(
    forwardRef((_, ref) => {
        useScroll(SCENES.WORK);
        useRouteChange(SCENES.WORK);

        return (
            <SceneContainer ref={ref} {...DownInOut().all}>
                LOL this is my work! really long LOL this is my work! LOL this is my work! LOL this
                is my work! LOL this is my work! LOL this is my work! LOL this is my work!LOL this
                is my work! LOL this is my work! LOL this is my work! LOL this is my work!LOL this
                is my work! LOL this is my work! LOL this is my work!
            </SceneContainer>
        );
    })
);
