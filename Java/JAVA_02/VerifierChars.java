import java.io.File;
import java.io.IOException;
import java.util.function.Supplier;

public class VerifierChars {

    Supplier<String> fileData = () -> {
        return null;
    };

    boolean verifyFileExistence(File f) {
        if (f.exists()) {
            return true;
        }
        System.out.println("File not found");
        return false;
    }

    int searchInitialCharPos(File f) throws IOException {
        if (verifyFileExistence(f)) {

            String fileData = new TestFiles().readFileData(f);
            int starterChar = 0;

            if (fileData.charAt(0) == '#') {
                String strPattern = "###############";
                StringBuilder slicedStr = new StringBuilder();
                for (int i = 0; i < strPattern.length(); i++) {
                    slicedStr.append(fileData.charAt(i));
                }
                if (strPattern.equals(slicedStr.toString())) {
                    while (fileData.charAt(starterChar) != '\n') {
                        ++starterChar;
                    }
                }

            }
            return starterChar;
        }
        return 0;
    }

    void countChars(File f, int charInitialPos) throws IOException {
        String fileData = new TestFiles().readFileData(f);
        int strDataSize = fileData.length();

        for (int i = 0; i < strDataSize; i++) {

        }
    }

    public static void main(String[] args) throws Exception {

        File myFile = new TestFiles().getFile(".\\Files\\cats.txt");
        if (new VerifierChars().verifyFileExistence(myFile)) {
            new VerifierChars().countChars(myFile, 0);
        }

    }
}