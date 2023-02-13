function compareTriplets(a, b) {
  let result = [0,0];
  
  for(let i = 0; i <= a.length; i++) {
      if (a[i] > b[i]) result[0]++;            
      if(b[i] > a[i])  result[1] += 1;     
  }
   return result;
}

function diagonalDifference(arr) {
  // Write your code here
  // FInd the left to right diagonal sum
    // Loop through the given array, for each array
    let leftToRightDiag = 0;
    let rightToLeftDiag = 0;
      for (let i =0; i <= arr.length - 1; i++) {
        console.log(arr[i][i]);
        leftToRightDiag += arr[i][i];
        console.log(arr[i][arr.length - i - 1]);
        rightToLeftDiag += arr[i][arr.length - i - 1];
      }
      console.log(Math.abs(leftToRightDiag - rightToLeftDiag))
      return Math.abs(leftToRightDiag - rightToLeftDiag);
  // FInd the right to left diagonal sum
  // Find their absolute different
  // return it
  
}
// diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]])



function minMaxSum(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  console.log(min)
    let max = Number.MIN_SAFE_INTEGER;
    console.log(max)
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      if (arr[i] < min) {
        min = arr[i];
        console.log("min block: ",arr[i], i);      
      }
      if (arr[i] > max) {
          max = arr[i];
          console.log("max block: ",arr[i], i);
          
      }
      sum += arr[i];
    }
    console.log((sum - max) + " " + (sum - min));
}


// minMaxSum([1,2,3,4,5]);

function timeConversion(s) {
  // Write your code here 
  let pmOrAm = s.charAt(s.length - 2) + s.charAt(s.length - 1)
  let time = s.charAt(0) + s.charAt(1);
  let newTime = '';
  if (pmOrAm === 'PM' && time !== '12') {
      newTime = `${Number(time) + 12}${s.slice(2, -2)}`     
  } else if (pmOrAm === 'AM' && time === '12') {
      newTime = `00${s.slice(2, -2)}`    
  } else {
      newTime = s.slice(0, -2)
  }
  return newTime; 
}

// timeConversion('05:05:45AM')

// function gradingStudents(grades) {
//   // Write your code here
//   // diffrence btw grade and Next multiple of 5 is less than 3, round grade up to the next multiple of 5
//   // if grade is less than, no rounding occurs
//   let result = [];
//   for(let i = 0; i < grades.length; i++) {
//     let grade = grades[i];    
//     if (grade >= 38) {
//       if (grade % 5 === 4) result.push(grade + 1);
//       if (grade % 5 === 3) result.push(grade + 2);
//       if (grade % 5 === 2 ) result.push(grade)
//       if (grade % 5 === 1 ) result.push(grade)
//       if (grade % 5 === 0 ) result.push(grade)
//     } else {
//       result.push(grade)
//     }
//   }
//   return result;
// }

function gradingStudents(grades) {
  let result = [];
  for(let grade of grades) {
    if (grade >= 38 && grade % 5 >= 3) {
      grade = grade + (5 - (grade % 5));
    }
    result.push(grade);
  }
  return result;
}

function gradingStudent(grades) {
  // this solution has a time complexity of O(n) but space complexity is reduced from O(n) to O(1)
  for(let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 >= 3) grades[i] = grades[i] + (5 - (grades[i] % 5));
  }
  return grades;
}

console.log(gradingStudent([80, 84,23,38,33, 96, 73]))
