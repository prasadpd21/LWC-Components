import { LightningElement,wire,track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import getCases from '@salesforce/apex/caseController.getCases';


const COLS=[
    {label:'Case Number', type:'Text',fieldName:'CaseNumber'},
    {label:'Subject', type:'Text',fieldName:'Subject'},
    {label:'Priority', type:'comboBox',fieldName:'Priority', wrapText:true,
    typeAttributes:{
        options:{ fieldName :'pickListOptions'},
        value:{ fieldName :'Priority'},
        placeholder:'Choose Priority'

    }},
     {label:'Status', type:'Text',fieldName:'Status'},
];

export default class DataTable_CustomPicklist_D27 extends LightningElement {

    columnsList=COLS;
    @track cases=[];
    casePriority=[];

    //getting object info-----defaultRecordTypeId which will be used in getPicklistValues to get picklist values
    @wire(getObjectInfo,{ objectApiName: CASE_OBJECT})
    caseObjectInfo;

    //getting picklist values after getting values calling a function which will call apex method
    @wire(getPicklistValues,{recordTypeId: '$caseObjectInfo.data.defaultRecordTypeId', fieldApiName: PRIORITY_FIELD })
    casePriorityPicklist({data,error}){
        if(data){
        console.log(data.values);
        this.casePriority=data.values;
        this.fetchCases(); 

        }
        else if(error){
            console.log(error);
        }
    }


    fetchCases(){
        //calling Apex method
        getCases()
        .then((result) => {
            console.log(result);
            let options=[];
            for(var key in this.casePriority){
                options.push({label: this.casePriority[key].label, value: this.casePriority[key].value});
            }
            this.cases=result.map(record=>{
                //console.log('INSIDE LOOP')
                return{
                    //Crating Data to be displayed in datatable
                    ...record,
                    'pickListOptions':options
                }
            })
            //console.log(options)
            //console.log('OUTSIDE LOOP')
            console.log(this.cases);

        })
        .catch((err) => {
            console.log(err);
        });
    }

}