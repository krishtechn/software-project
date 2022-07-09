class override{
    void show(){
        System.out.println("this is the method of first class");
    }
}

class overrides extends override{
    void show(){
        System.out.println("this is the method of first class");
    }
}

public class methodoveriding {
    public static void main(String[] args) {
        overrides o1 = new overrides();
        o1.show(); 
    }
}
