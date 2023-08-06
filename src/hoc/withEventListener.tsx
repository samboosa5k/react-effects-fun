import { FC } from 'react';

type CallbackGenericType<T, R> = (args?: T) => R;
type CallableFunction = CallbackGenericType<any, any>;
type ComposedFC<T, R> = (x: FC<any>) => R extends FC<T & any> ? R : never;

const hookReducer = (...hooks: CallableFunction[]) => {
    return ((Component: FC) => {
        return (
            <Component
                {...hooks.reduce(
                    (acc, hook) => ({
                        ...acc,
                        [hook.name]: hook,
                    }),
                    {}
                )}
            />
        );
    }) as unknown as ComposedFC<any, FC<any>>;
};

const composeHooks = (...hooks: CallableFunction[]) => hookReducer(...hooks);

///
const useEventListener = () => {
    return {
        log: () => console.log('log'),
    };
};

const withEventListener = composeHooks(useEventListener);
export const HelloComponent = withEventListener(({ log }) => {
    return <div onClick={log}>Hello</div>;
});
