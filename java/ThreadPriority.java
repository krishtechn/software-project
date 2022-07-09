public class ThreadPriority extends Thread{

    public void run(){
        System.out.println(Thread.currentThread().getName());
        System.out.println(Thread.currentThread().getPriority());
    }
    public static void main(String[] args) {
        ThreadPriority t1 = new ThreadPriority();
        ThreadPriority t2 = new ThreadPriority();
        ThreadPriority t3 = new ThreadPriority();

        t1.setName("krish");
        t2.setName("krishna");
        t3.setName("ram");

        t1.setPriority(3);
        t2.setPriority(9);
        t3.setPriority(12);

        t1.start();
        t2.start();
        t3.start();
    }
}