const categoriesItem = document.querySelectorAll('li.item');

console.log('Numbers of categories :', categoriesItem.length);

categoriesItem.forEach(item => {
  console.log(`Category:`, item.querySelector('h2').textContent);

  console.log(`Elements:`, item.querySelectorAll('ul li').length);
});
