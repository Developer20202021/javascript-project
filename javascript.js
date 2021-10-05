



// let count = '0';
// console.log(typeof count);



// let count = 0;
// console.log(“count”);
// console.log(parseInt(“count”+ 1));
// console.log(Math.random()*90000 + 10000);



// if (!isNaN('10X')
// ) {
 
// }
// console.log(!isNaN('10X'));
// const product = 5;
//  const price = '7'; 
// console.log(typeof price);
// const subTotal = product * price;
// console.log(typeof subTotal);

//  const tax = subTotal/10; 
//  const total = subTotal + tax; 
//  console.log(total);



// const task = "Practice Makes a person perfect";

// const index = task.toLowerCase().indexOf("M");
// console.log(index);



// const str1 = 'Bangladesh is a beautiful country.';
//  console.log(str1.endsWith("."));


// const str= 'I love coding more than eating.';
// console.log(str.splice(2, 6));


// const names =["rafiq", "jabbar","bakkar", "habib", "dalim"];

         //Single Line Arrow Function

// const add1 = (n1, n2) => n1+n2;
// const sum = add1(4, 5);
// console.log(sum);



        // MultiLine Arrow Function

// const multiply = (x, y, z) => {
//     const add = x + y;
//     const diff = x - y;
//     const multi = add * diff;
//     return multi;
// }
// multiplySomeNum = multiply(3, 4, 5);
// console.log(multiplySomeNum);





// get all element from an Array

// const numbers = [1, 2, 3, 4, 5]
// const max = Math.max(...numbers);

// // get new array using other array all elements
// const numbers2 = [...numbers, 88];
// // console.log(max);
// console.log(numbers2);



// function getSum(a, b=9){return a+b;} 
// console.log(getSum(2, 7));


// const y = x => x*x;
//  const x = y(5); 
//  console.log(x);



        // multiline string 
        
// const str = `this is a function
// i disscuss a new function and i will call it now 
// ${multiplySomeNum}`;
// console.log(str);




// function min(nums)
//  {  return Math.min(...nums) }
//  console.log(min( [1,3,2 ]))

// const cube=x=> x*x*x; console.log(cube(2))

// const [a, b] = [1,2,3,4,45,5]; console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(x,y,z);


// const nums = [1,2,3,4,5]; let output = nums.filter(n => n%2); console.log(output);



// const personName ='Mahadi Hasan';
//  const mouse = {
//          company:{
//                  companyName:'Logi',
//                  employee:[
//                          {id:01, emName:'kamal'},
//                         {id:02, emName:'jamal'},
//                         {id:03, emName:'habil'},
//                         {id:04, emName:'kabil'}
//                 ]
//                 },

//         name:'logitech',
//         model:'m01',
//         color:'black'
//  }

//  const {id} = mouse?.company?.employee;
//  console.log(id);
























//  const{name,model, color}=mouse;
//  const{id, companyName}=mouse.company;
//  const str = `Hello this a ${name} mouse .
//  this ${name} mouse model is ${model}.
//  this product model is ${model} `;
//  console.log(str);


// const getDivision = num => num/5;
// console.log(getDivision(234));


// const getMultiply = (num1, num2) => {
//        const num1Update = num1 + 2;
//        const num2Update = num2 + 2;
//         const multiply = num1Update * num2Update;
//         return multiply;
// }

// console.log(getMultiply(4, 5));


// const getMultiply = (num1, num2, num3=1) => num1 * num2 * num3;
// console.log(getMultiply(4, 5));



// const numbers = [2, 30, 43, 23, 33, 35, 38];
// // const fiveTimesNumbers = numbers.map(n => n * 5);
// // console.log(fiveTimesNumbers);
// const getOddNumbers = numbers.filter(n => n%2);
// console.log(getOddNumbers);



// const products = [{ name:'logitech',model:'m01',color:'black',price: 200},
//                 { name:'lg',model:'m03',color:'white',price: 2000} ,
//                 { name:'samsung',model:'m03',color:'blue',price: 5000} ,
//                 { name:'mi',model:'m01',color:'black',price: 20000} 
// ]
// const getValuableProduct = products.find(product => product.price == 5000);
// console.log(getValuableProduct);


// destructuring of the array 
// const [first,second,three]=products;
// console.log(three);



// const add = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(add(1,4)); 




// let p='JavaScript'; let q=p; p='React'; console.log(q); 

// const isTrue='false';

// if(!isTrue){

// console.log('hello');

// }

// else{console.log('world');

// }




// function sum(p,q) {

//         console.log(p+q);
        
//         }
        
//         const result=sum(2,3);
        
//         console.log(result);


// if ('2'===2){

//         console.log('Inside if');
        
//         }
        
//         else{
        
//         console.log("Inside else");
        
//         }


// function work(x, y = 4){

//         return x + y;
        
//         }
        
//         console.log(work(32);



// const obj ={a:1, b:7, c:3, length:2};

// console.log(Object.keys(obj).length);


// const obj1= {module: 35, video:2};

// const obj2= {module: 35, video:2};

// console.log(obj1 === obj2);



// const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());

// const obj = {
//         name:'mahadi',
//         age : 22
// }
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// // setTimeout( () =>{
// //         console.log('hello mahadi');
// // } , 3000);
// for (const key in obj) {
//      console.log(key);
// }



// const promt = prompt();
// const intValue =parseFloat(promt);
// let value =intValue + 200;
//         alert(value);


// const confrm = confirm('are you see your location?');
// if (confrm) {
// console.log(location.href);
// }


// document.getElementById('add-to-cart').addEventListener('click', () =>{
//         let input = document.getElementById('input-box');
//         const inputValue = input.value;
     
//         createData(inputValue);
//         input.value ='';
//         const allProducts = getCart();
//         setData (inputValue);
       
// })

// const createData = (name) =>{
//         const ul = document.getElementById('ul');
//         li = document.createElement('li');
//         li.innerText = name;
//         ul.appendChild(li);
// }

// const getCart = ()=>{
//         const cart = localStorage.getItem('cart');
//         let cartObj;
//         if (cart) {
//                 cartObj = JSON.parse(cart);

//         }
//         else{
//                 cartObj = {};
//         }
//         return cartObj;
// }

//         const setData = (name) =>{
//                 const allProducts = getCart();
//                const product = allProducts[name]= 1;
//                console.log(product);

//                 const stringfied = JSON.stringify(allProducts);
               
//                         localStorage.setItem('cart', stringfied);
                
                
             
//         }



//         const displayItem = () =>{
//               const cart =  getCart();
           
//              console.log(cart);
               
//         //        const parsed = JSON.parse(cart);
//                for (const key in cart) {
//                 createData(key);
//                }
             
//         } 
//         displayItem ();


//         document.getElementById('place-order').addEventListener('click', () =>{
//                 const ul = document.getElementById('ul');
//                 ul.textContent = '';
//                 localStorage.removeItem('cart');
//         })



// const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};

// console.log(colors[grapes])



// const name = '';
// if (!!name) {
//         console.log("I am a name");
// }
// else{
//         console.log('I am not a name ');
// }


// const name = 'Hero';const age = 34;

// const person = {name, age}; console.log(person);



// adventurer = { name: 'Alice',cat: {name: 'Lucy'} };

// const ratName = adventurer?.rat?.name;
// console.log(ratName);


// let person =null;

// console.log(person ? person : "person is null");

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);


const obj = {a:1};

console.log(Object.keys(obj).length===0);
