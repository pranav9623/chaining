'use strict';
const msg = (count) =>
    new Promise((resolve, reject) => {
    //let count = 10;
    if(count > 10){
        setTimeout(() => {
            document.querySelector('.countdown').innerText = "Happy New Year";
            resolve(count);
        }, 1000);
    }
    else {
        reject()
    }
});

msg(9)
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .then((ct) => msg(--ct))
    .catch(err => console.log(err))



