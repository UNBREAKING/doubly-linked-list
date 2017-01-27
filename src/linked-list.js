const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {
            const elem = new Node(data, null, null);
            if(this.length===0){
                this._head=elem;
                this._tail=elem;
            }else{
                this._tail.next=elem;
                elem.prev=this._tail;
                this._tail=elem;
            }
            this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var CurrentNode=this._head;
        var length=this.length;
        var count= 0;
        if(length>index && index>=0){
        while(count<index){
            CurrentNode= CurrentNode.next;
            count++;
        }}
        else{ CurrentNode="ERROR";}
        return CurrentNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {
        var res;
        if (this.length===0){
            res=true;
        }else{
            res=false;
        }
        return res;
    }

    clear() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
