"use strict";

var obj = {
  name: "test",
  something: "something",
};
console.log(obj !== null && obj !== void 0 && obj.name ? obj.name : "unknown");
