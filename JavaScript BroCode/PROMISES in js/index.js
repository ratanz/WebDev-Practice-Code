// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if (dogwalked) {
                resolve("you walk the dog 🐕‍🦺");
            }
            else {
                reject("you didn't walk the dog 😡");
            }

        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenClean = true;

            if (kitchenClean) {
                resolve("you clean the kitchen 🧹");
            }
            else {
                reject("you didn't clean the kitchen 😡");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if (trashTakenOut) {
                resolve("the trash is taken out 🚮");
            }
            else {
                reject("the trash was not taken out 😡");
            }

        }, 500);
    });
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("you finished all the chores") })
    .catch(error => { console.log(error); console.log("you did not finish all the chores") });
