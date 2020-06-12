const objectA = {
   "John": 100,
   "Pete": 300,
   "Mary": 250  
};
const objectB = {
   "John": 100,
   "Pete": 300,
   "Mary": 250    
};

function isDeepEqual(objectA, objectB) {
   if (typeof objectA !== "object" && objectA == 0
    && typeof objectB !== "object" && objectB == 0) {
      return false;
   }
   const isPropsExistA = Object.keys(objectA).length;
   const isPropsExistB = Object.keys(objectB).length;
   if (isPropsExistA !== isPropsExistB) {
      return false;
   }
   for (const key in objectA)  {
      if (objectA[key] !== objectB[key]) {
         return false;
      }
   } 
   return true;    
}
console.log(isDeepEqual(objectA, objectB));



