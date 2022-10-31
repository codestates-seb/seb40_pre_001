package team001_be.stackoverflowCloneDemo.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    TAG_NOT_FOUND(404, "Tag not found"),
    QUESTION_NOT_FOUND(404, "Question not found"),

    UNAUTHORIZED_USER(403, "not authorized user");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }


}
