this.name = 'THIS IS THE GLOBAL OBJECT';

const obj = {
  name: 'a',
  age: 14
};

function getName(){
  console.log(this.name);
}

const f = getName.bind(obj);
f();

// make a function that will console log this.name,
// make it console log obj.name when calling
// dont use call or apply


const obj = {
  name: 'a',
  age: 14,
};

// fix the code below
// the originalArray should not be mutated.
// create a new array that will be the reverse of the originalArray


const originalArray = [0,1,2,3,4,5,6,7,8,9];

const reversedArray = (arr) => {
  const a = [...arr];
  return a.reverse();
};

reversedArray(originalArray);
console.log(originalArray);





// make this code shorter

const obj1 = {
  abcdefghijklmnopqrstuvwxyz: 123
};

const {abcdefghijklmnopqrstuvwxyz} = obj1;

console.log(abcdefghijklmnopqrstuvwxyz);







// make a promise that will resolve or reject after 5 seconds.
// resolve if a randomly generated number is more than 0.5
// reject if it it less than or equal 0.5
// to generate a random number use the Math.random() function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// do not forget to catch 
// solve this problem with both .then and async await notations

const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const r = Math.random();
    r > 0.5 ? resolve('bigger') : reject('smaller');
  }, 1000);
});

(async ()=>{
  try {
    value = await p;
  } catch(e) {
    console.log(e);
  }
})()

p.then((value)=>{
  console.log(value);
}).catch((e)=>{
  console.log(e);
});