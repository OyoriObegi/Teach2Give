import bcrypt from 'bcrypt';
// Password verification
function verifyPassword(inputPassword, storedHashedPassword) {
    return bcrypt.compareSync(inputPassword, storedHashedPassword);
}

// MFA verification
function verifyMFA(inputMfaCode, correctMfaCode) {
    return inputMfaCode === correctMfaCode;
}

// Balance check
function checkBalance(withdrawalAmount, currentBalance) {
    return withdrawalAmount <= currentBalance;
}

// Daily limit check
function checkDailyLimit(withdrawalAmount, dailyLimit) {
    return withdrawalAmount <= dailyLimit;
}

// Password hashing
function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

// Main withdrawal function
function processWithdrawal(password, hashedPassword, mfa, correctMFA, amount, balance, limit) {
    if (!verifyPassword(password, hashedPassword)) 
        return "Transaction Failed: Incorrect password.";
    
    if (!verifyMFA(mfa, correctMFA)) 
        return "Transaction Failed: MFA failed.";
    
    if (!checkBalance(amount, balance)) 
        return "Transaction Failed: Insufficient balance.";
    
    if (!checkDailyLimit(amount, limit)) 
        return "Transaction Failed: Amount exceeds daily limit.";
    
    return `Transaction Successful. New Balance: ${balance - amount}`;
}

// Example usage
const password = "securepassword";
const hashedPassword = hashPassword(password);

console.log(processWithdrawal(password, hashedPassword, "123456", "123456", 1000, 5000, 2000));
