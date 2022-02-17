declare module  'global' {
    import { CallbackFunction } from "callbacks"
    export type _object = Record<string, any>

    export interface SpicyObject extends Object {
        readonly size: number
        isEmpty: () => boolean,
        toMap: () => Map<string, any>,
        getFirstEntry: () => any,
        getLastEntry: () => any,
        getEntryByKey: (key: string) => any,
        getEntryByPath: (path: string) => any,
        filter: (fn: CallbackFunction) => _object,
        map: (fn: CallbackFunction) => _object,
        forEach: (fn: CallbackFunction) => void,
        freeze: (nestLevel: number) => Readonly<_object>,
        extract: (...props: string[]) => Object,
        includes: (prop: string) => [boolean, string],
        makeNullSafe: () => void,
        max: (key: string) => number,
        min: (key: string) => number,
        sum: (key: string) => number,
        avg: (key: string) => number,
        equals: (o1: Object, o2: Object) => boolean
    }
}