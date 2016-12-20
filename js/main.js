import '../css/test.scss';
var x = [1,2,3].map(function(a){
    return '<p>' + a + '</p>'
})
document.write(x[1]);

class test{
    say(){
        console.log('say something!')
    }
}

//测试结构赋值
var a = [1,2,3]
var b = [...a,4,5,6]
console.log('b',b)

//测试for...of
var x = [1,2,3]
for(var value of x){
    console.log('value',value)
}

//测试let 和 const
let lt = 'let value';
const ct = 'const value';
console.log(lt,ct);
