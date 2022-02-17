import * as utils from './utils'
import * as accessors from './accessors'
import * as math from './math'
import { SpicyObject, _object } from 'global'
import { CallbackFunction } from 'callbacks'

const _Object = (obj: _object): SpicyObject => {
    return {
        ...obj,
        size: accessors.getSize(obj),
        /**
         * @returns boolean
         */
        isEmpty: (): boolean => utils.isEmpty(obj),
        /**
         * @returns Map
         */
        toMap: (): Map<string,any> => utils.toMap(obj),
        /**
         * @returns any
         */
        getFirstEntry: (): any => accessors.getFirstEntry(obj),
        /**
         * @returns any
         */
        getLastEntry: (): any => accessors.getLastEntry(obj),
        /**
         * @param  {string} key
         * @returns any
         */
        getEntryByKey: (key: string): any => accessors.getEntryByKey(obj, key),
        /**
         * @param  {string} path
         * @returns any
         */
        getEntryByPath: (path: string): any => accessors.getEntryByPath(obj, path),
        /**
         * @param  {CallbackFunction} fn
         * @returns Object
         */
        filter: (fn: CallbackFunction): _object => utils.filter(obj, fn),
        /**
         * @param  {CallbackFunction} fn
         * @returns Object
         */
        map: (fn: CallbackFunction): _object => utils.map(obj, fn),
        /**
         * @param  {CallbackFunction} fn
         * @returns void
         */
        forEach: (fn: CallbackFunction): void => utils.foreach(obj, fn),
        /**
         * @param  {number=0} nestLevel
         * @returns Object
         */
        freeze: (nestLevel: number = 0): Readonly<_object> => utils.freeze(obj, nestLevel),
        /**
         * @param  {string[]} ...props
         * @returns Object
         */
        extract: (...props: string[]): _object => utils.extract(obj, ...props),
        /**
         * @param  {string} prop
         * @returns any
         */
        includes: (prop: string):[boolean, string] => utils.includes(obj, prop),
        /**
         * @returns void
         */
        makeNullSafe: (): void => utils.makeNullSafe(obj),
        /**
         * @param  {string} key
         * @returns number
         */
        max: (key: string): number => math.max(obj, key),
        /**
         * @param  {string} key
         * @returns number
         */
        min: (key: string): number => math.min(obj, key),
        /**
         * @param  {string} key
         * @returns number
         */
        sum: (key: string): number => math.sum(obj, key),
        /**
         * @param  {string} key
         * @returns number
         */
        avg: (key: string): number => math.avg(obj, key),
        equals: (o1: _object, o2: _object): boolean => utils.equals(o1, o2)
    }
}

export default _Object
export * from './utils'
export * from './accessors'
export * from './math'