<template>
  <div id="app">

    <div class=" navbar ">
      <div class="container">

        <div class="navbar__left">

            <div class="desc-none mob-control">
              <img src="./assets/img/controls.svg" alt="controls" v-if="!showPopup">
              <img src="./assets/img/close.svg" alt="close"  v-if="showPopup" @click="isShowPopup" >
            </div>
            
            <img src="./assets/img/logo.svg" alt="logo">
            <img src="./assets/img/planet.svg" alt="earth" class="mob-none">
            <span class="mob-none">eng</span>
        </div>
        
        <div id="humburger" @click="openMenu=true" class="mob-none">
          <img src="./assets/img/hamburger.svg" alt="menu" >
        </div>
        

        <div class="navbar__right">

          <div class="navbar__user mob-none" > 
            <img src="./assets/img/user.svg" alt="user">
            <span>My account</span>
            <arrow class="arrow-down"></arrow>
          </div>

          <div class="mob-none">
            <three-dots></three-dots>
            <img src="./assets/img/balance.svg" alt="balance">
          </div>

          <div class="mob-none">
            <three-dots></three-dots>
            <img src="./assets/img/bell.svg" alt="bell">
          </div>

          <div class="navbar__cart" 
            @click="isShowPopup" >

            <three-dots class="mob-none"></three-dots>
            <span class="mob-none"> {{itemsInCart}} </span>
            <img src="./assets/img/cart.svg" alt="cart">
          </div>
        </div>

      </div>

      <div class="navbar__nav-wrap">
        <nav class="navbar__nav" :class="{'open': openMenu}">
          <img src="./assets/img/close.svg" alt="menu"  class="mob-none" @click="openMenu=false">
          <a href="#">Home</a>  <three-dots class="mob-none"></three-dots>
          <a href="#">Sell</a> <three-dots class="mob-none"></three-dots>
          <a href="#">Host</a> <three-dots class="mob-none"></three-dots>
          <a href="#">About us</a> <three-dots class="mob-none"></three-dots>
          <a href="#">Support</a>
          <span class="navbar__nav-bg mob-none" >menu</span>
        </nav>
      </div>
        
          
    </div>
    

    <div class="container popup__wrap">      
        <popup></popup>      
    </div>
   
    <main>
      <div class="container main-container">

        <div class="filter-wrap main-content mob-none">
          <div class="title__wrap">
            <p class="title">Filters</p>
          </div>

          <div class="filters">
            
            <div class="filter" >
              <div class="filter__title" >
                <dots/>          
                <span>By Algorithm</span> 
                <arrow class="arrow-down"></arrow>
              </div>
            </div>

            <div class="filter coin" :class="{'open': coinOpen}">

              <div class="filter__title" @click="coinOpen = !coinOpen" >
                <dots/>          
                <span>By Coin</span> 
                <arrow :class="{'arrow-down': !coinOpen, 'arrow-up': coinOpen}"></arrow>
              </div>

              <div class="filter__content " >

                <input id="f-coin-0" class="filter__input" type="radio"  value="btc" v-model="byCoin" />
                <label for="f-coin-0" class="filter__label">
                  <dots/>
                  <img src="./assets/img/coin1.png" alt="by coin">
                  btc              
                </label>

                <input id="f-coin-1" class="filter__input" type="radio"  value="ppc" v-model="byCoin"  />
                <label for="f-coin-1" class="filter__label"> 
                  <dots/>
                  <img src="./assets/img/coin2.png" alt="by coin">
                  ppc
                </label>

                <input id="f-coin-2" class="filter__input" type="radio" value="etp" v-model="byCoin"   />
                <label for="f-coin-2" class="filter__label">
                  <dots/>               
                  <img src="./assets/img/coin3.png" alt="by coin">
                  etp
                </label>

                <input id="f-coin-3" class="filter__input" type="radio"  value="btc1" v-model="byCoin" />
                <label for="f-coin-3" class="filter__label">
                  <dots/>
                  <img src="./assets/img/coin1.png" alt="by coin">
                  btc              
                </label>

                <input id="f-coin-4" class="filter__input" type="radio"  value="ppc1" v-model="byCoin"  />
                <label for="f-coin-4" class="filter__label"> 
                  <dots/>
                  <img src="./assets/img/coin2.png" alt="by coin">
                  ppc
                </label>

                <input id="f-coin-5" class="filter__input" type="radio" value="etp1" v-model="byCoin"   />
                <label for="f-coin-5" class="filter__label">
                  <dots/>               
                  <img src="./assets/img/coin3.png" alt="by coin">
                  etp
                </label>

              </div>

            </div>

            <div class="filter" >
              <div class="filter__title" >
                <dots/>          
                <span>By Equipment</span> 
                <arrow class="arrow-down"></arrow>
              </div>
            </div>

            <div class="filter manuf" :class="{'open': openManuf}">

              <div class="filter__title" @click="openManuf = !openManuf" >
                <dots/>          
                <span>By Manufacturer</span> 
                <arrow :class="{'arrow-down': !openManuf, 'arrow-up': openManuf}"></arrow>
              </div>

              <div class="filter__content" >

                <input id="f-manuf-0" class="filter__input" type="checkbox"  value="amd" v-model="byManuf" />
                <label for="f-manuf-0" class="filter__label">
                  <dots/>
                  AMD            
                </label>

                <input id="f-manuf-1" class="filter__input" type="checkbox"  value="Boundary Electric" v-model="byManuf"  />
                <label for="f-manuf-1" class="filter__label"> 
                  <dots/>
                  Boundary Electric
                </label>

                <input id="f-manuf-2" class="filter__input" type="checkbox" value="Pandaminer" v-model="byManuf"   />
                <label for="f-manuf-2" class="filter__label">
                  <dots/>               
                  Pandaminer
                </label>

                <input id="f-manuf-3" class="filter__input" type="checkbox"  value="Nvidia" v-model="byManuf" />
                <label for="f-manuf-3" class="filter__label">
                  <dots/>
                  Nvidia            
                </label>

              </div>

            </div>

            <div class="filter" >
              <div class="filter__title" >
                <dots/>          
                <span>Minimum price</span> 
              </div>
            </div>

            <div class="filter" >
              <div class="filter__title" >
                <dots/>          
                <span>Maximum price</span> 
              </div>
            </div>

            <div class="filter" >
              <div class="filter__title" >
                <dots/>          
                <span>Search</span> 
              </div>
            </div>

            


          </div>
        </div>  

        <div class="sale-wrap main-content">

          <div class="title__wrap scroll mob-none" >
            <p class="title">on sale</p>
            <div class="title__option">
              <span class="text-secondary">View: </span>
              <span>Grid</span>
              <img src="./assets/img/square.svg" alt="squares">
              <three-dots></three-dots>
            </div>
          </div>

          <perfect-scrollbar class="card-panel sale">
            <card v-for="(item, index) in productsData" :key="index"
              :product="item"
            > </card>
          </perfect-scrollbar>      
        </div>

        <div class="listing main-content mob-none">
          <div class="title__wrap scroll">
            <p class="title">new listings</p>
          </div>
          <perfect-scrollbar class="card-panel">
            <card v-for="(item, index) in productsData" :key="index"
              :product="item"
            > </card>
          </perfect-scrollbar>

        </div>

        <div class="news main-content mob-none">
          <div class="title__wrap">
            <p class="title">news</p>
          </div>
          <div class="news__item">          
            <img src="./assets/img/stamp.svg" alt="stamp">
            <img src="./assets/img/hashone.svg" alt="hashone">
            <img src="./assets/img/standart.svg" alt="standart">
            <img src="./assets/img/text.svg" alt="text">
            <img src="./assets/img/city.svg" alt="city">
            <div class="n-squares">
              <div class="active"></div>
              <div ></div>
              <div ></div>
            </div>
            
            <dots></dots>
          </div>
        </div>

      </div>
    </main>


    <footer >
      <div class="container ">
        <div class="footer">
          <div class="footer__review">
            <span>4.9</span>
            <div class="footer__review-info">
              <span>Great service and prices!</span>
              <div>
                <img src="./assets/img/star.svg" alt="star" v-for="(i, index) in 5" :key="index">
                <span>David Smith</span> 
              </div>
            </div>
          </div>

          <div class="footer__icons">
            <div >
              <dots></dots>
              <img src="./assets/img/f.svg" alt="facebook">
            </div>
            <div >
              <dots></dots>
              <img src="./assets/img/t.svg" alt="twitter">
            </div>
            <div >
              <dots></dots>
              <img src="./assets/img/y.svg" alt="youtube">
            </div>
            <div >
              <dots></dots>
              <img src="./assets/img/r.svg" alt="reddit">
            </div>
          </div>

          <div class="achivment">
            <img src="./assets/img/achievment_g.svg" alt="achievment">
            <img src="./assets/img/achievment_s.svg" alt="achievment">
            <img src="./assets/img/achievment_p.svg" alt="achievment">
            <img src="./assets/img/achievment_b.svg" alt="achievment">
          </div>

        </div>
      </div>      
    </footer>  


  </div>
</template>

<script>
import card from './components/GoodCard.vue'
import popup from './components/Popup.vue'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  data() {
    return{
      openMenu: false,
      coinOpen: false,
      byCoin: 'ppc',
      openManuf: false,
      byManuf: [],

    }
  },
  methods:{
    ...mapMutations([
      'setIsShowPopup',
    ]),
    isShowPopup(){
      this.setIsShowPopup();
    },
  },
  computed:{
    ...mapState([
        'productsData',
        'cart',
        'itemsInCart',
        'showPopup'
      ]),
  },
  components: {
    card, popup
  }
}
</script>




<style lang="scss">
@import "@/assets/styles/common.scss";
</style>
