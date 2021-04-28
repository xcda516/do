new Vue({
    el: '#app',
    data: {
        todoList: [
            { name: '吃饭', state: true },
            { name: '睡觉', state: false },
            { name: '吃饭饭', state: true },
            { name: '睡觉觉', state: false },
            { name: '吃吃饭', state: true },
            { name: '睡睡觉', state: false },
        ],
        flag: [true, false],
        i: 0
    },
    methods: {
        changeState(item) {
            item.state = !item.state
        },
        add(event) {
            this.todoList.push({ name: event.currentTarget.value, state: false })
        },
        remove(index) {
            this.todoList.splice(index, 1)
        },
        allFn() {
            this.flag = [false, true]
        },
        noFn() {
            this.flag = [false, false]
        },
        okFn() {
            this.flag = [true, true]
        }
    },
    computed: {
        num() {
            this.i=0
            this.todoList.forEach((val) => {
                if (val.state == false) {
                    this.i++
                    console.log(this.i)
                }
            })
            return this.i
        }
    }
})