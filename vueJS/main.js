var app = new Vue({

    el: '#root',

    data: {

        circleActive : 0,
        indexImg : 0 ,
        images: ['img/img0.jpg','img/img1.jpg','img/img2.jpg','img/img3.jpg']
    },

    created: function(){
        setInterval(() =>{
            this.next()
        }, 2000);


    },

    methods:{

        next : function(){

            (this.indexImg == this.images.length -1) ? this.indexImg = 0 : this.indexImg++;
            (this.circleActive == this.images.length -1) ? this.circleActive = 0 : this.circleActive++;
           
        },

        prev : function(){

            (this.indexImg == 0) ? this.indexImg = this.images.length = -1 : this.indexImg--;
            (this.circleActive == 0) ? this.circleActive = this.circleActive = -1 : this.indexImg--;
        },

        
        
    }

})