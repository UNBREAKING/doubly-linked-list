const Node = require('./node');

class LinkedList {
    constructor(length=0,_head=null,_tail=null) {
        this.length=length;
        this._head=_head;
        this._tail=_tail;
    }

    append(data) {
            var elem = new Node(data, null, null);
            if(this.length===0){
                this._head=elem;
                this._tail=elem;
            }else{
                this._tail.next=elem;
                elem.prev=this._tail;
                this._tail=elem;
            }
            this.length++;
            return this;
    }

    head() {
        if(this._head!=null){
        return this._head.data;}
        else{
            return null;
        }
    }

    tail() {
        if(this._tail!=null){
        return this._tail.data;}
        else{
            return null;
        }
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
        var count=0;
        var CurrentNode=this._head;

        while(count<index){
            CurrentNode=CurrentNode.next;
            count++;
        }

        var prevNode;
        var elem =new Node(data,null,null);

        if(CurrentNode!=null){
        prevNode=CurrentNode.prev;
        prevNode.next=elem;
        CurrentNode.prev=elem;
        }
        else{
            prevNode=null;
        }

        elem.prev=prevNode;
        elem.next=CurrentNode;
        this.length++;

        return this;
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
        this._head=null;
        this._tail=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {
        var CurrentNode=this._head;
        var count=0;
        if(this.length>1){
        while(count<index){
            CurrentNode=CurrentNode.next;
            count++;
        }}
        var prevNode=CurrentNode.prev;
        var nextNode=CurrentNode.next;
        if(prevNode!=null){
        prevNode.next=nextNode;
        }
        if(nextNode!=null) {
            nextNode.prev = prevNode;
        }

        this.length--;
        return this;
    }

    reverse() {
        var toChange=this._head.data;
        this._head.data=this._tail.data;
        this._tail.data=toChange;
        if(this.length>1) {
            var ToUp = this._head.next;
            var ToDown = this._tail.prev;
            var len = this.length - 2;
            while (len > 1) {
                var toChange = ToUp.data;
                ToUp.data = ToDown.data;
                ToDown.data = toChange;
                ToUp = ToUp.next;
                ToDown = ToDown.prev;
                len = len - 2;
            }
        }

        return this;
    }

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
