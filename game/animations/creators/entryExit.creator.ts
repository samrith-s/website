import { TargetAndTransition, Transition, Variants } from 'framer-motion';

export type EntryExitAnimationReturn = {
    variants: Variants;
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
    const compiled = Object.entries(animation).reduce<EntryExitAnimationReturn>(
        (acc, [key, value]) => {
            let enter, exit;

            if (Array.isArray(value)) {
                [enter, exit] = value;
            } else {
                enter = exit = value;
            }

            acc.variants.enter[key] = enter;
            acc.variants.exit[key] = exit;
            return acc;
        },
        {
            variants: {
                enter: {},
                exit: {},
            },
        }
    );

    compiled.variants.enter = {
        ...compiled.variants.enter,
        transition: transitions?.enter,
    };

    compiled.variants.exit = {
        ...compiled.variants.exit,
        transition: transitions?.exit,
    };

    return compiled;
}
