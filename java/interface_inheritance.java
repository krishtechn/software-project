interface draw{
  void draws();
}

interface show extends draw{
  void shows();
}

class display implements show{
    public void draws(){
        System.out.println("draw shape");
    }
    public void shows(){
        System.out.println("rectangle");
    }
}

public class interface_inheritance {
    public static void main(String[] args) {
        display d1 = new display();
        d1.draws();
        d1.shows();
    }
}
