var app = new Vue({

    el: '#root',

    data: {

        indexImg : 0 ,
        images: ['img/img0.jpg','img/img1.jpg','img/img2.jpg','img/img3.jpg']
    },

    methods:{

        next : function(){

            (this.indexImg == this.images.length -1) ? this.indexImg = 0 : this.indexImg++;
                
           
        },

        prev : function(){

            (this.indexImg == 0) ? this.indexImg = this.images.length = -1 : this.indexImg--;
        },

        
        
        
    }

})