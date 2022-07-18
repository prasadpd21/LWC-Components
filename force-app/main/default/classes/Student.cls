public class Student {
    public integer mark1;
    public integer mark2;
    public integer mark3;
    public string result;
    public decimal avg;
    
    public void getMark(integer mark1,integer mark2,integer mark3){
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }
    public void getResult(){
        if(mark1 < 50 || mark2< 50 || mark3 < 50){
            result = 'Fail';
            system.debug('Fail');
        }
        else{
            result = 'Pass';
            system.debug('Pass');
        }
    }
    public void getAvg(){
        decimal sum = mark1 + mark2 +mark3;
        decimal avg = (sum /300)*100;
        system.debug(avg);
    }
}