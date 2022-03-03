let stack = [];

function push(item) {
  // to do: push onto the stack
  stack[stack.length] = item;
}

function pop() {
  // to do: pop off the stack
  let newStack = [];
  let lastItem;
  for (let i = 0; i <= stack.length - 1; i++) {
    if (i < stack.length - 1) {
      newStack[i] = stack[i];
    } else {
      lastItem = stack[i];
    }
  }
  stack = newStack;
  return lastItem;
}

/**
 * 
 * @param {string} str - the string to parse 
 */
function processString(str) {
  const tokens = str.split(' ');
  for (token of tokens) {
    // parse each token, is this an operator or a number?
    let parsed = parse
    // if number, push
    if(token === typeof Number){

    }
    // else if operator, pop two then push result back on
    
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