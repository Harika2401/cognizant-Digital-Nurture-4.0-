import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class FileReading{
    public static void main(String[] args) {
        String filename = "output.txt";
        try (BufferedReader read = new BufferedReader(new FileReader(filename))) {
            String l;
            while ((l = read.readLine()) != null) {
                System.out.println(l);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
