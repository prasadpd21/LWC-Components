public class AccountController {

    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountList(String Rating){
        return [Select Id, Name,Rating, AnnualRevenue from Account Where Rating=:Rating];
        
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountList(){
        return [Select Id, Name, AnnualRevenue from Account where  AnnualRevenue!=NULL];
        
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> searchAccountList(String searchKey){
        string Key = '%'+ searchKey + '%';
        return [Select Id, Name,Rating, AnnualRevenue from Account Where Name LIKE:Key LIMIT 10];
        
    }

    @AuraEnabled
    public static void updateAccount(string recordId,Integer revenue){
        Account acc= new Account();
        acc.Id=recordId;
        acc.AnnualRevenue=revenue;
        Update acc;

    }

}
