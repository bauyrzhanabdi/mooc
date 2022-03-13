package mooc.backend.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class UserDTO {
    private UUID userId;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
}
