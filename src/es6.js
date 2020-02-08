const marks = [20, 30, 40, 6, 70];

// const increaseMarks = marks.map(mark, markIndex) => {
//   console.log(mark, markIndex);
// });

/**
 * const increaseMarks = marks.map(mark) => {
 *  return mark = 5;
 * });
 */

/**
 * Array mehtods are treated as expression
 */
//console.log("Increased Mark", increasemark);

// To add value by 5 example of map
const simplifiedIncrease = marks.map(mark => mark + 5);

console.log("Increased Mark", simplifiedIncrease);
//filter concpet

const simplifiedFilter = marks.filter(mark => mark > 30);

//find concept

// const findMarks = marks.find(mark) => {
//   if (mark === 20) {
//     return true;
//   }
//   return false;
//});
// simplified version of this using map
const findMarks = marks.find(mark => mark === 50);
console.log(findMarks);
console.log(simplifiedFilter);

//Reducer
const reducer = (accumulator, mark) => {
  return accumulator + mark;
};

const totalMark = marks.reduce(reducer, 0);

const simplifiedTotal = marks.reduce((acc, mark) => acc + mark, 0);

console.log(simplifiedTotal);

/**
 * Multi line string
 */

//  const myHTMLGenerator = (text) => "\
//  <div> \
//   <p>\
//    <span>i </span>" + text +"\n" + "\
//   </p>
//   </div>" ;

const myTemplateHTML = text => `
  <div>
    <p>
      <span> i </span>
      ${text}
    </p>
  <div>
  `;

//console.log("normal string", myHTMLGenerator("Hello world"));
console.log("Template String", myTemplateHTML("Hello world"));

console[
  ((maths = 20),
  (physics = 30),
  (science = 100),
  (tamil = 100),
  (english = 100))
] = marks;

console.log(maths, physics, science, tamil, english);

//same for objects

const myObject = {
  one: 1,
  two: 2,
  three: 3
};

const { one, two, three } = myObject;

console.log(one, two, three);
