class shape{
    void draw(){
        System.out.println("draw shape you like");
    }
}

class rectangle extends shape{
    void draw(){
        System.out.println("rectangle");
    }
}

class circle extends shape{
    void draw(){
        System.out.println("circle");
    }
}

public class DynamicBinding {
    public static void main(String[] args) {
       rectangle r1 = new rectangle();
       r1.draw();
       circle c1 = new circle();
       c1.draw();
    }
}
