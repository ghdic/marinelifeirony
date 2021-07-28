package ch14;

class ThreadEx {
    static long startTime = 0;

    public static void main(String args[]) {
        ThreadTest th1 = new ThreadTest();
        th1.start();
        startTime = System.currentTimeMillis();

        for(int i=0; i < 300; i++) {
            System.out.print("-");
        }

        System.out.println("\n소요시간1:" + (System.currentTimeMillis() - ThreadEx.startTime));
    }
}

class ThreadTest extends Thread {
    public void run() {
        for(int i=0; i < 300; i++) {
            System.out.print("|");
        }

        System.out.println("\n소요시간2:" + (System.currentTimeMillis() - ThreadEx.startTime));
    }
}
