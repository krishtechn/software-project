interface x{
    void draw();
    void eat();
}

class y implements x{
    public void draw(){
      System.out.println("draw car");
    }

    public void eat(){
        System.out.println("car does not eat");
    }
    
    void display(){
        System.out.println("this is method of y");
    }
}

public class interfaces {
    public static void main(String[] args) {
        y y1 = new y();
        y1.draw();
        y1.display();
        y1.eat();
    }
}
