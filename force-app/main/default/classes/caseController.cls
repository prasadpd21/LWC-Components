public with sharing class caseController {

    @AuraEnabled(cacheable=true)
    public static List<case> getCases(){
        return [Select Id,CaseNumber,Priority,Subject,Status From Case LIMIT 10];
    }
}
