public class HighestOpps {
    public void getHighestOpps(string AccountNumber){
        decimal maxAmt = 0;
        list<Opportunity> acOpportunity = new list <Opportunity>();
        list<decimal> amtList = new list <decimal>();
        acOpportunity = [SELECT  Id, Name, Amount, StageName FROM Opportunity where AccountId in (SELECT  Id from Account where AccountNumber = :AccountNumber)];
        //integer i = acOpportunity.size();
        //system.debug(i);
        for (Opportunity op :acOpportunity){
            if(op.Amount>maxAmt){
                maxAmt = op.Amount;
                amtList.clear();
                amtList.add(maxAmt); // get opportunity amount having greater than other opportunities
            }
            else if(op.Amount==maxAmt){
                amtList.add(maxAmt);
            }
        }
        
        system.debug(amtList);
    }
}