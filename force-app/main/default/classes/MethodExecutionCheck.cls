public class MethodExecutionCheck {
 public static boolean Flag = true;
    public static void check(){
        if(Flag){
            system.debug('Executing');
            Flag = !Flag;
        }
        else{
            system.debug('Already Executed');
        }
    }
}