public class UpdateBillingState {
    
    public void updateAccountToFL(string billing_State1, string billing_State2){
        
        //creating a list to store the output of SOQl query
        list<Account> acclist = new list <Account>();
        
        //SOQL statements in Apex can reference Apex code variables and expressions if they are preceded by a colon (:)
        acclist = [SELECT Id, BillingCity, BillingState, BillingStreet, BillingAddress, AccountNumber, Industry FROM Account where BillingState = :billing_State1];
        
        //for each record from the list , updating billing state value
        for (Account obj :acclist ){
            obj.BillingState = billing_State2;
            
        }
        //updating the changes made in list
        update acclist;
        system.debug(acclist);
    }
}