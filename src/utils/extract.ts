import { _object } from "global"
import { getEntryByPath } from "../accessors"

const extract = (obj: _object, ...props: string[]): _object => {
    let extracted: _object = {}
    props.forEach(prop => {
        if (prop.includes(".")) {
            let key = prop
            const alias = prop.match(/^[a-z0-9_.]+as{1}\({1}([a-z0-9_]+)\){1}$/i)?.[1]
            if (alias) {
                prop = prop.replace(`.as(${alias})`, "")
                key = alias
            }
            const entrie = getEntryByPath(obj, prop)
            if (entrie) {
                extracted[key] = entrie
            }
        } else if (obj?.[prop]) {
            extracted[prop] = obj[prop]
        }
    })
    return extracted
}

export { extract }