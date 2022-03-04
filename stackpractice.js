let stack = [];



// [1, 12, ]
// [13, 2, ]

function push(item) {
  // to do: push onto the stack
  stack[stack.length] = item;
}
// [1, 3, 4, ]
function pop() {
  // to do: pop off the stack
  let newStack = [];
  let lastItem;
  for (let i = 0; i <= stack.length - 1; i++) {
    if (i < stack.length - 1) {
      newStack[i] = stack[i];
      // newStack[1, 3, ]
    } else {
      lastItem = stack[i];
      // lastItem = 4
    }
  }
  stack = newStack;
  // [1, 3]
  return lastItem;
  // return 4
}

/**
 * 
 * @param {string} str - the string to parse 
 */

function processString(str) {
  const tokens = str.split(' ');
  for (token of tokens) {
    // parse each token, is this an operator or a number?
    let parsed = parseInt(token) 

    
    // if operator, pop two then push result back on
    if(isNaN(parsed)){
      // let poppedFirst = pop()
      // let poppedSecond = pop()
    } else {
      // if number, push

    }
    
    
  }

  // at the end, there should just be one item on the stack, the answer
}


push(1);
console.log(stack);
push(2);
console.log(stack);
console.log(pop());
console.log(stack);
console.log(pop());
console.log(stack);