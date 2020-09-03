import { TargetAndTransition, Transition, Variants } from 'framer-motion';

export type EntryExitAnimationReturn = {
    variants: {
        variants: Variants;
    };
    all: {
        variants: Variants;
        initial: 'exit';
        animate: 'enter';
        exit: 'exit';
    };
};

type AnimationKeys = keyof TargetAndTransition;

export type Transitions = {
    enter?: Partial<Transition>;
    exit?: Partial<Transition>;
};

export function EntryExit(
    animation: Partial<
        Record<AnimationKeys, string | [string, string] | number | [number, number]>
    >,
    transitions?: Transitions
): EntryExitAnimationReturn {
    const enter = {};
    const exit = {};

    const compiled = Object.entries(animation).reduce<EntryExitAnimationReturn>(
        (acc, [key, value]) => {
            let _enter, _exit;

            if (Array.isArray(value)) {
                [_enter, _exit] = value;
            } else {
                _enter = _exit = value;
            }

            enter[key] = _enter;
            exit[key] = _exit;
            return acc;
        },
        {
            variants: {
                variants: {
                    enter,
                    exit,
                },
            },
            all: {
                variants: {
                    enter,
                    exit,
                },
                initial: 'exit',
                animate: 'enter',
                exit: 'exit',
            },
        }
    );

    compiled.variants.variants.enter = {
        ...compiled.variants.variants.enter,
        transition: transitions?.enter,
    };

    compiled.variants.variants.exit = {
        ...compiled.variants.variants.exit,
        transition: transitions?.exit,
    };

    return compiled;
}
