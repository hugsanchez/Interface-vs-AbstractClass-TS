import{ Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  //default first time to be null

  add(data:number): void {
    //can still have return statements but not returning any specific value
    const node = new Node(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if(!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while(node.next){
      length++;
      node = node.next;
    }
    return length;
  }

  at(index:number): Node {
    if(!this.head){
      throw new Error('Index out of bounds')
    }
    let counter = 0;
    let node: Node | null = this.head;

    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex:number, rightIndex:number): boolean {
    if(!this.head){
      throw new Error('List is Empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex:number, rightIndex:number): void {
    const leftNode = this.at(leftIndex);
    const rightNdoe = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNdoe.data;
    rightNdoe.data = temp;
  }

  print(): void {
    if(!this.head){
      return;
    }
    let node: Node | null = this.head;

    while(node){
      console.log(node.data);
      node = node.next;
    }
  }
}