<template>
  <div class="good-card" 
    :class="{'open':openCard, 'mouseOver': mouseOver}"
    @click="clickOutside"
    @mouseover="mouseOver=true" 
    @mouseout="mouseOver=false">
    <dots/> 
    
    <div v-if="!openCard" class="arrow-open"  @click="openCard=true, mouseOver=true" >
      <img src="../assets/img/arrow_open.svg" alt="arrow-open">
    </div>
    <div v-else class="arrow-back" @click="openCard=false, mouseOver=false" >
      <img src="../assets/img/arrow_back.svg" alt="arrow-back" >
    </div>

    <div class="good-card__content">    
        

      <div class="good-card__top">
        <p class="good-card__name"> {{product.name}} <br> {{product.property}} </p>
        <div class="good-card__star" v-if="product.star">
          <img src="../assets/img/star-g.svg" alt="star">
        </div>
      </div>

      <div class="good-card__img" > 
        <img :src="product.image" alt="image">
      </div>

      <div class="good-card__bottom">
        <div class="good-card__price-line">
          <span class="good-card__price">
             <span :class="{'dollar': openCard}">$</span>
             {{product.price.toFixed(2)}}
          </span>
          <span class="good-card__psu" v-if="product.psu">psu</span>
        </div>
        
        <div class="good-card__hover">
          
          <div class="select" >
            <div class="select__title"  @click="isOpen = !isOpen">
              <dots/>          
              <span>Hash rate: 11.5</span> 
              <!-- <arrow :class="{'arrow-down': !isOpen, 'arrow-up': isOpen}"></arrow> -->
              <img  src="../assets/img/arrow-down.svg" alt="arrow-down">
            </div>
          </div>

          <div class="good-card__buttons">
            <button type="button" class="secondary-btn" >
              Details
              <dots/>
            </button>
            <button type="button" class="secondary-btn" @click="addToCart(product)">
              <dots/>
              Add to cart
            </button>
          </div>
        </div>

      </div>    

    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'GoodCard',
  props: ['product'],
  data(){
    return{
      isOpen: false,
      openCard: false,
      mouseOver: false,
    }
  },
  methods:{
    ...mapMutations([
        'setItemsInCart',
    ]),
    clickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.openCard = false;
      }
    },
    addToCart(product){
      let found = false;
      for (let i = 0; i < this.cart.length; i++) {

        if (this.cart[i].sku === product.sku) {
          
          let newProduct = this.cart[i];
          newProduct.quantity = newProduct.quantity + 1;
          
          found = true;
          this.setItemsInCart();
          break;
        }
      }
      if(!found) {
        product.quantity = 1;
        this.cart.push(product);        
      }
    },
  },
  computed:{
    ...mapState([
        'cartTotalPrice',
        'cart',
    ]),
  },
  created() {
    document.addEventListener('click', this.clickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
