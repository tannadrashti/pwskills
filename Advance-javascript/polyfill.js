if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) {
        
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}


const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3)); 
console.log(arr.customIncludes(6)); 
