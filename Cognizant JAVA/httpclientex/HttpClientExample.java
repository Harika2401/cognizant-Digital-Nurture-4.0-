import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
public class HttpClientExample {
    public static void main(String[] args) {
        String apiUrl = "https://api.github.com/users/octocat"; 
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Status Code: " + response.statusCode());
            String responseBody = response.body();
            System.out.println("Response Body:\n" + responseBody);
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(responseBody);
            System.out.println("\nParsed JSON:");
            System.out.println("Username: " + jsonNode.get("login").asText());
            System.out.println("ID: " + jsonNode.get("id").asInt());
            System.out.println("Profile URL: " + jsonNode.get("html_url").asText());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
