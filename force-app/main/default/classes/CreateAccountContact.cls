public class CreateAccountContact {
    public Id createAccount(string Name){
        Account acc = new Account();
        acc.Name = Name;
        insert acc;
        return acc.Id;    //returning id of acc acount created
    }
    
    public void createContact(string FirstName, string c, string Email, Id AccountId){
        
        Contact con = new Contact();
        con.FirstName = FirstName;
        con.LastName = FirstName;
        con.Email = Email;
        con.AccountId = AccountId; // passing the account id created in createAccount()
        insert con;
    }
}