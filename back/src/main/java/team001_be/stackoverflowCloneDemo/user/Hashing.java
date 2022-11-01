/*package team001_be.stackoverflowCloneDemo.user;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

// this is the class for password hashing.
public class Hashing {

    public static final String SALT = "!@salt$%^&";

    public static String hashingPassword(String input) {

        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashData = md.digest(input.getBytes(StandardCharsets.UTF_8));
            BigInteger number = new BigInteger(1, hashData);
            StringBuilder hexString = new StringBuilder(number.toString(16));

            while (hexString.length() < 32) {
                hexString.insert(0, '0');
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            return input;
        }
    }
}*/
