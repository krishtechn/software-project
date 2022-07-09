final class Student{
    int a = 34;
    void showname(){
        System.out.println("Krishna kharal");
    }
}
// final method and variable are inherited but we can't reassign it and final class can't be inherited
// class Teacher extends Student{

// }


public class finalkeyword {
    public static void main(String[] args) {
        // final variable 
        /* final int a = 34;
        System.out.println("The value of a is :-"+a);
        a = 45;
        // it will show compile time error 
        System.out.print(a);*/

        //final method
       /* Student s1 = new Student();
        s1.showname();
        Teacher t1 = new Teacher();
        t1.showname();
        System.err.println(t1.a);
        */

        // final class 
         Student s1 = new Student();
         s1.showname();
         s1.a = 340;
        System.out.println(s1.a);
    }
}
