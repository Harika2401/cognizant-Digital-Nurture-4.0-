import java.io.*;
import java.net.Socket;

public class ChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 5000)) {
            System.out.println("Connected to server.");

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            String userMessage;
            while (true) {
                System.out.print("You: ");
                userMessage = consoleInput.readLine();
                output.println(userMessage);

                if (userMessage.equalsIgnoreCase("exit")) {
                    break;
                }

                String serverResponse = input.readLine();
                System.out.println("Server: " + serverResponse);
            }

            System.out.println("Chat closed.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
