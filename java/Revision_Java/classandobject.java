class area{
    int a = 34;
    void showarea(int l, int b){
        float area = l * b;
        System.out.println("The area of rectangle is "+area);
    }
}
public class classandobject {
    static int ab = 340;
  public static void main(String[] args) {
      area a1 = new area();
      int l = 3;
      int b = 40;
    //   a1.showarea(l, b);
    System.out.println(a1.a);
    System.out.println(ab);
  }   
}
