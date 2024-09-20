import "./styles.css";

export default function App() {
  const user = {
    name: "Ram",
    age: 23,
  };
  function userType(name, age) {
    console.log(`${this.name} is ${this.age} years old`);
  }

  Function.prototype.myBind = function (contex, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "is not a function");
    }
    const currentContex = contex || globalThis;
    const newFunc = Symbol();
    currentContex[newFunc] = this;
    return function (...newArgs) {
      return currentContex[newFunc](...args, ...newArgs);
    };
  };
  const bindFunc = userType.myBind(user);
  bindFunc(user.name, user.age);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
