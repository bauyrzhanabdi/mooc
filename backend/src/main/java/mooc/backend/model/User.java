package mooc.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter @Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private UUID userId;
    @Column(unique = true)
    private String username;
    private String password;
    private String firstName;
    private String lastName;
}
