public class UpdateDonorDistrict {
    public void updateDistrict(string district1,string district2, string bgroup){
        list <Blood_Donor__c> donorList = new list <Blood_Donor__c>();
        
        donorList = [SELECT Name__c, DOB__c, Blood_Group__c, District__c, State__c, Last_Donated_Date__c, Email_ID__c, Phone_No__c, Age__c, Weight__c, Id, Name FROM Blood_Donor__c where District__c = :district1];
        for (Blood_Donor__c obj :donorList){
            obj.District__c = district2;
            obj.Blood_Group__c = bgroup;
        }
        update donorList;
        system.debug(donorList);
        
    }
}