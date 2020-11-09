
setImmediate(() =>{
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() =>{
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('pormis'));

/*
다 백그라운드로 넘어간뒤에 테스크큐로 옴
먼저 불린 애들로 해야겟지만
nextTick, promise 새치기 -> 마이크로테스크
*/