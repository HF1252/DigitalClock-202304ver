//Join Time Button
var app1 = new Vue({
    el: "#app1",
    data: {
        now1: ""
    },
    methods: {
        time: function(e) {
            var date = new Date();
            this.now1 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            alert('Job in done')
        },
        del: function(e) {
            var date = new Date();
            this.now1 = date.none;
        }
    },
});

//Logout Time Button
var app2 = new Vue({
    el: "#app2",
    data: {
        now2: ""
    },
    methods: {
        time: function(e) {
            var date = new Date();
            this.now2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            alert('Logout done')
        },
        del: function(e) {
            var date = new Date();
            this.now2 = date.none;
        }
    }
});