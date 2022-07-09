class Animal{
    void eat(){
        System.out.println("eating");
    }
}

class Dog extends Animal{
    void Break(){
        System.out.println("break");
    }
}

public class Singleinheritance{
    public static void main(String[] args) {
        System.out.println("single inheritance in java");
        Dog d1 = new Dog();
        d1.eat();
        d1.Break();
    }
}