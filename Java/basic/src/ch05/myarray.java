package ch05;

public class myarray {
    public static void main(String[] args) {
        int[] arr1 = new int[10]; // 배열은 a1, a2, a3... 많은 변수를 사용하고 싶을때
        int[] arr2 = {1, 2, 3, 4, 5};
        int a = 10;
        int[][] board = new int [a][a]; // 2차원 배열 선언

        arr1[3] = 10;
        arr2[2] = 55;

        for(int i = 0; i < arr2.length; i++) {
            System.out.println(arr2[i]);
        }

        for(int num : arr2) {
            System.out.println(num);
        }

        // TODO: 배열에 최대값 최소값 구하여 출력
        int[] myArr = {1, 3, 54, 4, 78, -3, 22};
    }
}
