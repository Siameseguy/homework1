angular.module('myApp', [])

.controller('mainCtrl', function(){
  var self = this;
 
  self.listOne = [
  	'1.1', '1.2', '1.3'
  ]

  self.listTwo = [
  	'2.2', '2.3', '2.3'
  ]

  self.changeTaskColor = function() {
   
  }

  self.addToList = function(item) {
  	self.listOne.push(this.item);
  	// console.log(this.item);
  }

  self.addToOtherList = function(itemTwo) {
  	self.listTwo.push(this.itemTwo);
  	// console.log(this.itemTwo);
  }

  self.todo = [];

  self.addToTodo = function(task) {
    if(this.task != "") {
      self.todo.push(this.task);
    }

    self.task = "";
  }

  self.deleteTask = function(index) {
    self.todo.splice(index, 1);
  }
  
})