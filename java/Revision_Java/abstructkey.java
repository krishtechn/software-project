abstract class shape{
  abstract void draw();
  abstract void eat();

  void display(){
      System.out.println("this is non abstruct method");
  }
} 

class circle extends shape{
    void draw(){
        System.out.println("draw circle");
    }
    void eat(){
        System.out.println("circle eat");
    }
}

public class abstructkey {
    public static void main(String[] args) {
      circle c1 = new circle(); 
      c1.draw(); 
      c1.eat();      
    }
}
