// Fundamentals of javascript:
// arrays and objects
// functions return
// async js coding


// ----------------
// var arr = [1,2,3,"hay",{},true, function(){return},[]];

var arr = [1,2,2,3,4];
// foreach map filter find indexOf

//---------------------------- // foreach
// arr.forEach(function(val){
//     console.log(val + " hello");
// })

// // ----------------------------// map
// var sns = arr.map(function(val){
//     return val*3;
// })
// console.log(sns);


// ------------------------------------// filter
// var ans = arr.filter(function(val){
//     if(val >= 3) { return true;}
//     else return false;
// })
// console.log(ans);

// //// -------------------------------- // find
// var sns = arr.find(function(val){
//     if (val === 2) return val;
// })
// console.log(ans);


//// -----------------------------------//  indexOf
// arr.indexOf(2)



// ////--------------------------------// objects
// // {} // this is blank obj
// var obj = {
//     name: "harsh",
//     age: 12
// }
// Object.freeze(obj);
// obj.age = 34
// console.log(obj.age);



//// -------------------------------------// function and return
// function abcd(){
//     return 12;
// }

// var ans = abcd();





//// ---------------------------//  async js coding

// line by line code chale isy kahte hain synchronous
// jo bhi code async nature ka ho, usey side stack me bhej do and  agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jaaye , tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack me laao and chala do

async function abcd(){
    // --------
    var blob = await fetch(`https://randomuser.me/api/`)
    //----------

    var ans = await blob.json();
    console.log(ans.results[0].name);
}

abcd();