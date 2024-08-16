/* import java.net.ServerSocket;
import java.net.Socket;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        // Start the server
        System.out.println("Starting server...");
        startServer();

        // Wait for user input before starting the client
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Server started. Press Enter to start client...");
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Start the client
        System.out.println("Starting client...");
        startClient();
    }
}
 */
/*
 * private static void startServer() {
 * try (ServerSocket serverSocket = new ServerSocket(8080)) {
 * System.out.println("Server is listening on port 8080");
 * 
 * while (true) {
 * try (Socket clientSocket = serverSocket.accept()) {
 * BufferedReader in = new BufferedReader(new
 * InputStreamReader(clientSocket.getInputStream()));
 * BufferedWriter out = new BufferedWriter(new
 * OutputStreamWriter(clientSocket.getOutputStream()));
 * 
 * // Read the HTTP request
 * String line = "asasas";
 * while (!(line = in.readLine()).isEmpty()) {
 * System.out.println(line); // Print request to console (optional)
 * }
 * 
 * // Send an HTTP response
 * out.write("HTTP/1.1 200 OK\r\n");
 * out.write("Content-Type: text/plain\r\n");
 * out.write("Content-Length: 13\r\n");
 * out.write("\r\n");
 * out.write("Hello, World!");
 * out.flush();
 * }
 * }
 * } catch (IOException e) {
 * e.printStackTrace();
 * }
 * }
 */
/*
 * private static void startClient() {
 * try (Socket socket = new Socket("localhost", 8080)) {
 * BufferedWriter out = new BufferedWriter(new
 * OutputStreamWriter(socket.getOutputStream()));
 * BufferedReader in = new BufferedReader(new
 * InputStreamReader(socket.getInputStream()));
 * 
 * // Send an HTTP GET request
 * out.write("GET / HTTP/1.1\r\n");
 * out.write("Host: localhost\r\n");
 * out.write("\r\n");
 * out.flush();
 * 
 * // Read the HTTP response
 * String line;
 * while ((line = in.readLine()) != null) {
 * System.out.println(line);
 * }
 * } catch (IOException e) {
 * e.printStackTrace();
 * }
 * }
 */

//
import java.io.*;
import java.net.*;

public class AppClient {

    private static Thread openServerThread(String htmlContentString){
        return new Thread(() -> {
            try {
                ServerSocket serverSocket = new ServerSocket(8080);
                System.out.println("Server is listening on port 8080");

                while (true) {
                    try (Socket clientSocket = serverSocket.accept();
                            BufferedReader in = new BufferedReader(
                                    new InputStreamReader(clientSocket.getInputStream()));
                            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {

                        // Read request
                        String requestLine = in.readLine();
                        System.out.println("Received request: " + requestLine);

                        // Send response
                        out.println("HTTP/1.1 200 OK");
                        out.println("Content-Type: text/plain");
                        out.println(); // End of headers
                        out.println(htmlContentString);
                        out.println(htmlContentString);
                        out.println(htmlContentString);

                        // Close streams
                        in.close();
                        out.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public static void main(String[] args) {
        Thread serverThread = openServerThread("AAAAAAAABBBBBB");

        // Allow some time for the server to start
        serverThread.start();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Run the client code
        String urlString = "http://localhost:8080";

        try {
            URL url = new URL(urlString);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            // Get response code
            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            // Read response
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // Print response
            System.out.println("Response Body: " + response.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
