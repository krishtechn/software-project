import java.lang.Thread;
// public class Threads extends Thread{
//     public void run(){
//         System.out.println("run method is running");
//     }
//     public static void main(String[] args) {
//         Threads t1 = new Threads();
//         t1.run();
//         t1.start();
//     }
// }

// Runnable interface in java 
public class Threads implements Runnable{
         public void run(){
             System.out.println("run method is running");
         }
         public static void main(String[] args) {
             Threads t1 = new Threads();
             Thread t2 = new Thread(t1);
            //t2.run();
             t2.start();
         }
}