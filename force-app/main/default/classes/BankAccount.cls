public class BankAccount {
 integer balance = 50000;
 integer amount = 5000;
    
    public void deposit(){
        system.debug('current balance is='+(balance + amount));
    }
    
    public void withdraw(){
        system.debug('current balance is='+(balance - amount));
    }
}