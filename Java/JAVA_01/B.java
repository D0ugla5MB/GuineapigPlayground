//TRANSFORM A 2D MATRIX TO ONE VECTOR   

public class B {

    // GETTING THE NEW ARRAY TOTAL SIZE BEFORE
    static Object[] b0(Object[][] aux) {
        int vectorsNum = aux.length;
        int arrSize = 0;

        for (int i = 0; i < vectorsNum; i++) {
            arrSize += aux[i].length;
        }
        Object[] arr = new Object[arrSize];

        arrSize = 0;
        for (int i = 0; i < vectorsNum; i++) {
            for (int j = 0; j < aux[i].length; j++) {
                arr[arrSize++] = aux[i][j];
            }
        }
        return arr;
    }

    // UPDATING THE NEW ARRAY TO EACH MATRIX'S VECTORS
    static Object[] b1(Object[][] aux) {

        if (aux.length == 0) {
            return new Object[0];
        }

        Object[] arr;
        int numVector = aux.length;
        int arrSize = aux[0].length;
        arr = new Object[arrSize];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = aux[0][i];
        }

        for (int i = 1; i < numVector; i++) {

            Object[] tempArr = new Object[arrSize];
            for (int j = 0; j < arrSize; j++) {
                tempArr[j] = arr[j];
            }

            int vectorSize = aux[i].length;
            arrSize = arrSize + vectorSize;
            arr = new Object[arrSize];

            for (int j = 0; j < tempArr.length; j++) {
                arr[j] = tempArr[j];
            }

            for (int j = 0; j < vectorSize; j++) {
                arr[arrSize - vectorSize + j] = aux[i][j];
            }

        }
        return arr;
    }

    // GETTING THE MATRIX AND SAVING IT IN A STRING TO TRANSFORM IT IN AN ARRAY
    // AFTER
    static Object[] b2(Object[][] aux) {
        final String MARKER = ",";
        String str = "";
        String num = "";
        int quantityElem = 0;

        for (int i = 0; i < aux.length; i++) {
            int j = 0;
            for (j = 0; j < aux[i].length; j++) {
                str += aux[i][j] + MARKER;
            }
            quantityElem += j;
        }
        int arrSize = quantityElem;
        Object[] arr = new Object[arrSize];
        int charPos = 0;
        int arrInd = 0;

        while (charPos <= str.length() - 1) {
            if (str.charAt(charPos) != ',') {
                num += str.charAt(charPos);
                charPos++;
            } else {
                arr[arrInd] = num;
                num = "";
                arrInd++;
                charPos++;
            }
        }
        return arr;
    }
}