class show{
    public int a = 34;

    public void show(){
        System.out.println("The value of a is "+a);
    }
}

public class tut1{
    public static void main(String[] args) {
        show s1 = new show();
        // System.out.println("the value of a is "+s1.a);
        s1.show();
    }
}