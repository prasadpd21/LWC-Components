public class CheckPassword {
    public void validatePassword(string pass){
        string password = 'Apex';
        if(pass.equals(password) ){
            System.debug('Allowed');
        }
        else{
            system.debug('Invalid Password');
             
        }
    }
}