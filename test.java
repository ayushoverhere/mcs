// rail fence decryption
import java.util.Scanner;
public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int n = sc.nextInt();
        int key = 0;
        int len = s.length();
        int row = 0;
        int col = 0;
        int[][] arr = new int[n][len];
        for (int i = 0; i < len; i++) {
            if (key == 0) {
                arr[row][col] = s.charAt(i);
                row++;
                if (row == n) {
                    key = 1;
                    row--;
                }
            } else {
                row--;
                col++;
                arr[row][col] = s.charAt(i);
                if (row == 0) {
                    key = 0;
                    row++;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < len; j++) {
                if (arr[i][j] != 0) {
                    System.out.print((char) arr[i][j]);
                }
            }
        }
    }
}
