function add2<T>(a: T, b: T): T {
    if(isString<T>()) {
        return parseInt(a) + parseInt(b)
    }else {
        return a + b
    }
}