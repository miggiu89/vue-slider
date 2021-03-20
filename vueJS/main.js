var app = new Vue({

    el: '#root',

    data: {

        indexImg : 0 ,
        images: ['img/img0.jpg','img/img1.jpg','img/img2.jpg','img/img3.jpg']
    },

    methods:{

        next : function(){

            if(this.indexImg == this.images.length -1){
                this.indexImg = 0;
            }
            else{
                this.indexImg++;
            }
        },

        prev : function(){

            if(this.indexImg == 0){
                this.indexImg = this.images.lenght -1;
            }
            else {
                this.indexImg--;
            }
        }
    }

})