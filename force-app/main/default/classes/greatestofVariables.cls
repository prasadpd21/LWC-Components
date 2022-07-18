public class greatestofVariables {
    public void compareThree(){
        //Find greatest number 3 variables
        integer x = 30;
        integer y = 65;
        integer z = 40;
        
        if (x>y && x>z){
            system.debug('x is greatest');
        }
        else if (y>z){
            system.debug('y is greatest');
        }
        else{
            system.debug('z is greatest');
        }
    }
    
    public void compareTwo(){
        integer x = 20;
        integer y = 30;
        if (x>y){
            system.debug('x is greatest');
        }
        else{
            system.debug('y is greatest');
        }
    }
}