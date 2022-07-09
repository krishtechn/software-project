import java.util.Scanner;
public class avg {
    public static void main(String [] args){
      System.out.println("enter a,b,c:\n");
      Scanner sc = new Scanner(System.in);
      int a,b,c;
      float avg=0;

    //   a = sc.nextInt();
    //   b = sc.nextInt();
    //   c = sc.nextInt();
        a = 3;
        b = 3;
        c = 3;

      avg = (a + b + c)/3;
      System.out.println("The avg of three number is :"+avg);

    }
}
