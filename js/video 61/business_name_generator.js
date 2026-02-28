/*
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another words:
Bros
Limited
Hub

*/


function random_num1() {
    while (true) {
        let rand = Math.random() * 10;
        let random = rand | 0;//convert float into integer
        if (random <= 3 && random > 0) {
            return random;
        }
    }
}
function random_num2() {
    while (true) {
        let rand = Math.random() * 10;
        let random = rand | 0; //convert float into integer
        if (random <= 3 && random > 0) {
            return random;
        }
    }
}
function random_num3() {
    while (true) {
        let rand = Math.random() * 10;
        let random = rand | 0;//convert float into integer
        if (random <= 3 && random > 0) {
            return random;
        }
    }
}
function bussiness_name_generator() {

    let ad = {
        1: "Crazy",
        2: "Amazing",
        3: "Fire"
    };

    let sn = {
        1: "Engine",
        2: "Foods",
        3: "Garments"
    };

    let aw = {
        1: "Bros",
        2: "Limited",
        3: "Hub"
    };
    let random1 = random_num1();
    let random2 = random_num2();
    let random3 = random_num3();

    console.log(`Your Bussiness Name is : ${ad[random1]} ${sn[random2]} ${aw[random3]}`);
}

bussiness_name_generator();
