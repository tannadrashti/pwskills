const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

//1. Sort the array and find the min and max age
ages.sort();
console.log(ages);

//2. Sort the array and find the min and max age
const minAge = ages[0]; //min age
console.log('Min age:' + minAge);
 
const maxAge = ages[ages.length - 1]; //max age
console.log('Max age:' +maxAge);

//3.Find the median age(one middle item or two middle items divided by two)

ages.sort();
console.log(ages);

if (ages.length % 2 == 0) {
    middleindex1 = ages.length / 2 - 1;
    middleindex2 = ages.length / 2;
    median = middleindex1 + middleindex2 / 2;
} else {
    const middleIndex = Math.floor(length / 2);
    median = ages[middleIndex];
}
console.log('Median Age:', median);

//3. Find the average age(all items divided by number of items)

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
 
const length = ages.length;

const average = sum / length;
console.log('average age:' + average);

//4. Find the range of the ages(max minus min)

const maximumAge = Math.max(...ages);

const minimumAge = Math.min(...ages);

const range = maximumAge - minimumAge;

console.log('Range of Ages:', range);

//5. Compare the value of (min - average) and (max - average), use abs() method





const miniAge = Math.min(...ages);
const maxiAge = Math.max(...ages);


const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;


const absMinDiff = Math.abs(minimumAge - averageAge);
const absMaxDiff = Math.abs(maximumAge - averageAge);


console.log('min - average = ${absMinDiff}');
console.log('max - average = ${absMaxDiff}');

if (absMinDiff > absMaxDiff) {
    console.log("min - average is greater than max - average");
} else if (absMinDiff < absMaxDiff) {
    console.log("min - average is less than max - average");
} else {
    console.log("min - average is equal to max - average");
}
