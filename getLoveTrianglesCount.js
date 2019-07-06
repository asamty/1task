function getLoveTrianglesCount(preferences = []) 
{
  let l = preferences.length; 
  let c = 0;  
  for (let i = 0; i<l; i++) 
  { 
      let next = preferences[i] - 1;
      if (next == i) continue;
      let nextnextnext = preferences [next] -1;
      if (nextnextnext == i)
      {
          c++;
      }
   }
   return c / 3;
}

print(getLoveTrianglesCount([7,7,4,5,5]));
