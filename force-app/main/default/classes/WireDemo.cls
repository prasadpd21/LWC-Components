public class WireDemo {

    @AuraEnabled(cacheable = true)  
    // once the below method gets called the records from org will be cached in the UI using cacheable = true property

    public static list<Account> getAccount(){
        return[
            Select
            Id,Name,Phone
            From Account
        ];
    }
}
