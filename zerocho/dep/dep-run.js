const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

/*
dep1이 dep2를 require하고 dep2가 dep1을 requrie함
dep1의 module.exports가 함수가 아니라 빈 객체가 됨(무한 반복을 막기 위해 의도됨)
순환참조하는 상황이 나오지 않도록 하는 게 좋음
*/
