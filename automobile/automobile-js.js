// data
const products = [
  { id: 1, description: "Bosch Brake Fluid DOT 3 (500 ml)", price: 195, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_0986ab70048f8_brake_fluid_dot_3_500_ml_.jpg"},
  { id: 2, description: 'Far Vision Side Door', price: 1507, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/far_vision_side_door_mirror_safari_dicor_electrical_left_.jpg"},
  { id: 3, description: 'Autogold Tail Light', price: 2585, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/autogold_tail_light_lamp_assembly_i10_grand_left_.jpg" },
  { id: 4, description: 'Soft Wiper Blade', price: 198, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/7/5/soft_wiper_blade_epe_dna_16_.jpg" },
  { id: 5, description: 'Autogold Tail Light Lamp Scorpio', price: 2585, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/autogold_tail_light_lamp_assembly_scorpio_type_3_s2_s4_s8_s10_white_left_.jpg"},
  { id: 6, description: 'Newstar Rear Hub', price: 3894, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/newstar_rear_hub_hyundai_accent_viva_ns105.jpg"},
  { id: 7, description: 'Elofic Raahe Car Air Purifier', price: 4500, img: "https://www.partsbigboss.in/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/elofic_eap_9903_elofic_raahe_car_air_purifier_.jpg" },
  { id: 8, description: 'Yazada Air Compressor', price: 180, img: 'https://images-na.ssl-images-amazon.com/images/I/41Du5ZtMgIL.jpg'},
  { id: 9, description: 'Ashok Leyland Dost Flywheel Assembly', price: 4340, img: "https://4.imimg.com/data4/SB/JF/MY-11038992/dos-279-flywheel-assy--500x500.jpg"},
  { id: 10, description: 'Stainless Steel Hydraulic Pump Valve Chamber', price: 49, img: "https://5.imimg.com/data5/NW/VG/MY-26970475/hydraulic-pump-valve-chamber-500x500.jpg"},
  { id: 11, description: 'Grey And Black Duster Steering Rack', price: 7999, img: "https://5.imimg.com/data5/VQ/GE/SQ/SELLER-53866801/duster-steering-rack-500x500.png"},
  { id: 12, description: 'Volvo Bus Spare Parts', price: 1000, img: "https://5.imimg.com/data5/EF/RZ/YN/SELLER-4263885/volvo-bus-spare-parts-500x500.jpg" },
];
 
// component 
const Home = {
  template: '#home', 
  name: 'Home',
  data: () => {
    return {
      products, 
      searchKey: '',
      liked: [],
      cart: []
    }
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get('like'));
      cookieValue == null ? this.liked = [] : this.liked = cookieValue; 
    },
    cartTotalAmount() {     
      let total = 0;
      for (let item in this.cart) {
        total = total + (this.cart[item].quantity * this.cart[item].price);
      }
      return total;
    },
    itemTotalAmount(){
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + (this.cart[item].quantity);
      }
      return itemTotal;
    }
  },
  methods: {
    setLikeCookie() {
      document.addEventListener('input', () => {
        setTimeout(() => {
          let cookieValue = this.liked;
          cookieValue = JSON.stringify(cookieValue)
          $cookies.set('like', cookieValue); 
        }, 300);
      })
    },
    addToCart(product) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++ 
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(id) {
      this.$delete(this.cart, id)   
    }
  },
  mounted: function(){
    this.getLikeCookie;
  }
}

const WishList = {
  template: '<h1 style = "color: white">Wish List</h1>',
  name: 'WishList',
}
const UserSettings = {
  template: '<h1 style = "color: white">User Settings</h1>',
  name: 'UserSettings'
}
const ShoppingCart = {
  template: '<h1 style = "color: white">Shopping Cart</h1>',
  name: 'ShoppingCart'
}

// router
const router = new VueRouter({
  routes: [   
    { path: '/', component: Home, name:'Home' },
    { path: '/user-settings', component: UserSettings, name:'UserSettings' },
    { path: '/wish-list', component: WishList, name:'WishList' },
    { path: '/shopping-cart', component: ShoppingCart, name:'ShoppingCart'}
  ]
})

const vue = new Vue({
  router
}).$mount('#app');
