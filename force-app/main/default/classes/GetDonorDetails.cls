public class GetDonorDetails {
    //creating list to store list of blood donor records
    
    public static list<Blood_Donor__c> getDonors(string district, string blood_group){
        list <Blood_Donor__c> donorList = new list <Blood_Donor__c>();
        
        donorList = [SELECT Name__c, DOB__c, Blood_Group__c, District__c, State__c, Last_Donated_Date__c, Email_ID__c, Phone_No__c, Age__c, Weight__c, Id, Name FROM Blood_Donor__c where District__c = :district and Blood_Group__c = :blood_group];
        
        string secondposition = donorList[0].Name__c;  // storing name of blood donor at first position in list
        system.debug(secondposition);
        system.debug(donorList.size());
        return donorList; // returning list
    }
}