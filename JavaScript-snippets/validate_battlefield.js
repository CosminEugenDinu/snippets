/**
* Write a method that takes a field for well-known board game "Battleship" as
* an argument and returns true if it has a valid disposition of ships, false
* otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements
* in the array are numbers, 0 if the cell is free and 1 if occupied by ship.
* Battleship (also Battleships or Sea Battle) is a guessing game for two 
* players. Each player has a 10x10 grid containing several "ships" and objective
*  is to destroy enemy's forces by targetting individual cells on his field. 
* The ship occupies one or more cells in the grid. Size and number of ships may
*  differ from version to version. In this kata we will use Soviet/Russian 
* version of the game. 
* Before the game begins, players set up the board and place the ships 
* accordingly to the following rules:
*  - There must be single battleship (size of 4 cells), 2 cruisers (size 3),
*  3 destroyers (size 2) and 4 sub marines (size 1). Any additional ships are
*  not allowed, as well as missing ships.
*  - Each ship must be a straight line, except for submarines, which are just 
* single cell.
*  - The ship cannot overlap or be in contact with any other ship, neither by
*  edge nor by corner.
*/


function validateBattlefield(field) {

  const allShapes = new Map();

  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      const location = [y, x].toString();
      if (field[y][x] === 1) {
        allShapes.set(location, getNeighbors(location, field));
      }
    }
  }

  // console.log(allShapes)
  const shapes = findShapes(allShapes);
  // console.log(shapes)
  try {
    shapes.forEach((shape, _, shapes) => {
      validateShape(shape);
      validateShipNumber(shapes);
    });
  } catch (err) {
    if (err instanceof InvalidShape) {
      console.log('Invalid Shape', err);
      return false;
    } else if (err instanceof InvalidNumberOfShips) {
      console.log('InvalidNumberOfShips', err);
      return false
    }
  }
  return true;
}

function findShapes(allShapes) {
  const shapes = new Map();

  function _findShape(location, allShapes, shape) {
    const neighbors = allShapes.get(location);
    if (neighbors.length === 0) {
      shape.add(location);
      return;
    }
    for (const neighbor of neighbors) {
      if (shape.has(neighbor)) {
        continue;
      } else {
        shape.add(neighbor);
        _findShape(neighbor, allShapes, shape);
      }
    }
  }

  allShapes.forEach((_, location) => {
    const shape = new Set();
    _findShape(location, allShapes, shape);
    const shapeKey = [];
    shape.forEach(location => shapeKey.push(location));
    shapes.set(shapeKey.sort().toString(), shape);
  })

  return shapes;
}


function getNeighbors(location, field) {
  const [_y, _x] = location.split(',').map(pos => +pos);

  const surroundings = [
    [_y - 1, _x - 1], [_y - 1, _x], [_y - 1, _x + 1], // top neighbors
    [_y, _x - 1], /*[_y, _x],*/[_y, _x + 1], // on row neighbors
    [_y + 1, _x - 1], [_y + 1, _x], [_y + 1, _x + 1] // bottom neighbors
  ];

  const neighbors = [];

  for (const position of surroundings) {
    const [y, x] = position;

    const maxY = field.length - 1, maxX = field[0].length - 1;
    if (y < 0 || x < 0) continue;
    if (y > maxY || x > maxX) continue;

    if (field[y][x] === 1) {
      neighbors.push(position.toString());
    }
  }
  return neighbors;
}

function validateShape(shape) {
  const yCoordinates = [], xCoordinates = [];
  shape.forEach(pair => {
    const [_y, _x] = pair.split(',');
    const [y, x] = [+_y, +_x];
    yCoordinates.push(y);
    xCoordinates.push(x);
  });
  const yDiff = Math.max(...yCoordinates) - Math.min(...yCoordinates);
  const xDiff = Math.max(...xCoordinates) - Math.min(...xCoordinates);
  const shipMaxLong = 4;
  if (
    yDiff === 0 && xDiff < shipMaxLong ||
    yDiff < shipMaxLong && xDiff === 0) {
    return true;
  }
  else {
    throw new InvalidShape(shape);
  }
}

function validateShipNumber(shapes) {
  const battelships = [], B = 1;
  const cruisers = [], C = 2;
  const destroyers = [], D = 3;
  const submarines = [], S = 4;
  for (const shape of shapes.values()) {
    if (shape.size === 4) battelships.push(shape);
    if (shape.size === 3) cruisers.push(shape);
    if (shape.size === 2) destroyers.push(shape);
    if (shape.size === 1) submarines.push(shape);
  }
  if (battelships.length !== B) throw new InvalidNumberOfShips(battelships);
  if (cruisers.length !== C) throw new InvalidNumberOfShips(cruisers);
  if (destroyers.length !== D) throw new InvalidNumberOfShips(destroyers);
  if (submarines.length !== S) throw new InvalidNumberOfShips(submarines);
  return true;
}

function InvalidShape(shape) {
  this.shape = shape;
}
function InvalidNumberOfShips(ships) {
  this.ships = ships;
}


const assert = require('assert').strict;

const field = [
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0], // 0
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0], // 1
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0], // 2
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 4 
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0], // 5 
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 6
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 7
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 9
];

assert(validateBattlefield(field));

const test_getNeighbors = () => {
  const cases = [
    ['0,0', ['1,0']],
    ['1,2', ['2,2']],
    ['1,2', ['2,2']],
    ['2,0', ['1,0','3,0']],
    ['5,5', ['5,4', '5,6']],
    ['9,9', []],
    ['1,9', ['1,8', '2,8']],
  ];
  for (const [location, neighbors] of cases) {
    assert.deepStrictEqual(getNeighbors(location, field).sort(),neighbors.sort());
  }
};
test_getNeighbors();

const field1 = [
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0], // 0
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0], // 1
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0], // 2
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 4 
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0], // 5 
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0], // 8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 9
];

// assert(validateBattlefield(field1));