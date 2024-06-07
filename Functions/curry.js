function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(arg) {
                return curried(...args, arg);
            };
        }
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); 
console.log(curriedAdd(5)(10)); 
console.log(curriedAdd(1)(6)); 

console.log(curriedAdd(4, 9)); 
