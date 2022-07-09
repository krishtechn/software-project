public class arrays {
        public static void main(String[] args) {
        // an array is a collection of similar data type. an array is a object which contains the element of similar data type.
        // an array is base on index the first element of array is stored in zero and second element of array is stored in first(1st)
            // syntax to declare and initilize array:
            //    declare array:
            //     datatype [] arrname;
            //    initlize of array 
            //     datatype [] arrname = new int[3];
        // the two type of array in java 

        //  int a[] = new int[3];
        // a[0] = 2;
        //  int a[] = {1,2,3};
        //  System.out.println(a[2]);

        // let us see the simple example in array to find minimum number 
        // int number[] = {90,50,80,30,4};
        //  int min = number[0];
        //  for (int i=0; i < number.length; i++){
        //      if(number[i] < min){ 
        //         min = number[i];
        //      }
        //  }
        //  System.out.println("the min number is : "+min);

        // accessing array element using foreach loop 
        // for (int value : number){
        //     System.out.println(value);
        // }

        // multidimensional array
        //   int []arr[] = {
        //       {1,2,3},{3,4,5},
        //       {4,5,6},{2,3,5},
        //   };

        //   for(int i=0; i<arr.length; i++){
        //       for(int j=0; j<arr[i].length; j++){
        //           System.out.println("The array element is "+arr[i][j]);
        //       }
        //   }

        //  passing array in method : we can passing java array to the method. so that we can reused that code on same logic.


    }
}
