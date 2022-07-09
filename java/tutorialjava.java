class Animal{
    void show(){
        System.out.println("animal name");
    }
}

class Dog extends Animal{
    void showname(){
        System.out.println("Dog");
    }
}

class Cat extends Animal{
    void shownames(){
        System.out.println("Cat");
    }
}





// class Dog extends Animal{
//     void showname(){
//         System.out.println("Dog");
//     }
// }

// class Cat extends Dog{
//     void shownames(){
//         System.out.println("Cat extends from Dog");
//     }
// }


public class tutorialjava {
    public static void main(String [] args){
      Dog d1 = new Dog();
      Cat c1 = new Cat();


      d1.show();
      d1.showname();
      c1.show();
      c1.shownames();
    // //   c1.show();     
    //   c1.showname();
    //   c1.shownames();
    }
}
