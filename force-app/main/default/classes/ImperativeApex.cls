public class ImperativeApex{
   
   @AuraEnabled(cacheable=true)
   public static list <Opportunity> getOpportunity(Decimal Amt){
       return[
           Select
           Id,Name,Amount
           From Opportunity
           Where Amount>= :Amt
       ];
   }
}