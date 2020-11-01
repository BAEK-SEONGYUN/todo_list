const { odd, even } = require('./var'); // require는 노드에서 알아서 제공

function checkOddOrEven(number){
    if(number % 2){
        return odd;
    }
    else{
        return even;
    }
}

//파일에서 한번만 사용

module.exports = checkOddOrEven;