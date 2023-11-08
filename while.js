const myarray = ["red", "green", "blue", "purple"];

console.log(myarray[3]);

for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
}

let i = 0;
while (myarray.length < 3) {
    console.log(i, "+ 1 =", i + 1);
    i++;
}
