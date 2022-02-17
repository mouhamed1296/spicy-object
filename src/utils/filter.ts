import { CallbackFunction } from "callbacks"
import { _object } from "global"

const filter = (obj: _object, fn: CallbackFunction): _object => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value], index) => fn(value, key, index))
    )
}

export { filter }