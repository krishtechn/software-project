class area{
    void Area(int l,int b){
      float area = l * b;
      System.out.println("The area of reactangle is "+area);
    }

    void Area(float r){
        double area = 3.14 * r * r;
        System.out.println("The area of circle is "+area);
    }
}

public class methodoverloading {
    public static void main(String[] args) {
       area a1 = new area();
       a1.Area(3);
       a1.Area(3, 4); 
    }
}

// methodoverloading is the features in java that allow a class to have more then one method but there 
// argument list is different.the above eg show that there are two method with same name Area() but the 
// passing argument is different. if the parementer is same it will show an error.