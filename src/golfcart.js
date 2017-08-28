function f(a){
  let args = a[0].split(' ')[0].split``;
  if (args.length > 26*2) return !1;
  let str = [];
  for (let i=0;i<args.length;i++) {
    str[i] = args[i];
  }
  str="("+str.join(",")+")=>"+a[0].split(' ').slice(1).join(' ')+";";
  return eval(str);
}
String.prot = String.prototype;
const Str = String;
String.prot.log = function(){return console.log(this.valueOf());};
String.prot.l = function(){return this.valueOf().length;};
String.fCC = String.fromCharCode;
String.fCP = String.fromCodePoint;
String.ra = String.raw;
String.prot.cA = String.prot.charAt;
String.prot.cCA = String.prot.charCodeAt;
String.prot.cPA = String.prot.codePointAt;
String.prot.c = String.prot.concat;
String.prot.i = String.prot.includes;
String.prot.eW = String.prot.endsWith;
String.prot.iO = String.prot.indexOf;
String.prot.lIO = String.prot.lastIndexOf;
String.prot.lC = String.prot.localeCompare;
String.prot.m = String.prot.match;
String.prot.n = String.prot.normalize;
String.prot.pE = String.prot.padEnd;
String.prot.pS = String.prot.padStart;
String.prot.re = String.prot.repeat;
String.prot.r = String.prot.replace;
String.prot.se = String.prot.search;
String.prot.s = String.prot.split;
String.prot.sl = String.prot.slice;
String.prot.sW =String.prot.startsWith;
String.prot.su = String.prot.substring;
String.prot.sub = String.prot.substr;
String.prot.tLLC = String.prot.toLocaleLowerCase;
String.prot.tLUC = String.prot.toLocalUpperCase;
String.prot.tLC = String.prot.toLowerCase;
String.prot.toS = String.prot.toSource||function(){};
String.prot.tS = String.prot.toString;
String.prot.tUC = String.prot.toUpperCase;
String.prot.t = String.prot.trim;
String.prot.tL = String.prot.trimLeft||function(){};
String.prot.tR = String.prot.trimRight||function(){};
String.prot.vO = String.prot.valueOf;
String.prot.a = String.prot.anchor;
String.prot.b = String.prot.big;
String.prot.bl = String.prot.blink;
String.prot.bo = String.prot.bold;
String.prot.f = String.prot.fixed;
String.prot.fc = String.prot.fontcolor;
String.prot.fs = String.prot.fontsize;
String.prot.it = String.prot.italics;
String.prot.li = String.prot.link;
String.prot.sm = String.prot.small;
String.prot.st = String.prot.strike;

Array.prot = Array.prototype;
const Arr = Array;
Array.prot.log = function(){return console.log(this.valueOf());};
Array.prot.l = function(){return this.valueOf().length;};
Array.fr = Array.from;
Array.iA = Array.isArray;
Array.o = Array.of;
Array.prot.cW = Array.prot.copyWithin;
Array.prot.fi = Array.prot.fill;
Array.prot.po = Array.prot.pop;
Array.prot.p = Array.prot.push;
Array.prot.re = Array.prot.reverse;
Array.prot.sh = Array.prot.shift;
Array.prot.so = Array.prot.sort;
Array.prot.s = Array.prot.slice;
Array.prot.u = Array.prot.unshift;
Array.prot.c = Array.prot.concat;
Array.prot.in = Array.prot.includes;
Array.prot.iO = Array.prot.indexOf;
Array.prot.sp = Array.prot.splice;
Array.prot.j = Array.prot.join;
Array.prot.lIO = Array.prot.lastIndexOf;
Array.prot.toS = Array.prot.toSource||function(){};
Array.prot.tS = Array.prot.toString;
Array.prot.tLS = Array.prot.toLocaleString;
Array.prot.en = Array.prot.entries;
Array.prot.e = Array.prot.every;
Array.prot.f = Array.prot.filter;
Array.prot.fn = Array.prot.find;
Array.prot.fIO = Array.prot.findIndexOf;
Array.prot.fE = Array.prot.forEach;
Array.prot.k = Array.prot.keys;
Array.prot.m = Array.prot.map;
Array.prot.r = Array.prot.reduce;
Array.prot.rR = Array.prot.reduceRight;
Array.prot.sm = Array.some;
Array.prot.v = Array.prot.values;

const Obj = Object;
Object.prot = Object.prototype;
Object.as= Object.assign;
Object.cr = Object.create;
Object.dP = Object.defineProperty;
Object.dPs = Object.defineProperties;
Object.e = Object.entries;
Object.fr = Object.freeze;
Object.gOPD = Object.getOwnPropertyDescriptor;
Object.gOPDs = Object.getOwnPropertyDescriptors;
Object.gOPN = Object.getOwnPropertyName;
Object.gOPS = Object.getOwnPropertySymbols;
Object.gPO = Object.getPropertyOf;
Object.i = Object.is;
Object.iE = Object.isExtensible;
Object.iF = Object.isFrozen;
Object.iS = Object.isSealed;
Object.k = Object.keys;
Object.pE = Object.preventExtensions;
Object.s = Object.seal;
Object.sPO = Object.setPropertyOf;
Object.v = Object.values;
Object.prot.hOP = Object.prot.hasOwnProperty;
Object.prot.iPO = Object.isPrototypeOf;
Object.prot.pIE = Object.prot.propertyIsEnumerable;
Object.prot.toS = Object.prot.toSource||function(){};
Object.prot.tLS = Object.prot.toLocaleString;
Object.prot.tS = Object.prot.toString;
Object.prot.uw = Object.prot.unwatch||function(){};
Object.prot.w = Object.prot.watch||function(){};

const Fun = Function;
Function.prot = Function.prototype;
Function.c = Function.caller;
Function.l = Function.length;
Function.n = Function.name;
Function.dN = Function.displayName||null;
Function.prot.a =Function.prot.apply;
Function.prot.b = Function.prot.bind;
Function.prot.c = Function.prot.call;
Function.prot.iG = Function.prot.isGenerator||function(){};
Function.prot.toS = Function.prot.toSource||function(){};

