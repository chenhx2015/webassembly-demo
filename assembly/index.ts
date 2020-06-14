// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function concat(a: string, b: string): string {
  return a + b
}

export function fib(n: i32): i32 {
  let a = 0, b = 1
  if (n > 0) {
    while(--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}

// no any or undefined
export function foo(a: i32 = 0): i32 {
  let b = a + 1
  return b
}

// no union types
export function foo2(a: i32): void {
  let hh = 0
}

// strictly typed objects
let a = new Map<string, string>()
a.set('prop', 'hello world')

class A {
  constructor(public prop: string) {}
}

let aa = new A('hello world')

// sandbox

// low-level

// current limitations
// 1.closures are not yet supported, so accessing a local variable captured by an inner function will report an error
// In the meantime we recommend to either use a global or to adapt code where possible

let sum1 = 0 // now becomes a Global
export function computeSum(arr: i32[]): i32 {
  arr.forEach(value => {
    sum1 += value
  })
  return sum1
}

// 2.Exceptions are not yet supported
// we recommend to avoid the use of try, catch, finally and throw and do as they did in the olden days, i.e. return an error code or null to indicate
export function doThrow(): void {
  throw new Error('message')
}

// How does AssemblyScript compare/relate to C++ / Rust ?
// 1.Fi

// export an entire class
// 编译之后，通过js加载编译后的 .wasm 文件发现，编译之后会转为 es5 的构造函数
// getFoo: [Function: ctor] { wrap: [Function] }
export class getFoo {
  constructor(public str: string) {
    
  }
  getString(): string {
    return this.str
  }
}
