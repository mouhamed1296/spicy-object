export const _Object = (_obj: Object): SpicyObject => {
    let obj: myObject = _obj
    return {
        ...obj,
        size: Object.keys(obj).length + Object.getOwnPropertySymbols(obj).length,
        /**
         * @returns boolean
         */
        isEmpty: ():boolean => (_Object(obj).size === 0),
        /**
         * @returns Map
         */
        toMap: (): Map<string,any> => {
            return new Map(Object.entries(obj))
        },
        /**
         * @returns any
         */
        getFirstEntry: (): any => (obj[Object.keys(obj)[0]]),
        /**
         * @returns any
         */
        getLastEntry: (): any => {
            const keys = Object.keys(obj)
            return obj[keys[keys.length - 1]]
        },
        /**
         * @param  {string} key
         * @returns any
         */
        getEntryByKey: (key: string): any => {
            const _obj = _Object(obj)
            return _obj.getEntryByPath(_obj.includes(key)[1])
        },
        /**
         * @param  {string} path
         * @returns any
         */
        getEntryByPath: (path: string): any => {
            const pathComponents = path.split(".")
            const nestLevel = pathComponents.length
            let i = 0, holder = obj
            while (i < nestLevel) {
                holder = holder?.[pathComponents[i]]
                i++
            }
            return holder
        },
        /**
         * @param  {CallbackFunction} filter_func
         * @returns Object
         */
        filter: (filter_func: CallbackFunction): Object => {
            return Object.fromEntries(
                Object.entries(obj).filter(([key, value], index) => filter_func(value, key, index))
            )
        },
        /**
         * @param  {CallbackFunction} map_func
         * @returns Object
         */
        map: (map_func: CallbackFunction): Object => { 
            return Object.fromEntries(
                Object.entries(obj).map(
                    ([key, value], index) => [key, map_func(value, key, index)]
                )
            )
        },
        /**
         * @param  {CallbackFunction} fn
         * @returns void
         */
        forEach: (fn: CallbackFunction): void => {
            Object.entries(obj).forEach(([key, value], index) => {
                fn(value, key, index)
            })
        },
        /**
         * @param  {number=0} nestLevel
         * @returns Object
         */
        freeze: (nestLevel: number = 0): Object => {
            if (nestLevel >= 1) {
                const keys: string[] = Object.keys(obj)
                for (const key of keys) {
                    if (obj[key] instanceof Object) {
                        _Object(obj[key]).freeze(nestLevel - 1)
                    }
                }
            }
            return Object.freeze(obj)
        },
        /**
         * @param  {string[]} ...props
         * @returns Object
         */
        extract: (...props: string[]): Object => {
            let extracted: myObject = {}
            props.forEach(prop => {
                if (prop.includes(".")) {
                    let key = prop
                    const alias = prop.match(/^[a-z0-9_.]+as{1}\({1}([a-z0-9_]+)\){1}$/i)?.[1]
                    if (alias) {
                        prop = prop.replace(`.as(${alias})`, "")
                        key = alias
                    }
                    const entrie = _Object(obj).getEntryByPath(prop)
                    if (entrie) {
                        extracted[key] = entrie
                    }
                } else if (obj?.[prop]) {
                    extracted[prop] = obj[prop]
                }
            })
            return extracted
        },
        /**
         * @param  {string} prop
         * @returns any
         */
        includes: (prop: string):any => {
            const keys = Object.keys(obj)
            let included = false
            let path = ""
            for (const key of keys) {
                if (Array.isArray(obj[key])) {
                    let i = 0
                    let len = obj[key].length
                    while (i < len) {
                        if (obj[key][i] instanceof Object) {
                            if (path === "") path += key
                            let [inc, cpath] = _Object(obj[key]).includes(prop)
                            included = inc 
                            if (included) {
                                path += `.${cpath}`
                                break
                            }
                        }
                        i++
                    }
                    if (included) {
                        break
                    }
                } else if (prop !== key && obj[key] instanceof Object && !Array.isArray(obj[key])) {
                    if (path === "") path += key
                    let [inc, cpath] = _Object(obj[key]).includes(prop)
                    included = inc 
                    if (included) {
                        path += `.${cpath}`
                        break
                    }
                } else if (prop === key) {
                    path += key
                    included = true
                    break
                }
                path = ""
            }
            return [included, path]
        },
        /**
         * @returns void
         */
        makeNullSafe: (): void => {
            const entries = Object.entries(obj)
            for (const entrie of entries) {
                if (entrie[1] === null || entrie[1] === undefined) delete obj[entrie[0]]
                if (Array.isArray(entrie[1])) {
                    let i = 0
                    const len = entrie[1].length
                    if (len === 0) {
                        delete obj[entrie[0]]
                    }
                    else {
                        while (i < len) {
                            if (entrie[1][i] instanceof Object) {
                                _Object(entrie[1][i]).makeNullSafe()
                            }
                            if (entrie[1][i] === null || entrie[1][i] === undefined) {
                                obj[entrie[0]] = obj[entrie[0]].filter((item: any) => item)
                            }
                            i++
                        }
                    }
                }
                if (entrie[1] instanceof Object) {
                    if (_Object(entrie[1]).isEmpty()) {
                        delete obj[entrie[0]]
                    } else {
                        _Object(entrie[1]).makeNullSafe()
                        if (_Object(entrie[1]).isEmpty()) delete obj[entrie[0]]
                    }
                }
            }
        },
        /**
         * @param  {string} key
         * @returns number
         */
        max: (key: string): number => {
            if (!_Object(obj).includes(key)) return 0
            let maxArray: Array<number> = []
            _Object(obj).forEach((el: myObject) => {
                if (_Object(obj).includes(key)) maxArray.push(el[key])
            })
            let i = 0
            let len = maxArray.length
            let max = maxArray[i]
            while(i < len) {
                if (maxArray[i] > max) max = maxArray[i]
                i++
            }
            return max
        },
        /**
         * @param  {string} key
         * @returns number
         */
        min: (key: string): number => {
            if (!_Object(obj).includes(key)) return 0
            let minArray: Array<number> = []
            _Object(obj).forEach((el: myObject) => {
                if (_Object(obj).includes(key)) minArray.push(el[key])
            })
            let i = 0
            let len = minArray.length
            let min = minArray[i]
            while(i < len) {
                if (minArray[i] < min) min = minArray[i]
                i++
            }
            return min
        },
        /**
         * @param  {string} key
         * @returns number
         */
        sum: (key: string): number => {
            if (!_Object(obj).includes(key)) return 0
            let sum: number = 0
            _Object(obj).forEach((el: myObject) => {
                if (_Object(obj).includes(key)) sum += el[key]
            })
            return sum
        },
        /**
         * @param  {string} key
         * @returns number
         */
        avg: (key: string): number => {
            if (!_Object(obj).includes(key)) return 0
            let myArray: Array<number> = []
            _Object(obj).forEach((el: myObject) => {
                if (_Object(obj).includes(key)) myArray.push(el[key])
            })
            const avg = _Object(obj).sum(key) / myArray.length
            return avg
        }
    }
}

interface myObject extends Object {
    [key: string]: any
}
interface SpicyObject extends Object {
    readonly size: number
    isEmpty: Function,
    toMap: Function,
    getFirstEntry: Function,
    getLastEntry: Function,
    getEntryByKey: Function,
    getEntryByPath: Function,
    filter: Function,
    map: Function,
    forEach: Function,
    freeze: Function,
    extract: Function,
    includes: Function,
    makeNullSafe: Function,
    max: Function,
    min: Function,
    sum: Function,
    avg: Function
}
type CallbackFunction = (value:any, key?:string, index?:number) => void | any;