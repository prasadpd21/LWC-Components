({
    handleMessage: function (component, message, helper) {
        console.log(message.getParam("lmsData").value);
        //component.set("attributename","value");
        //assigning value from message to the attribute
        component.set("v.receivedMessage", message.getParam("lmsData").value);
    },
    //
    handleChange: function (component, event, helper) {
        //getting input value by aura:id
        component.set("v.messageToPublish", component.find("txtMessage").get("v.value"))
    },

    handlePublish: function (component, event, helper) {
        
        let msg = component.get("v.messageToPublish");
        const payload = {
            lmsData: {
                value: msg
            }
        }
        //referencing the messaging channel and publishing
        component.find("SimpleMessagingChannel").publish(payload)
    }
})
