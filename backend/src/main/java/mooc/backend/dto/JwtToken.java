package mooc.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class JwtToken implements Serializable {

    private static final long serialVersionUID = 6880154311024215137L;

    private String token;
}
