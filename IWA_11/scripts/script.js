//Create object named root1.
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

biscuits1.innerHTML = root1.getAttribute('data-biscuits');
donuts1.innerHTML = root1.getAttribute('data-donuts');
pancakes1.innerHTML = root1.getAttribute('data-pancakes');
status1.innerHTML = root1.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";




// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending