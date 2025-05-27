import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
public class FileWriting {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter text: ");
        String input = sc.nextLine();
        try (FileWriter writing = new FileWriter("output.txt"))
	 {
            writing.write(input);
            System.out.println("Data successfully written to output.txt");
         } catch (IOException e) {
            System.out.println("Error writing: " + e.getMessage());
        }
        sc.close();
    }
}
