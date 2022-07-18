import { LightningElement } from 'lwc';
import lightningDataTable from 'lightning/datatable';
import progressRing from './progressRing.html'
import combobox from './combobox.html'

export default class CustomDatatableCmpD26 extends lightningDataTable {

    static customTypes={
        proRing:{
            template : progressRing,
            typeAttributes :['variant']
        },

        comboBox:{
            template : combobox,
            standardCellLayout: true,
            typeAttributes : ['options','label','placeholder','value']
        }

    }
}