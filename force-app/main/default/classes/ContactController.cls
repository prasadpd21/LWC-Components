public class ContactController {
    @AuraEnabled
    public static string createContact(string lastName,string mobilePhone){
 
        Contact con = new Contact();
        con.LastName = lastName;
        con.MobilePhone = mobilePhone;
        Insert con;
        return con.Id;
    }
}
