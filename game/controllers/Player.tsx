import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, useContext } from 'react';
import styled from 'styled-components';

import RunSprite from '../../public/sprites/run.png';
import StillSprite from '../../public/sprites/still.png';
import { DownInOut } from '../animations/entryExit';
import { ScrollContext } from '../context';
import { Sprite } from '../helpers/Sprite';

const SpriteStates: SpriteStatesType = {
    still: {
        src: StillSprite,
        width: 79,
        height: 250,
        frames: 2,
    },
    run: {
        src: RunSprite,
        width: 138,
        height: 251,
        frames: 8,
    },
};

type SpriteStateInternal = {
    src: string;
    width: number;
    height: number;
    frames: number;
};

type SpriteStatesType = {
    run: SpriteStateInternal;
    still: SpriteStateInternal;
};

enum ARROWS {
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight',
}

const PlayerAnimator = styled(motion.div)<{ flipped?: boolean }>`
    position: absolute;
    z-index: 10;
    bottom: -3px;
    left: calc(50vw - 75px);
    transform: ${(props) => (props.flipped ? 'scaleX(-1)' : 'scaleX(1)')};
`;

const PlayerWrapper = styled.div<{ flipped?: boolean }>`
    transform: ${(props) => (props.flipped ? 'scaleX(-1)' : 'scaleX(1)')};
`;

export const Player: React.FC = () => {
    const { scroll, setScroll } = useContext(ScrollContext);
    const [running, setRunning] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const el = useMemo(() => (process.browser ? document.getElementById('scene') : null), []);

    useEffect(() => {
        const toggleRunning = (e: KeyboardEvent) => {
            const { code } = e;
            const isLeftOrRight = code === ARROWS.LEFT || code === ARROWS.RIGHT;
            const isLeft = code === ARROWS.LEFT;
            const isRight = code === ARROWS.RIGHT;
            const leftAllowed = scroll < 0;
            const rightAllowed = el.offsetWidth + scroll < el.scrollWidth;

            if (isLeftOrRight) {
                if (!running) {
                    if ((isRight && rightAllowed) || (isLeft && leftAllowed)) {
                        setRunning(true);
                    }
                }

                if ((isRight && isFlipped) || (isLeft && !isFlipped)) {
                    setIsFlipped(isLeft);
                }

                if (isLeft && isFlipped && leftAllowed) {
                    setScroll(scroll + 50);
                }

                if (isRight && !isFlipped && rightAllowed) {
                    setScroll(scroll - 50);
                }
            }
        };

        const toggleStill = () => {
            if (running) {
                setRunning(false);
            }
        };

        document.addEventListener('keydown', toggleRunning, true);
        document.addEventListener('keyup', toggleStill, true);

        return () => {
            document.removeEventListener('keydown', toggleRunning, true);
            document.removeEventListener('keyup', toggleStill, true);
        };
    }, [running, isFlipped, el, scroll, setScroll]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (['ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        };

        document.addEventListener('keydown', onKeyDown, true);

        return () => {
            document.removeEventListener('keydown', onKeyDown, true);
        };
    }, []);

    const spriteProps = useMemo(() => (running ? SpriteStates.run : SpriteStates.still), [running]);

    return (
        <PlayerAnimator key="player" {...DownInOut().all}>
            <PlayerWrapper flipped={isFlipped}>
                <Sprite {...spriteProps} />
            </PlayerWrapper>
        </PlayerAnimator>
    );
};
