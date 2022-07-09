import java.util.Scanner;

public class arraymax {
    public static void main(String[] args) {
        int size;
        // Scanner sc = new Scanner(System.in);
        // int a = sc.nextInt();
        // number = new int[a];

        int number[] = {1,2,3,4,929};
        int large = number[0];
        for(int i=0; i<number.length; i++){
            if(large < number[i]){
               large=number[i];
            }
        }
        System.out.println("The largest number from array is :"+large);
    }
}
