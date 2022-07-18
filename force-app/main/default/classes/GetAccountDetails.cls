public class GetAccountDetails {
    public list<Account> accountDetails(string type){
        
        list <Account> accList = new list <Account>();
        accList = [SELECT Id, Type, Name FROM Account where Type = :type ];
        return accList;
    }
}