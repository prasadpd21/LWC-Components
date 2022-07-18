public class CreateBloodRequest {
    public Blood_Request__c createRequest(string Pname,string HName,string BGroup,integer Units){
        Blood_Request__c obj = new Blood_Request__c();
        obj.Patient_Name__c = Pname;
        
        obj.Hospital_Name__c = HName;
        obj.Blood_Group__c = BGroup;
        obj.No_Of_Units__c = Units;
        insert obj;
        return obj;
      
    }
}