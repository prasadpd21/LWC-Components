public class IDemo extends InheritanceDemo {
    public void displayFromChild(){
        system.debug('From Child');
    }
    
    public override void displayx(integer x){
        system.debug('value of x is = '+ x);
    }
}