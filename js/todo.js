
// var id = 0

new Vue({

    el: '#app',
    data: {
        text: 'add your todolist',
        arr: [],
    },
    methods: {
        addItem: function () {
            var inputvalue = {
                id: this.arr.length + 1,
                myvalue: this.text.trim()
            }
            if(this.text==='') return
            this.arr.push(inputvalue)
            this.text=''
        }

    },
 



})



