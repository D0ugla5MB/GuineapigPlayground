//MATH STUFF

public class A {
    private long[] oddNumbers;
    private long[] primeNumbers;
    private static int remainder;



    static boolean makeModNum(int dividend, int divisor) {
        // Quotient × Divisor + Remainder = Dividend
        int quotient = 0;
        int remainderAux = 0;

        if (divisor == 0) {
            return false;
        }

        if (dividend >= divisor) {
            quotient = (dividend - remainderAux)/divisor;
            boolean odd = (quotient & 1) != 0;
            if (odd) {
                quotient = (dividend - remainderAux) / divisor;
                remainderAux = dividend - (quotient*divisor);

            }
        }else{
            remainderAux = dividend;
            quotient = 0;

        }
        boolean checkRmdr = (((quotient * divisor) + remainderAux) == dividend);
        /* System.out.println(dividend + "\smod\s"+ divisor+"\s=\s"+remainderAux);
        System.out.println("-------------------------------");
        System.out.printf("Dividend:\t%d\nDivisor:\t%d\nQuotient:\t%d\nRemainder:\t%d\n\n", dividend, divisor, quotient,
                remainderAux); */
        remainder = remainderAux;
        return checkRmdr;
    }

    private void doOddNum(int start, int limit) {

        int size = (limit - start) + 2;
        oddNumbers = new long[size];

        for (int i = start; i <= limit; i++) {
            oddNumbers[i] = 2 * i - 1;
        }
    }

    protected boolean isPandigital(long n) {
        if (n > -10 && n < 10) {
            return false;
        }
        if (n < 0) {
            n *= -1;
        }

        String auxStr = n + "";
        char[] numDigits = new char[auxStr.length()];
        int strSize = numDigits.length;
        boolean isSingle = true;
        int i = 0;
        int j = 0;
        for (i = 0; i < strSize; i++) {
            numDigits[i] = auxStr.charAt(i);
        }

        for (i = 1; i < strSize; i++) {
            char referenceDigit = numDigits[i];
            j = 0;

            for (j = i - 1; j >= 0 && numDigits[j] > referenceDigit; j--) {
                numDigits[j + 1] = numDigits[j];
            }

            numDigits[j + 1] = referenceDigit;
        }

        i = 0;
        j = i + 1;
        char digit = numDigits[i];
        strSize = numDigits.length - 1;

        while (i < strSize) {
            if (digit == numDigits[j]) {
                isSingle = false;
                return isSingle;
            }
            if (digit != numDigits[j]) {
                i++;
                digit = numDigits[i];
                j = i;
            }
            j++;
        }
        i = 0;
        j = 0;

        return isSingle;
    }

    private void generatePrimes(int start, int end) {

        int size = end - start;
        primeNumbers = new long[size];
        int cnt = 0; //

        if (start <= 2) {
            primeNumbers[cnt++] = 2L;
            start = 3;
        }

        for (int i = start; i < end; i += 2) {
            boolean isPrime = true;
            for (int j = 3; j * j <= i; j += 2) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumbers[cnt++] = i;
                if (cnt == size) {
                    break;
                }
            }
        }

    }

    public long[] getPrimeNumbers(int start, int limit) {
        generatePrimes(start, limit);
        return primeNumbers;
    }

    public long[] getOddNumbers(int start, int limit) {
        if (start == 1) {
            System.out.println(
                    "To choose the number one(1) as the starting point to will generate an even number: the zero(0)");
            return null;
        }
        if (start <= 0) {
            System.out.println("Enter only natural numbers without 0(zero)");
            return null;
        }

        doOddNum(limit, start);
        return oddNumbers;
    }

    public static int getRemainder(int dividend, int divisor) {
        A.makeModNum(dividend, divisor);
        return remainder;
    }

}
