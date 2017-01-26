const Node = require('./node');

class LinkedList {
    constructor() {
        this._length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {
            const elem = new Node(data, null, null);
            if(this._length===0){
                this._head=elem;
                this._tail=elem;
            }else{
                this._tail.next=elem;
                elem.prev=this._tail;
                this._tail=elem;
            }
            this._length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var CurrentNode=this._head;
        var length=this._length;
        var count= 1;
        if(length>index && index>0){
        while(count<index){
            CurrentNode= CurrentNode.next;
            count++;
        }}
        else{ CurrentNode="ERROR";}
        return CurrentNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
