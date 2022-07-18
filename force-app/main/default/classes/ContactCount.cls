public class ContactCount {
    public integer getContactCount(string AccountNumber){
        list<Contact> acContacts = new list <Contact>();
        acContacts = [SELECT LastName, FirstName, Name, Id FROM Contact where AccountId in (SELECT Id FROM Account where AccountNumber = :AccountNumber)];
        integer ContactCount = acContacts.size();
        return ContactCount;
    }
}