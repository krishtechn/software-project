class rectangle{
    public void area(int l,int b){
        int area = l * b;
        System.out.println("The area of rectangle is "+area);
    }
}
public class first{
    public static void main(String [] args){
         rectangle r1 = new rectangle();
        //  Scanner sc = new Scanner(System.in);
        //  System.out.println("Enter Length: ");
        //  int l = sc.nextInt();
        //  System.out.println("Enter breadth: ");
        //  int b = sc.nextInt();
         r1.area(3,4);
    }
}