package mooc.backend.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest implements Serializable {

    private static final long serialVersionUID = -2941136607620864324L;

    private String username;
    private String password;
}
