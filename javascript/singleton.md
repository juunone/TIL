```js
var singleFunc = (function () {
  var instance;
  var foo = "hey";

  function init() {
    return {
      foo: foo,
      bar: function (bar) {
        return bar;
      }
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        return (instance = init());
      } else {
        return instance;
      }
    }
  };
})();

var single = singleFunc.getInstance();
console.log(single.foo); // hey
console.log(single.bar("john doe")); // john doe
```