<template>
<div>
    <h3>Searching for :
        <small>{{SearchData}}</small>
    </h3>

    <div class="col-md-9">
        <div class="container">
            <div class="card-group">
                <transition-group name="fade" tag="div" class="row">
                    <div class="card col-md-4" v-for="item in Resulttiems" :key="item.id">
                        <img class="card-img-top" :src="item.imgSrc" />
                        <div class="card-body">
                            <h6>Price: ${{item.price}}</h6>
                            <h5 class="card-title">Card title</h5>
                            <button class=" btn btn-danger "><small> Add to cart</small></button>
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>

</div>
</template>

   
   
   
   
<script>
import {
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            SearchData: '',
            Resulttiems: []
        }
    },
    methods: {
        ...mapActions(['SetUserMovemnetSearch']),
        runSearch() {
            this.Resulttiems = [{
                    id: '12',
                    Name: 'i Phone 11 Pro',
                    desc: 'iphoe 11 pro back',
                    price: '599',
                    imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
                },
                {
                    id: '14',
                    Name: 'Huawei',
                    desc: 'Huawei Huawei',
                    price: '1000',
                    imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg'
                },
                {
                    id: '16',
                    Name: 'nike shirt',
                    desc: 'red nike shirt',
                    price: '12',
                    imgSrc: 'https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=ghd0-00bh-djr6&pblegacy=1&pblegacysize=big&digest=3069003456'
                },
            ];
            let data = this.SearchData;
            this.SetUserMovemnetSearch(data);
        }
    },

    watch: {
        '$route'(to, from) {
            this.SearchData = to.query.SData;
            from
        }
    },
    mounted() {
        this.SearchData = this.$route.query.SData;
        this.runSearch();
    },
}
</script>
