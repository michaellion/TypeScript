//// [callSignatureWithOptionalParameterAndInitializer.ts]
// Optional parameters cannot also have initializer expressions, these are all errors

function foo(x?: number = 1) { }
var f = function foo(x?: number = 1) { }
var f2 = (x: number, y? = 1) => { }

foo(1);
foo();
f(1);
f();
f2(1);
f2(1, 2);

class C {
    foo(x?: number = 1) { }
}

var c: C;
c.foo();
c.foo(1);

interface I {
    (x? = 1);
    foo(x: number, y?: number = 1);
}

var i: I;
i();
i(1);
i.foo(1);
i.foo(1, 2);

var a: {
    (x?: number = 1);
    foo(x? = 1);
}

a();
a(1);
a.foo();
a.foo(1);

var b = {
    foo(x?: number = 1) { },
    a: function foo(x: number, y?: number = '') { },
    b: (x?: any = '') => { }
}

b.foo();
b.foo(1);
b.a(1);
b.a(1, 2);
b.b();
b.b(1);


//// [callSignatureWithOptionalParameterAndInitializer.js]
// Optional parameters cannot also have initializer expressions, these are all errors

function foo(x) {if (x === void 0) { x = 1; }}
var f = function foo(x) {if (x === void 0) { x = 1; }};
var f2 = function (x, y) {if (y === void 0) { y = 1; }};
foo(1);
foo();
f(1);
f();
f2(1);
f2(1, 2);
var C = /** @class */ (function () {
    function C() {
    }C.prototype.foo = function (x) {if (x === void 0) { x = 1; }};
    return C;
}());
var c;
c.foo();
c.foo(1);

var i;
i();
i(1);
i.foo(1);
i.foo(1, 2);
var a;
a();
a(1);
a.foo();
a.foo(1);
var b = {
    foo: function (x) {if (x === void 0) { x = 1; }},
    a: function foo(x, y) {if (y === void 0) { y = ''; }},
    b: function (x) {if (x === void 0) { x = ''; }}
};
b.foo();
b.foo(1);
b.a(1);
b.a(1, 2);
b.b();
b.b(1);
