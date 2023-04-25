import { observable, autorun, action, computed } from 'mobx';

let cart = observable({
  itemCount: 0,
  modified: new Date(),
});

autorun(() => {
  console.log(`The Cart contains ${cart.itemCount} item(s).`);
}); // => 控制台输出： The Cart containers 0 item(s)

// 不管用，不知道为什么
// const computedCartItemCount = computed(() => {
//   debugger;
//   console.log('cart.itemCount', cart.itemCount);
//   return `itemCount: ${cart.itemCount}`;
// });

// console.log(computedCartItemCount);

const app = document.getElementById('app');

const button = document.createElement('button');
button.textContent = 'itemCount + 1';
button.addEventListener(
  'click',
  action((e) => {
    // console.log(e);
    cart.itemCount = cart.itemCount + 1;
  })
);

app.appendChild(button);
