<<<<<<< HEAD
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class TestFiles {

    public boolean createNewFile(String fileName) throws IOException {
        return new File(".\\Files\\" + fileName).createNewFile();
    }

    public void writeFileData(File file, String fileData) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(file, true))) {

            writer.write(fileData);
            writer.newLine();

            writer.flush();

        } catch (IOException e) {
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public String readFileData(File file) throws IOException {

        StringBuilder fileData = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {

            String line;
            while ((line = reader.readLine()) != null) {
                fileData.append(line);
                fileData.append("\n");
            }

        } catch (IOException e) {
            throw new IOException(e);
        }
        return fileData.toString();
    }

    String extractFileData(File f) throws IOException{
        return readFileData(f);
    }

    public File getFile(String fileName) {
        return new File(fileName);
    }

=======
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class TestFiles {

    public boolean createNewFile(String fileName) throws IOException {
        return new File(".\\Files\\" + fileName).createNewFile();
    }

    public void writeFileData(File file, String fileData) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(file, true))) {

            writer.write(fileData);
            writer.newLine();

            writer.flush();

        } catch (IOException e) {
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public String readFileData(File file) throws IOException {

        StringBuilder fileData = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {

            String line;
            while ((line = reader.readLine()) != null) {
                fileData.append(line);
                fileData.append("\n");
            }

        } catch (IOException e) {
            throw new IOException(e);
        }
        return fileData.toString();
    }

    String extractFileData(File f) throws IOException{
        return readFileData(f);
    }

    public File getFile(String fileName) {
        return new File(fileName);
    }

>>>>>>> parent of dc1dbf4 (fix class issue)
}