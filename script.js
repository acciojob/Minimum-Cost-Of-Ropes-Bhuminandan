function calculateMinCost() {
    let inputValue = document.getElementById('rope-lengths').value;
    let arr = inputValue.split(",");
    // console.log(arr);

    // Create a priority queue
    let pq = [];
   
    // Adding items to the pQueue
    for (let i = 0; i < arr.length; i++) {
        pq.push(Number(arr[i]));
    }  

    arr.sort(function(a,b){return a-b;});

     // Initialize result
     let res = 0;

   while(pq.length > 1) {
        let first = pq.shift();
        let second =  pq.shift();

        res += first + second;
        pq.push(first + second);
        pq.sort(function(a,b){return a-b;});

   }

   document.getElementById( 'result' ).innerHTML = res;

}  
