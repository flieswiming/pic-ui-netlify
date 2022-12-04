

let vm = new Vue({
el : '#app',

data:{
    current:0,

  isShowdel:false,
   b:{bookname:'', price:null},
   booklist:[],
  
   
 
    },

methods:{
 add: function(){
   
    //  this.num<=100?console.log(this.bookname+(this.num++)+';'):"done"

//    this.booklist=this.booklist.push({name:this.bookname},{price:this.price});
   this.booklist.push(this.b);
   this.b={};
 


   console.log( this.booklist);
 },
 //添加逻辑控制语句，当mouseover到booklist[index]的元素时，那么第index个元素上显示删除按钮；
 indexTocurrent:function(index){
     this.current=index;
     console.log('现在你停留在第'+this.current+'个对象上');
     console.log('打印'+ this.booklist[this.current]);
    
   
 
 },

delarr:function(){
this.booklist.splice(this.current,1);

}

}





}
)

