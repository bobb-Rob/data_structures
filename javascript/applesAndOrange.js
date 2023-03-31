function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // Get the distance where the friuts land by adding the location of the trees to each unit distance of the fruits
  // Filter the fruits that land on the house
  // Get the length of the filtered fruits
  const applesOnHouse = apples.map(apple => apple + a).filter(apple => apple >= s && apple <= t).length;
  const orangesOnHouse = oranges.map(orange => orange + b).filter(orange => orange >= s && orange <= t).length;
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

