var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function(){
        var that = this;
        this.friends.forEach(function (friend){
            console.log(that.name, friend); //console,log(this.namem friend)
        });
    },
};
relationship1.logFriends();


const relationship2 = {
    name: 'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend =>{
            console.log(this.name,friend);
        });
    },
};
relationship1.logFriends();



const relationship3 = {
    name: 'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend =>{
            console.log(this.name,friend);
        });
    },
};
relationship3.logFriends();

