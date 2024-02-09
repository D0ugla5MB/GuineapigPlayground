import java.io.File;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MakeFile {
    static public void test(Object... obj) {
        for (Object aux : obj) {
            System.out.println(aux);
        }
    }

    public boolean createNewFile(String fileName, String fileType, String filePath) throws IOException {
        return new File(fileName).createNewFile();
    }

    // works well ONLY for a few calls
    String makeFilePath(String fileName, String fileType) {

        class Checker {
            String n = "";
            String t = "null";
            boolean result = false;

            public Checker(String name, String type) {
                if (checkName(name) && checkType(type)) {
                    n = name;
                    t = type;
                    result = true;
                }
            }

            public void getResponse(){
                System.out.println("regex check-out:\t"+result);
            }

            boolean check(String str) {
                if (str == null || str.length() <= 0) {
                    return false;
                } else {
                    String auxRef = "\\(\\]\\[\\|\\/\\/'\\\"\\!\\@\\#\\$\\%\\?\\¬\\&\\*\\+\\;\\.\\:\\?\\=\\s]\r\n";
                    Pattern reference = Pattern.compile(auxRef);
                    Matcher refMatcher = reference.matcher(str);

                    if (refMatcher.find()) {
                        return false;
                    }
                }
                return true;
            }

            boolean checkName(String n) {
                return check(n);
            }

            boolean checkType(String t) {
                return check(t);
            }
        }

        new Checker(fileName, fileType).getResponse();
        

        return new StringBuilder(fileName).append(fileType).toString();
    }

}