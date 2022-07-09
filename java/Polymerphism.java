class Animal{
    void showsound(){
        System.out.println("The animal name is:- ");
    }
}

class Dog extends Animal{
    void showsound(){
        System.out.println("Dog");
    }
}


public class Polymerphism {
    public static void main(String[] args) {
        Animal d1 = new Dog();
        d1.showsound();
    }
}
