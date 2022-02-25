// counts the number of calls in a call stack (for async applications)
function getNthCall() {
  thisFunc = getNthCall;
  thisFunc.callCount = thisFunc?.callCount + 1 || 1;
  thisFunc.reseterLaunched = true;
  (async () => {})().then(() => {
    thisFunc.reseterLaunched = false;
    thisFunc.callCount = 0;
  });
  return thisFunc.callCount;
}

// Example
function example() {
  (async function f() {})()
    .then(() => {
      console.log(getNthCall(), getNthCall(), getNthCall());
    })
    .then(() => {
      console.log(getNthCall(), getNthCall(), getNthCall());
    })
    .then(() => {
      console.log(getNthCall(), getNthCall(), getNthCall());
    });
}
