import { LightningElement } from 'lwc';

export default class Datatable_ProgressRing_D26 extends LightningElement {

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
    columnsList=[
       
        {label:'Id', fieldName :'Id'},
        {label:'Name', fieldName :'Name'},
        {label:'Score', fieldName :'Score',type:'proRing',typeAttributes:{variant:'base-autocomplete'}},
        {label:'Status', fieldName :'Status',type:'comboBox',typeAttributes:{options: this.options }},
    ]

    dataList=[
        
        {Id:'100',Name:'PD',Score:'20'},
        {Id:'101',Name:'RD',Score:'40'},
        {Id:'102',Name:'KD',Score:'100'}
    ]


}