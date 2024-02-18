import java.io.File;
import java.io.IOException;

public class VerifierChars {

    boolean verifyFileExistence(File f) {
        if (f.exists()) {
            return true;
        }
        System.out.println("File not found");
        return false;
    }

    int searchInitialCharPos(File f) throws IOException {
        int starterChar = 0;
        if (verifyFileExistence(f)) {

            String fileData = new TestFiles().readFileData(f);

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
        }
        return starterChar;
    }

    String separateData(File f) throws IOException{
        long fileSize = f.length();
        String fileData = new TestFiles().readFileData(f);
        int cntNewLineSeq = 0;
        int strColumnLimit = 50;

        //treating the string as a matrix
        for (int i = 0; i < fileData.length(); i++) {
            
        }
        

        return fileData;
    }

    public static void main(String[] args) throws Exception {

        File myFile = new TestFiles().getFile(".\\Files\\cats.txt");
        System.out.println(new VerifierChars().separateData(myFile));
    }
}