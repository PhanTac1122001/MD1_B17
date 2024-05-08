const arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
const arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function star(nameStar) {
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === nameStar) {
            return arr2[i];
        } 
    }
    console.log("K tìm thấy");
}
let a = prompt("Mời nhập tên:")
console.log(star(a));

