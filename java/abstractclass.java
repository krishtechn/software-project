abstract class Animal{
  abstract void Animalname();
  public void show(){
      System.out.println("This is non abstruct method");
  }
}

class Dog extends Animal{
    public void Animalname(){
        System.out.println("Animal Name :- Dog");
    }
}

public class abstractclass {
    public static void main(String[] args) {
        System.out.println("Abstract class in java");
        Dog d1 = new Dog();
        d1.Animalname();
        d1.show();
    }
}
