class Animal{
    void Animal(){
      System.out.print("Animal group");
    }
}

class Dog extends Animal{
    void AnimalSound(){
        System.out.println("Dog sound:- vow vow");
    }
}

class Cat extends Animal{
    void AnimalName(){
        System.out.println("Animal name:- Cat");
    }
}

public class multipleinheritance {
    public static void main(String[] args) {
        System.out.println("multiple inheritance");
        Cat c1 = new Cat();
        Dog d1 = new Dog();
        c1.Animal();
        c1.AnimalName();

        d1.Animal();
        d1.AnimalSound();
    }
}
