//Create object named root1.
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector(".biscuits .count");
const donuts2 = root2.querySelector(".donuts .count");
const pancakes2 = root2.querySelector(".pancakes .count");
const status2 =  root2.querySelector(".status dd");

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

biscuits1.innerHTML = root1.getAttribute('data-biscuits');
donuts1.innerHTML = root1.getAttribute('data-donuts');
pancakes1.innerHTML = root1.getAttribute('data-pancakes');
status1.innerHTML = root1.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";




biscuits2.innerHTML = root2.getAttribute('data-biscuits');
donuts2.innerHTML = root2.getAttribute('data-donuts');
pancakes2.innerHTML = root2.getAttribute('data-pancakes');
status2.innerHTML = root2.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending