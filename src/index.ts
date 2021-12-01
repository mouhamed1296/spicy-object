export const _Object = (_obj: Object): SpicyObject => {
    let obj: myObject = _obj
    return {
        ...obj,
        isEmpty: ():boolean => (obj && Object.keys(obj).length === 0),
        toMap: ():Map<string,any> => {
            return new Map(Object.entries(obj))
        },
        getFirstEntry: (): any => (obj[Object.keys(obj)[0]]),
        getLastEntry: (): any => {
            let keys = Object.keys(obj)
            return obj[keys[keys.length - 1]]
        },
        getEntryByIndex: (index: number): any => (obj[Object.keys(obj)[index]]),
        getEntryByKey: (key: string): any => (_Object(obj).getEntryByPath(
            _Object(obj).includes(key)[1]
        )),
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
        getEntries: (startIndex: number, stopIndex: number): Object => {
            return Object.fromEntries(
                Object.keys(obj).filter(
                    (entrie, index) => (entrie && index >= startIndex && index <= stopIndex)
                ).map(
                    key => [key, obj[key]]
                )
            )
        },
        filter: (filter_func: CallbackFunction): Object => {
            return Object.fromEntries(
                Object.entries(obj).filter(([key, value], index) => filter_func(value, key, index))
            )
        },
        map: (map_func: CallbackFunction): Object => { 
            return Object.fromEntries(
                Object.entries(obj).map(
                    ([key, value], index) => [key, map_func(value, key, index)]
                )
            )
        },
        forEach: (fn: CallbackFunction): void => {
            Object.entries(obj).forEach(([key, value], index) => {
                fn(value, key, index)
            })
        },
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
                } else {
                    if (obj?.[prop]) {
                        extracted[prop] = obj[prop]
                    }
                }
            })
            return extracted
        },
        includes: (prop: string):any => {
            const keys = Object.keys(obj)
            let included = false
            let path = ""
            for (const key of keys) {
                if (Array.isArray(obj[key])) {
                    let i = 0
                    while (i < obj[key].length) {
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
                }
                if (prop !== key && obj[key] instanceof Object && !Array.isArray(obj[key])) {
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
        }
    }
}

interface myObject extends Object {
    [key: string]: any
}

type SpicyObject = object & {
    isEmpty: Function,
    toMap: Function,
    getFirstEntry: Function,
    getLastEntry: Function,
    getEntryByIndex: Function,
    getEntryByKey: Function,
    getEntryByPath: Function,
    getEntries: Function,
    filter: Function,
    map: Function,
    forEach: Function,
    freeze: Function,
    extract: Function,
    includes: Function
}
type CallbackFunction = (value:any, key?:string, index?:number) => any;