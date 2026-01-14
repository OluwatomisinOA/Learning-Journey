package LinearSearch;

import java.util.Arrays;

public class SearchIn2DArrays {

    public static void main(String[] args) {

        int[][] arr = {
                {12, 3, 4},
                {5, 23, 19, 6},
                {17, 48, 99},
                {2, 24, 34}
        };
        int target = 99;
        int[] ans = search(arr, target);
        System.out.println(Arrays.toString(ans));
        System.out.println("Max: " + searchMax(arr));
        System.out.println("Min: " + searchMin(arr));

    }

    static int[] search(int[][] arr, int target) {
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                if (arr[row][col] == target) {
                    return new int[] {row, col};
                }
            }
        }

        return new int[] {-1,-1};
    }

    static int searchMax(int[][] arr) {
        int max = Integer.MIN_VALUE;
        for (int[] ints : arr) {
            for (int element : ints) {
                if (element > max) {
                    max = element;
                }
            }
        }

        return max;
    }

    static int searchMin(int[][] arr) {
        int min = Integer.MAX_VALUE;
        for (int[] ints : arr) {
            for (int element : ints) {
                if (element < min) {
                    min = element;
                }
            }
        }

        return min;
    }

}
