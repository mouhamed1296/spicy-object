declare module 'callbacks' {
    export type CallbackFunction = (value:any, key?:string, index?:number) => void | any;
}