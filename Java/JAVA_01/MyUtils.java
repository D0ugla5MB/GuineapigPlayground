<<<<<<< HEAD
import java.util.Random;

public class MyUtils {
    public final static Random RANDOM_OBJ = new Random();

    public static int rng(int min, int max) {
        return RANDOM_OBJ.nextInt(min, max);
    }

    public static char rdnChar() {
        return (char) RANDOM_OBJ.nextInt(65, 91);
    }

    public static Object getNumOrChar() {
        int rng = RANDOM_OBJ.nextInt();
        if (rng >= 0) {
            return rng(-1000, 1000);
        }
        return rdnChar();
    }

    public static Object[] arr(int size) {
        class Option {

            Object chooseOpt() {
                int rng = RANDOM_OBJ.nextInt();
                if (rng >= 0) {
                    return rng(-1000, 1000);
                }
                return rdnChar();
            }

            Option() {
            }
        }

        Object[] arr = new Object[size];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new Option().chooseOpt();
        }
        return arr;
    }

    public static Object[] makeVector(int size){
        Object[] arr = new Object[size];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = getNumOrChar();
        }
        return arr;
    }

    public static Object[][] makeMatrix(int r, int c){
        Object[][] arr = new Object[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                arr[i][j] = getNumOrChar();
            }
        }
        return arr;
    }

    
}
=======
import java.util.Random;

public class MyUtils {
    public final static Random RANDOM_OBJ = new Random();

    public static int rng(int min, int max) {
        return RANDOM_OBJ.nextInt(min, max);
    }

    public static char rdnChar() {
        return (char) RANDOM_OBJ.nextInt(65, 91);
    }

    public static Object getNumOrChar() {
        int rng = RANDOM_OBJ.nextInt();
        if (rng >= 0) {
            return rng(-1000, 1000);
        }
        return rdnChar();
    }

    public static Object[] arr(int size) {
        class Option {

            Object chooseOpt() {
                int rng = RANDOM_OBJ.nextInt();
                if (rng >= 0) {
                    return rng(-1000, 1000);
                }
                return rdnChar();
            }

            Option() {
            }
        }

        Object[] arr = new Object[size];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new Option().chooseOpt();
        }
        return arr;
    }

    public static Object[] makeVector(int size){
        Object[] arr = new Object[size];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = getNumOrChar();
        }
        return arr;
    }

    public static Object[][] makeMatrix(int r, int c){
        Object[][] arr = new Object[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                arr[i][j] = getNumOrChar();
            }
        }
        return arr;
    }

    
}
>>>>>>> parent of dc1dbf4 (fix class issue)
