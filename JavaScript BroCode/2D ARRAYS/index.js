const matrix = [[1,3,5], 
               [4,7,9], 
               [10,11,12],
                ['*', 0, '#']];

            //    matrix [0] [0] = 'X';
            //    matrix [0] [1] = 'O';
            //    matrix [0] [2] = 'X';

            //    matrix[1][0] = 'O';
            //    matrix[1][1] = 'X';
            //    matrix[1][2] = 'O';
              
            //    matrix[2][0] = 'X';
            //    matrix[2][1] = 'O';
            //    matrix[2][2] = 'X';

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}
