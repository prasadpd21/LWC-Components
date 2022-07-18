public class CreateAccountOpportunity {
    public Id createAccount(string Name, string Site){
        Account acc = new Account();
        acc.Name = Name;
        acc.Site = Site;
        insert acc;
        return acc.Id;  
    }
    public void createOpportunity(string Name,string StageName,date CloseDate, Id AccountId ){
        
        Opportunity opp = new Opportunity();
        opp.Name = Name;
        opp.StageName = StageName;
        opp.CloseDate = CloseDate;
        opp.AccountId= AccountId;
        insert opp;
    }
}