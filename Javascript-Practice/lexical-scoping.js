function outerFunction(outerparameter) {
    let outervariable = "I am outer variable";
    function innerFunction() {
        console.log("Accessing outer parameter:" + outerparameter);
        console.log("Accessing outer variable:" + outervariable);
    }
    return innerFunction();
}

outerFunction("I am outer function");