public class Grades {
    integer s1 = 60;
    integer s2 = 60;
    integer s3 = 60;
    string r1 = (s1 < 50 || s2< 50 || s3 < 50)?'Fail':'Pass';
    decimal sum = s1+s2+s3;
    decimal avg = (sum/300)*100;
    
    public void grade(){
    string G1 = (avg>90 && r1 == 'Pass')?'S':(avg>80 && r1 == 'Pass')?'A':(avg>70 && r1 == 'Pass')?'B':(avg>50 && r1 == 'Pass')?'C':'No Grade';
     system.debug(G1);   
    }
}