/**
 * 手写Promise
 */

const PADDING = "padding";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromsie(fn) {
  this.state = PADDING;
  this.value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  const resolve = (value) => {
    if (this.state == PADDING) {
      this.state = RESOLVED;
      this.value = value;
      this.resolvedCallbacks.map((cb) => cb(this.value));
    }
  };
  const reject = (value) => {
    if ((this.state = PADDING)) {
      this.state = REJECTED;
      this.value = value;
      this.rejectedCallbacks.map((cb) => cb(value));
    }
  };
  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}
MyPromsie.prototype.then = function (onFulfilled, onRejected) {
  const err = (err) => {
    throw err;
  };
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
  onRejected = typeof onRejected === "function" ? onRejected : (v) => err(v);
  const fnObj = {
    [PADDING]: () => {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    },
    [RESOLVED]: () => onFulfilled(this.value),
    [REJECTED]: () => onRejected(this.value),
  };
  fnObj[this.state]();
};


export { MyPromsie };
