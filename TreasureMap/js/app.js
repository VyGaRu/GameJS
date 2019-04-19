var canvasW = 0;
var canvasH = 0;
var treasure_ = [];
var visible = true;
var line = 0;
var userCheck = 0;

var Treasure = function( x, y)
{

  this.posX = x;
  this.posY = y; 

 this.drawTreasure = function()
 {
	var canvas_ = document.getElementById('canvas');
	var ctx_ = canvas_.getContext("2d");
	var img_ = document.getElementById('chest');
	ctx_.drawImage(img_, this.posX, this.posY, 70, 70);

 };

 this.clearTreasure = function()
 {
	var canvas_ = document.getElementById('canvas');
	var ctx_ = canvas_.getContext("2d");
	var img_ = document.getElementById('chest');
	ctx_.clearRect(this.posX, this.posY, 70, 70);
 };

 this.checkPlace = function(fX, fY)
 {

   var elem_ = document.getElementById('score');
   elem_.innerText = "Попытка : " + userCheck++; 

   if (this.posX < fX &&  fX < this.posX + 70  && this.posY < fY &&  fY < this.posY + 70 )
   {
   	userCheck = 0;
    visible = true;
    elem_.innerText = "ТЫ ВЫЙГРАЛ!!"; 
    //document.write("Gaem");
    this.drawTreasure();
   }
   	
 };

};


var loadPage = function()
{
  initChest();
}; 

function checkStart()
{
console.log(treasure_.length)
   if (treasure_.length > 0 )
   {

   	return true ;
   };
   return false;

}

function choosePlase(event)
{

   if (visible)
   {
		if (treasure_.length > 0)
		{	    
		    var treasure = treasure_.pop();
		    treasure.clearTreasure();
		};

		var treasure = new Treasure(event.offsetX, event.offsetY);
		    treasure_.push(treasure);
		    treasure.drawTreasure();
	} 
	else
	{

		var treasure = treasure_[0];
		treasure.checkPlace(event.offsetX, event.offsetY);
	}
}

function initChest()
{
	var canvas_ = document.getElementById('chestCanv');
	var ctx_ = canvas_.getContext("2d");
	var img_ = document.getElementById('chest');
	ctx_.drawImage(img_, 1, 1, 70, 70);
};


function saveTreasure()
{
console.log(checkStart());

	if (checkStart()) 
	{

	    var treasure = treasure_[0];
	        visible = false;
	        treasure.clearTreasure();
	}
   
} ;

function showTreasure()
{
	if (checkStart()) 
	{
		console.log(treasure_);
		var treasure = treasure_[0];
	        visible = true;
		    treasure.drawTreasure();
	}
} ;
