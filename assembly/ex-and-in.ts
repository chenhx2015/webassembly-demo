export const foo = 1
export var bar = 2

export function add(a: i32, b: i32) {
    return a + b
}

// classes
export namespace foo2 {
    export class Bar {
        a: i32 = 1
        getA(): i32 {
            return this.a
        }
    }
}