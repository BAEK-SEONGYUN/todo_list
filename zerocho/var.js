const odd = '홀수입니다';
const even = '짝수입니다';

//객체를 모듈익스포트에 대입
module.exports = {
    odd,
    even,
};

// 위의 모듈을
/*
exports.odd = odd;
exports.even = even;
*/
//이렇게 쓸 수도 있다.



/*
module.exports = [odd, even]; -> 이렇게 배열로 넘길 수도 있다.


*/