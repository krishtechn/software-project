public class pattern {
    public static void main(String[] args) {
        // 1
        // 1 2
        // 1 2 3
        // 1 2 3 4
        
        // int i,j,n=4;
        // for(i=1; i<=n; i++){
        //     for(j=1;j <= i; j++){
        //         System.out.print(j);
        //     }
        //     System.out.print("\n");
        // }

        // 4 3 2 1
        // 3 2 1
        // 2 1
        // 1
        
        int i,j,n=4;
        for(i=n; i >= 1; i--){
            for(j=i; j >= i; j--){
                System.out.print(j);
            }
            System.out.print("\n");
        }
    }
}
