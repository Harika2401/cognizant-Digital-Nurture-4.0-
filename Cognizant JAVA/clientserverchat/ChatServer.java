import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server is listening on port 5000...");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            String clientMessage, serverMessage;
            while ((clientMessage = input.readLine()) != null) {
                System.out.println("Client: " + clientMessage);
                if (clientMessage.equalsIgnoreCase("exit")) {
                    break;
                }
                System.out.print("You: ");
                serverMessage = consoleInput.readLine();
                output.println(serverMessage);
            }

            socket.close();
            System.out.println("Chat closed.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
