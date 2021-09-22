function solution(list){
  // TODO: complete solution 
   
 //   Go through each element in array
 //   if element is unique, add new element + comma
 //   if element is one more than previous element, and one less than next element, return previous element
 //   if element is one more than previous element, but not one less than next, return dash + element + comma
   debugger;
   return list.reduce((prevString, num, idx, list) => {
     
     if (num - list[idx - 1] === 1) {
       
       if (num - list[idx + 1] === -1) {
         return prevString;
       }
       
       return prevString.slice(0, -1) + '-' + String(num) + ',';
       
     }
     
     return prevString + String(num) + ',';
   }, "");
                     
 }

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);