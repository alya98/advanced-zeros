module.exports = function getZerosCount(number, base) {
  // your implementation
  var maxPr=Math.max(...primeFactorization(base));
  return check(number,maxPr);
}
//console.log(getZerosCount(25, 10));

  function primeFactorization(base, result) { //разлаживаем базу на простые множители
    var result = (result || []);
    var root = Math.sqrt(base);
    var x = 2;
  
    if (base % x!==0) {
      x = 3;
      while ((base % x) && ((x = (x + 2)) < root)) {}
    }
  
    x = (x <= root) ? x : base;
  
    result.push(x);
  
    return (x === base) ? result : primeFactorization((base / x), result); //возвращаем массив из простых множителей
  }

  function check(n, a) {
    var count=0, tmp=a;

    while(n>=a){
      count+=Math.floor(n/a);
      a*=tmp;
    }
    return count;
  }