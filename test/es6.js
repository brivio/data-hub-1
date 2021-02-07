// 数组的解构赋值
let [a, b, c] = [1, 2, 3];
// 对象的解构赋值
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// 字符串新增方法
let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
'x'.repeat(3) // "xxx"
'x'.padStart(5, 'ab') // 'ababx'
'x'.padEnd(5, 'ab') // 'xabab'

const s = '  abc  ';
s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
'aabbcc'.replace('b', '_')// 'aa_bcc'
'aabbcc'.replaceAll('b', '_')// 'aa__cc'

// 数值新增方法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
Number.isInteger(25) // true
Math.trunc(4.1) // 4
Math.cbrt('8') //计算立方根 2