public class ConstuctorDemo {
    integer x;
    public ConstuctorDemo(){
         x = 10;
        system.debug(x);
    }
    // constructor overloadding same name but different signature
    public ConstuctorDemo(integer val){
        this.x = val;
        system.debug(x);
    }
}