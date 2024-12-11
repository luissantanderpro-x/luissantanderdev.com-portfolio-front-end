


class ValidatorUtils {
    static isValidEmail (email: string) {
        const emailRegex = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        return emailRegex.test(email);
    }
}

export default ValidatorUtils; 