<<<<<<< HEAD
public class C {

    static Object[] rotateArray(Object[] arr, int rotationNum, int index) {
        /*
         * Integer a = (Integer) arr[j];
         * Integer b = (Integer) arr[cnt];
         * a = a ^ b;
         * b = a ^ b;
         * a = a ^ b;
         */
        /*
         * for (int i = 0; i < rotationNum; i++) {
         * T elem = arr[0];
         * for (int j = 0; j < cycle; j++) {
         * arr[j] = arr[j + 1];
         * 
         * }
         * arr[cycle] = elem;
         * }
         * 
         */
            if (index >= rotationNum) {
                return arr;
            }
            int elem = A.getRemainder(rotationNum, index);
            arr[index + 1] = arr[elem];
         
        return rotateArray(arr, --rotationNum, ++index);
    }

    static Object[] rotateArrayV2(Object[] arr, int rotationNum, int index){

        int arrSize = arr.length;

        int posCnt = rotationNum % arrSize;

        int limit = A.getRemainder(arrSize, posCnt);
        for (int i = 0; i < limit; i++) {
            Object temp = arr[i];
            int j = i;

            while (true) {
                int newIndex = (j + posCnt) % arrSize;
                if (newIndex == i) {
                    break;
                }
                arr[j] = arr[newIndex];
                j = newIndex;
            }
            arr[j] = temp;
        }

        return arr;
    }
}


=======
public class C {

    static Object[] rotateArray(Object[] arr, int rotationNum, int index) {
        /*
         * Integer a = (Integer) arr[j];
         * Integer b = (Integer) arr[cnt];
         * a = a ^ b;
         * b = a ^ b;
         * a = a ^ b;
         */
        /*
         * for (int i = 0; i < rotationNum; i++) {
         * T elem = arr[0];
         * for (int j = 0; j < cycle; j++) {
         * arr[j] = arr[j + 1];
         * 
         * }
         * arr[cycle] = elem;
         * }
         * 
         */
            if (index >= rotationNum) {
                return arr;
            }
            int elem = A.getRemainder(rotationNum, index);
            arr[index + 1] = arr[elem];
         
        return rotateArray(arr, --rotationNum, ++index);
    }

    static Object[] rotateArrayV2(Object[] arr, int rotationNum, int index){

        int arrSize = arr.length;

        int posCnt = rotationNum % arrSize;

        int limit = A.getRemainder(arrSize, posCnt);
        for (int i = 0; i < limit; i++) {
            Object temp = arr[i];
            int j = i;

            while (true) {
                int newIndex = (j + posCnt) % arrSize;
                if (newIndex == i) {
                    break;
                }
                arr[j] = arr[newIndex];
                j = newIndex;
            }
            arr[j] = temp;
        }

        return arr;
    }
}


>>>>>>> parent of dc1dbf4 (fix class issue)
