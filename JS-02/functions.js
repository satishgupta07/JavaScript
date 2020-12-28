function fun() {
    return 1;
}

console.log(fun.__proto__)
console.log(Boolean().__proto__ == Boolean.prototype)
console.log(Boolean())

console.log(Number().__proto__ == String.prototype)

console.log(fun().__proto__ == Number.prototype)