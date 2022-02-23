/**
 * JS has been seven types : i)Number ii) String iii) Boolean iv) Undefined v) Null vi) Symbol vii) Object
 * JS are divided into two broad categories :
 *          Primitive data types
 *          Non-primitives data types
 */


// Primitive data types are data types that refer to a single value. এই ডাটা টাইপটি পরিবর্তন যোগ্য নয় । যখন আমরা একটি variable declare করি । যেমন 
var a = 5;
// এটি একটি integer ডাটা টাইপ এবং এটি হচ্ছে single integer value . এই variable টা একটি মেমোরি উল্লেখ করে । আমরা যদি এই varible টার value change করতে চাই । তাইলে variable টিতে আমাদের নতুন একটি value assign করতে হবে । 
// কিন্তু আমরা যখন variable create করি । তখন সে তার জন্য memory address declare করে ফেলে । তাই যখন আমরা আগের declare করা variable এ অন্য value assign করতে চাই 
var a = 6;
//  এখানে আগের variable a = 5 and পরের variable a = 6 সম্পূর্ণ আলাদা । পরের varialbe টি নতুন একটি variable declare করে । 
// আমরা চাইলে একটি variable value অন্য varialbe এ assign করতে পারি । কিন্তু এতে করে value assign or value copy হয় থাকে কোন memory address copy হয় না ।  
var a1 = a;
// এখানে দুইটার value same কি না সেটা চেক করা হচ্ছে 
console.log(a === a1);


// console.log('\n');

// Non-primitive data types are objects. Objects ধারণ করে থাকে key-value এর ঠিকানা / address / reference । আমরা যদি একটি object অন্য object এ assign করি । সেক্ষেত্রে শুধু value assign হয় না , সাথে memory address copy হয়ে থাকে । 

var obj = {a: 5, a1: 6};
// এখানে obj and obj1 একই মেমোরি এড্রেস উল্লেখ করতেছে । 
var obj1 = obj;
console.log(obj1);

// object এর ভ্যালু same কি না সেটা চেক করার জন্য 
console.log(JSON.stringify(obj) === JSON.stringify(obj1));
// object দুইটা যদি compare করি তাহলে তারা তাদের address in memory চেক করবে যে একই আছে কই না । 
console.log(obj === obj1);

var obj2 = {a:9, a1:10};
var obj3 = {a:9, a1:10};
console.log(JSON.stringify(obj2) === JSON.stringify(obj3));
console.log(obj2 === obj3);
console.log(obj2);

// primitive ডাটা টাইপস কপি দা ভ্যালু , Non-primitive ডাটা টাইপস কপি দা মেমোরি অ্যাড্রেস 
// primitive data types উল্লেখ করে 'single value' ইন অ্যাড্রেস ইন মেমোরি  , Non-primitive data types উল্লেখ করে অ্যাড্রেস ইন মেমোরি যা বহন করে single or multiple key-value pair/s