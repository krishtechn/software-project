class Student{
    String name = "krishna kharal";
    int age = 17;
    Boolean issignup = true;
    final private int password = 1235;


   final void showdata(){
        System.out.println("you are student your name is "+name+"your passwor is "+password+ " your age is "+age);
    }
}

class Teacher extends Student{
    int age = 30;
    void showteacherdata(){
        System.out.println("you are teacher your name is "+name+" your age is "+age);
    }
}

class parent extends Student{
    int age = 40;
    void showparentdata(){
        System.out.println("you are parent your son name is "+name+" my age is "+age);
    }   
}

class member extends parent{

}

public class inheritance{
    public static void main(String[] args) {
        // Student s1 = new Student();
        // s1.showdata();
        Teacher t2 = new Teacher();
        t2.showdata();
        t2.showteacherdata();
        // parent p1 = new parent();
        // p1.showdata();
        // p1.showparentdata();
        
        member m1 = new member();
        m1.showdata();
        m1.showparentdata();
    }
}