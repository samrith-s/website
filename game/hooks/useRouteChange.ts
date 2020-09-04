import { useRef, useEffect, useContext } from 'react';

import { SceneContext } from '../context';
import { SCENE_VALUES } from '../variables';

import { useNavigate } from './useNavigate';

const thresholdArray = (steps) =>
    Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

export const useRouteChange = (key: SCENE_VALUES): void => {
    const { SceneRef, IndividualSceneRefs } = useContext(SceneContext);
    const navigator = useNavigate();
    const observer = useRef(null);
    const previousXVal = useRef(0);
    const previousRatioVal = useRef(0);

    useEffect(() => {
        const root = SceneRef.current;
        const sceneItem = IndividualSceneRefs[key].current;

        const intersectionCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const scene = new URLSearchParams(window.location.search).get('scene');
                const { current: previousX } = previousXVal;
                const { current: previousRatio } = previousRatioVal;
                let isEnter = false;

                const currentX = entry.boundingClientRect.x;
                const currentRatio = entry.intersectionRatio;
                const isIntersecting = entry.isIntersecting;

                if (scene !== key) {
                    if (currentX < previousX) {
                        if (currentRatio > previousRatio && isIntersecting) {
                            isEnter = true;
                        }
                    } else if (currentX > previousX && isIntersecting) {
                        if (currentRatio > previousRatio) {
                            isEnter = true;
                        }
                    }

                    if (isEnter) {
                        console.log(key, 'isEnter!!');
                        navigator.navigate(key);
                    }
                }

                previousXVal.current = currentX;
                previousRatioVal.current = currentRatio;
            });
        };

        if (root && sceneItem) {
            observer.current = new IntersectionObserver(intersectionCallback, {
                root: root.current,
                rootMargin: '0px',
                threshold: thresholdArray(20),
            });

            observer.current?.observe(sceneItem);
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [key, navigator, SceneRef, IndividualSceneRefs]);
};
