abstract class Animal{
    abstract void Animalname();
 }
 
 class Dog extends Animal{
     void Animalname(){
         System.out.println("animal name is : dog");
     }
 }f
 
 class Cat extends Animal{
     void Animalname(){
         System.out.println("animal name is : cat");
     }
 }
 
 public class abstructkey {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        Cat c1 = new Cat();
        d1.Animalname();
        c1.Animalname();
    } 
 }
 