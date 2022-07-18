import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {CurrentPageReference} from 'lightning/navigation';
//provides utilities for encoding and decoding default field values.
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';


export default class Navigation_D29 extends NavigationMixin(LightningElement) {
    //get current page reference
    @wire(CurrentPageReference)
    pageRef;

    get pageReference(){
        return JSON.stringify(this.pageRef);
    }

    // Navigate to the home page.
    navigateToHome(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        })
    }

    navigateToObjectHome(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        })
    }
    // Navigate to the New Account Record Creation Page.
    navigateToNewRecordPage(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        })
    }
    // Navigate to the Account Record page.
    navigateToRecordViewPage(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00000cMuQ1AAK',
                objectApiName: 'Account',
                actionName: 'view'
            }
        })
    }

    //Navigate to a Record Create Page with Default Field Values
    //the default values must be encoded using encodeDefaultFieldValues()
    navigateToNewRecordPageDefaultVals(event) {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Prasad',
            LastName: 'Deshmukh'
        })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        })
    }

    //Navigate to a Specific List View
    navigateToListView(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })

    }

    navigateToTab(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'DataTable_Tab'
            }
        })
    }

    // Navigate to the Contact related list page
    // for a specific Account record. Relnship name would be plural
    navigateToRelatedList(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0015j00000cMuQ1AAK',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'

            }
        })
    }

    navigateToWebPage() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforce.com/in/'
            }
        });
    }

    navigateToLWC(event) {
        var definationOfCmp = {
            componentDef: 'c:taskComponent',
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "/one/one.app#" + btoa(JSON.stringify(definationOfCmp))

            }
        })
    }

    url;
    connectedCallback() {
        // Store the PageReference in a variable to use in handleClick.
        // This is a plain Javascript object that conforms to the
        // PageReference type by including 'type' and 'attributes' properties.
        // The 'state' property is optional
        this.accountHomePageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };
        this[NavigationMixin.GenerateUrl](this.accountHomePageRef)
            .then(url => this.url = url);
    };

    handleClick(event) {
        // Stop the event's default behavior.
        // Stop the event from bubbling up in the DOM.
        event.preventDefault();
        event.stopPropagation();
        // Navigate to the Account Home page.
        this[NavigationMixin.Navigate](this.accountHomePageRef);
    }

}