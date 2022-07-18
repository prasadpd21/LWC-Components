public class UpdatedProducts {
    integer product_code;
    string product_name;
    decimal product_price;
    decimal product_discount;
    integer product_stock;
    
    public UpdatedProducts(integer product_code,string product_name,decimal product_price,decimal product_discount,integer product_stock){
        this.product_code = product_code;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_discount = product_discount;
        this.product_stock = product_stock;
    }
    
    public decimal getDiscountPrice(){
        
        decimal DiscountPrice = product_price - (product_price * (product_discount/100));
        return DiscountPrice;
    }
    public void createBill(integer quantity){
        decimal total_Bill = 0 ;
        if(product_stock>=quantity){
            if(product_discount>0){
                total_Bill = quantity* getDiscountPrice();
                system.debug('Total bill amount is $'+total_Bill);
                product_stock -=quantity;
                system.debug('available stock = '+product_stock);
            }
            else{
                total_Bill = quantity * product_price;
                system.debug('Total bill amount is $'+total_Bill);
                product_stock -=quantity;
                system.debug('available stock = '+product_stock);
            }
        }
        else {
            system.debug('Order quantity is greater than current available stock, available stock = '+product_stock);
        }
    }
    public void reOrder(){
        if(product_stock<20){
            system.debug('Kindly reorder the below product asap');
            system.debug('Product Code ='+product_code);
            system.debug('Product Name ='+product_name);
        }
        else{
            system.debug('This product is not below the reorder level, available stock = '+product_stock);
        }
    }
}