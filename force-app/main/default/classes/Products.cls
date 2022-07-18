public class Products {
    integer product_code1,product_code2,product_code3;
    string product_name1,product_name2,product_name3;
    decimal product_price1,product_price2,product_price3;
    decimal product_discount1,product_discount2,product_discount3;
    integer stock1,stock2,stock3;
    
    public void productInfo(integer product_Sno,string product_name,decimal product_price,decimal product_discount,integer stock){
        
        if(product_Sno ==1){
            product_code1 = product_Sno;
            product_name1 = product_name;
            product_price1 = product_price;
            product_discount1 = product_discount;
            stock1 = stock;
        }
        else if (product_Sno ==2){
            product_code2 = product_Sno;
            product_name2 = product_name;
            product_price2 = product_price;
            product_discount2 = product_discount;
            stock2 = stock;
        }
        else if(product_Sno ==3){
            product_code3 = product_Sno;
            product_name3 = product_name;
            product_price3 = product_price;
            product_discount3 = product_discount;
            stock3 = stock;
        }
        else{
            system.debug('incorrect product code');
        }
    }
    public decimal getDiscountPrice(decimal discount,decimal product_price){
        decimal DiscountPrice = product_price * (discount/100);
        return DiscountPrice;
    }
    
    public void createBill(integer product_Sno,integer quantity){
        decimal total_Bill = 0 ;
        if (product_Sno ==1){
            if(stock1>=quantity){
                if(product_discount1>0){
                    total_Bill = quantity* (product_price1 -( product_price1 * (product_discount1/100)));
                    system.debug(total_Bill);
                    stock1 -= quantity;
                }
                else{
                    total_Bill = quantity*product_price1;
                    system.debug(total_Bill);
                    stock1 -= quantity;
                }
            }
            else{
                system.debug('Order quantity is greater than current stock');
                
            }
            
        }
        else if (product_Sno ==2){
            if(stock2>=quantity){
                if(product_discount2>0){
                    total_Bill = quantity* (product_price2 -( product_price2 * (product_discount2/200)));
                    system.debug(total_Bill);
                    stock2 -= quantity;
                }
                else{
                    total_Bill = quantity*product_price2;
                    system.debug(total_Bill);
                    stock2 -= quantity;
                }
                
            }
            else{
                system.debug('Order quantity is greater than current stock');
            }
        }
        else if  (product_Sno ==3){
            if(stock3>=quantity){
                if(product_discount3>0){
                    total_Bill = quantity* (product_price3 -( product_price3 * (product_discount3/300)));
                    system.debug(total_Bill);
                    stock3 -= quantity;
                }
                else{
                    total_Bill = quantity*product_price3;
                    system.debug(total_Bill);
                    stock3 -= quantity;
                }
                
            }
            else{
                system.debug('Order quantity is greater than current stock');
            }
        }
        else {
            system.debug('Invalid Product code');
        }
    }
    
    public void searchProduct(integer product_Sno){
        if(product_code1==product_Sno){
            system.debug('Product code is='+product_code1);
            system.debug('Product name is='+product_name1);
            system.debug('Product stock is='+stock1);
        }
        else if(product_code2==product_Sno){
            system.debug('Product code is='+product_code2);
            system.debug('Product name is='+product_name2);
            system.debug('Product stock is='+stock2);
        }
        else if(product_code3==product_Sno){
            system.debug('Product code is='+product_code3);
            system.debug('Product name is='+product_name3);
            system.debug('Product stock is='+stock3);
        }	
        else{
            system.debug('Product code is invalid');
        }
    }
    
    public void reOrder(){
        if(stock1>10 && stock2>10 && stock3>10){
            system.debug('All products are above reorder level');
        }
        else{
            system.debug('Below product needs to be reordered asap');
            if(stock1<10){
                searchProduct(product_code1);
            }
            if(stock2<10){
                searchProduct(product_code2);
            }
            if(stock3<10){
                searchProduct(product_code3);
            }
        }
    }
}