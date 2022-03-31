// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। প্রশ্ন ছিল ।।


function hourToMin(times){
  let formala = times * 60;
  return formala;
}
let hour = 2;
let output =hourToMin(hour) + " minutes";
console.log(output);


