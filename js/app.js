'use strict';

// As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown

function Products (name, fileExtension = 'jpg') {
  this.name =name;
  this.src= `img/${name}.${fileExtension}`;
  this.views= 0;
  this.likes= 0;

  let bag = new Products('bag');
  let banana= new Products('banana');
  let bathroom= new Products('bathroom');
  let boots = new Products('boots');
  let breakfast = new Products('breakfast');
  let bubblegum = new Products('bubblegum');
  let chair = new Products('chair');
  let cthulhu = new Products('cthulhu');
  let dogduck = new Products('dog-duck');
  let dragon = new Products('dragon');
  let pen = new Products('pen');
  let petSweep = new Products('petSweep');
  let scissors = new Products('scissors');
  let shark = new Products('shark');
  let sweep = new Products('sweep');
  let tauntaun = new Products('tauntaun');
  let unicorn = new Products('unicorn');
  let waterCan = new Products('waterCan');
  let wineGlass = new Products('wineGlass');

  let allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];









}

