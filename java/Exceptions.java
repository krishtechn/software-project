public class Exceptions {
    public static void main(String[] args) {
        // it will throw an Exception so we will handle error to handle error in java we have try and catch 
        try{
            int a = 34/0;
            System.out.println("The value of a is:- "+a);
        }catch(Exception e){
            System.out.println("some error found");
        }finally{
            System.out.println("finally keyword are run anyway");
        }
    }
}
