const Node = require('./node');

class LinkedList {
    constructor() {
        this._length=0;
        this.Head=null;
        this.Tail=null;
    }

    append(data) {
            const elem = new Node(data, null, null);
            if(this._length===0){
                this.Head=elem;
                this.Tail=elem;
            }else{
                this.Tail.next=elem;
                elem.prev=this.Tail;
                this.Tail=elem;
            }
            this._length++;
    }

    head() {
        return this.Head.data;
    }

    tail() {
        return this.Tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
