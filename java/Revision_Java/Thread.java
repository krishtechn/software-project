import java.lang.*;
public class Thread{
    public static void main(String[] args) {
        // System.out.println("run top of exception"); //this statement run
        // int a = 3 / 0;
        // System.out.println(a);
        // System.out.println("run last of exception"); //can not run this code because of exception
    
        System.out.println("run top of exception"); //this statement run
        try{
            int a = 3 / 0;
            System.out.println(a);
        }catch(Exception e){
            System.out.println("some error found");
        }finally{
            System.out.println("run final keyword"); 
        }
    

    }
}
