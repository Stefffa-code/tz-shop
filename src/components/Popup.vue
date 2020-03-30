<template>
    <div class="popup" v-if="showPopup"
            >

        <div class="triangle"></div>
        <perfect-scrollbar class="popup__scroll"  >
            
            <div :class="{'popup__scroll-inner': !!cart.length }" v-if="!isBuy">            
                <div class="cart" v-if="step > 0  && !isBuy " >
                    <div class="popup__header popup__container">
                        <p >You have {{ itemsInCart }} items in your cart</p>
                        <img src="../assets/img/close.svg" alt="close" @click="isShowPopup" >
                    </div>

                    <div class="popup__container cart__wrap" v-if=" !!cart.length">
                        <div class="cart__item " v-for="(item, index) in cart" :key="index">
                    
                            <div class="cart__img">
                                <dots/>
                                <img :src="item.image" alt="item"> 

                                <div class="cart__img-cover box" @click="deleteProduct(index)">
                                    <img src="../assets/img/blur.png" alt="blur">
                                    <img src="../assets/img/delete.svg" alt="delete">
                                </div>         
                            </div>

                            <div class="cart__descr">
                                <p class="name">{{item.name}} <span >{{item.property}}</span> </p>
                                <div class="cart__amount">
                                    <span class="quantity"> 
                                            <img src="../assets/img/arrow-left.svg" alt="arrow-left" @click="chengeQuantity(item, -1, index)">
                                        <p class="cart__amount-num">
                                             {{thingInCart(item.quantity)}} 
                                        </p>   
                                            <img src="../assets/img/arrow-right.svg" alt="arrow-right" 
                                            @click="chengeQuantity(item, 1, index)"> 
                                    </span>
                                    <p class="price">$ {{itemPrice(item).toFixed(2) }} </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                </div>

                <div class="billing top-line" v-if=" step > 1 && !!cart.length" >
                    <div class="popup__header popup__container">
                        <p >Enter your Billing details
                            <span class="remember">
                                <img src="../assets/img/remember.svg" alt="remember">
                                Remember
                            </span>
                        </p>
                        <img src="../assets/img/close.svg" alt="close" @click="isShowPopup" >
                    </div>

                    <div class="popup__container">

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="First name*">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Last name*">  
                            </div>                    
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Company name (optional)">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Country*">  
                            </div>                    
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="House nubmer and street name*">  
                            </div>                  
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Apartment, suite, unit etc (optional)">  
                            </div>                  
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Town / City*">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="State*">  
                            </div>                    
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="ZIP*">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Phone*">  
                            </div>                    
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="Email address*">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input class="disable" type="text" placeholder="Create account password*">  
                            </div>                    
                        </div>


                    </div>
                </div>

                <div class="payment" v-if=" step > 2 " >
                    <div class="popup__header popup__container" >
                        <p >Enter your Shipping details
                            <span class="remember">
                                <img src="../assets/img/remember.svg" alt="remember">
                                Same as Billing
                            </span>
                        </p>
                    </div>

                    <div class="popup__header popup__container top-line">
                        <p >Choose your payment method
                            <span class="remember">
                                <img src="../assets/img/remember.svg" alt="remember">
                                Remember
                            </span>
                        </p>
                        <img src="../assets/img/close.svg" alt="close" @click="isShowPopup">
                    </div>

                    <div class="popup__container">

                        <div class="row filter__content " >
                            <input id="pay-1" class="filter__input" type="radio"  value="visa MC" v-model="byPayment" />
                                <label for="pay-1" class="filter__label">
                                <dots/>
                                <img src="../assets/img/visa_mc.svg" alt="visa_mc">
                            </label>

                            <input id="pay-2" class="filter__input" type="radio"  value="PayPal" v-model="byPayment"  />
                                <label for="pay-2" class="filter__label"> 
                                <dots/>
                                <img src="../assets/img/paypal.svg" alt="paypal">
                            </label>

                            <input id="pay-3" class="filter__input" type="radio" value="CoinPay" v-model="byPayment"   />
                                <label for="pay-3" class="filter__label">
                                <dots/>               
                                <img src="../assets/img/pay3.svg" alt="coin">
                            </label>

                            <input id="pay-4" class="filter__input" type="radio"  value="Scrill" v-model="byPayment" />
                                <label for="pay-4" class="filter__label">
                                <dots/>
                                <img src="../assets/img/pay4.svg" alt="scrill">
                            </label>

                            <input id="pay-5" class="filter__input" type="radio"  value="WebMoney" v-model="byPayment"  />
                                <label for="pay-5" class="filter__label"> 
                                <dots/>
                                <img src="../assets/img/pay5.svg" alt="webMoney">
                            </label>

                            <input id="pay-6" class="filter__input" type="radio" value="Alipay" v-model="byPayment"   />
                                <label for="pay-6" class="filter__label">
                                <dots/>               
                                <img src="../assets/img/pay6.svg" alt="alipay">
                            </label>

                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX   Card nubmer*">  
                            </div>                   
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="********* *********   Card holder name*">  
                            </div>                   
                        </div>

                        <div class="row">
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="XX / XX   Expire date*">  
                            </div>
                            <div class="input">
                                <dots/>
                                <input type="text" placeholder="XXX   CVV*">  
                            </div>                    
                        </div>
                    </div>

                </div>
            </div>  
            <div class="success" v-if="isBuy" >
                <div class="popup__header popup__container">
                    <p >Successful purchase</p>
                    <img src="../assets/img/close.svg" alt="close" @click="isShowPopup">
                </div>

                <div class="success__content">
                    Thank you for using our marketplace. Your Order number is <span class="green">#23542</span>. If you still have any questions click <span class="yellow">here</span> to ask! 
                </div>
            </div>
        </perfect-scrollbar>

        
        <div class="popup__footer mob-none" v-if="popupFooter && !!cart.length" >
            <div class="buttons">
                <button class="secondary-btn" @click="next">
                    <dots/>
                    Continue
                </button>
                <button class="secondary-btn" @click="removeAll">
                    <dots/>
                    Remove all
                </button>
            </div>
            <div class="all-sum">
                <img src="../assets/img/sum.svg" alt="sum">
                ${{cartTotalPrice.toFixed(2)}}
            </div>
        </div>
        <div class="popup__footer mob-none" v-if="!popupFooter && !isBuy && !!cart.length" >
            <div class="buttons">
                <button class="secondary-btn" @click="buy">
                    <dots/>
                    Buy
                </button >
                <button   class="secondary-btn" @click="back">
                    <dots/>
                    Back
                </button  >
            </div>
            <div class="all-sum">
                <img src="../assets/img/sum.svg" alt="sum">
                ${{cartTotalPrice.toFixed(2)}}
            </div>
        </div>

        <div class="popup__footer_mob desc-none">
            <button class="all-sum secondary-btn">
                <dots/>
                ${{cartTotalPrice.toFixed(2)}}
            </button>
            <div class="delete box">
                <img src="../assets/img/delete.svg" alt="delete">
            </div>
            <button class="continue primory-btn">
                continue
            </button>
        </div>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data(){
        return{
            byPayment: '',
            step: 1,
            buyerInfo: false,
            popupFooter: true,
            isBuy: false,
            cover: false, 
            heightScreen: 0,
        }
    },
    methods:{
        ...mapMutations([
            'setTotalPrice',
            'clearCart',
            'setItemsInCart',
            'setIsShowPopup',            
        ]),
        isShowPopup(){
          this.setIsShowPopup();
        },
        chengeQuantity(obj, num, index){
            obj.quantity = obj.quantity + num;
            if (obj.quantity === 0){
                this.deleteProduct(index);
            }
            this.cartPrice;
            this.setItemsInCart();

        },
        thingInCart(n) {
            return ( +n < 10 ) ? "0" + n : n;
        },
        deleteProduct(index){
            this.cart.splice(index, 1);
        },        
        itemPrice(obj){            
            return obj.price*obj.quantity;
        },
        removeAll(){
            this.step=1;
            this.clearCart();
            // this.cart = [];
        },
        next(){
            this.step += 1;
            if(this.step === 3){
                this.popupFooter = false
            }
        },
        back(){
            this.step =1;
            this.cover = false;
            this.popupFooter=true;
        },
        buy(){
            this.isBuy = true;
            this.step = 1;
            this.popupFooter = false;
        },
        closePopup(){

        }
    },
    computed:{
        ...mapState([
            'cartTotalPrice',
            'cart',
            'itemsInCart',
            'showPopup'
        ]),

        cartPrice(){
            let price = 0;
            for(let i of this.cart){
                price += i.quantity*i.price;
            }
            this.setTotalPrice(price);
        },
        
    },
    watch:{
        cart(){
            this.cartPrice;
            this.setItemsInCart();
        },
    }
}
</script>