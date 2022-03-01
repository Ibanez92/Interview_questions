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

push(1);
console.log(stack);
push(2);
console.log(stack);
console.log(pop());
console.log(stack);
console.log(pop());
console.log(stack);