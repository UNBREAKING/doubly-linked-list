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

    insertAt(index, data) {
        const elem =new Node(this._tail.data,null,null);

        this._tail.next=elem;
        elem.prev=this._tail;
        this._tail=elem;
        var CurrentNode=this._tail.prev;
        var count=this.length-1;
        while(count>index){
            var ExchNode=CurrentNode.prev;
            CurrentNode.data=ExchNode.data;
            CurrentNode=CurrentNode.prev;
            count--;
        }
        this.length++;
        CurrentNode.data=data;
    }

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
        this._head=new Node(null, null, null);
        this._tail=new Node(null, null, null);
        this.length=0;
    }

    deleteAt(index) {
        var CurrentNode=this._head;
        var count=0;
        while(count<index){
            CurrentNode=CurrentNode.next;
            count++;
        }
        while(count<this.length-1){
            CurrentNode.data=CurrentNode.next.data;
            CurrentNode=CurrentNode.next;
            count++;
        }
        CurrentNode.prev.next=null;
        this._tail=CurrentNode.prev;
        this.length--;
    }

    reverse() {}

    indexOf(data) {
        var CurrentNode=this._head;
        var length=this.length;
        var count=0;

        while(data!=CurrentNode.data && count<length-1){
            CurrentNode= CurrentNode.next;
            count++;
        }
        if (data!=CurrentNode.data){
            count= -1;
        }
    return count;
    }
}

module.exports = LinkedList;
