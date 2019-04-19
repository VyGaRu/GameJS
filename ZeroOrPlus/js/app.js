var part_ = [];
var winBlock;
var winNow = false;

function checkPart_(elem_)
{
  for (var el_ in part_) {
    if (part_[el_].id == elem_.id) {
      return false;
    }
  }
  return true;
}

function returnSteep()
{
  if(part_.length > 0)
  {
    if (part_[0].steep == 'zero')
    {
       return  "cross";
    }
    else
    {
      return  "zero";
    }
  }
  return  "zero";
}

function getSteepById (id)
{

  for (var i = 0; i < part_.length; i++) {
    if (part_[i].id == id) {
      return part_[i].steep;
    }
  }
    return "-";
}

function checkWiner(steepNow) {

  /*console.log(getSteepById ("id0") + getSteepById ("id1") + getSteepById ("id2"));*/

  if (getSteepById ("id0") == steepNow &&  getSteepById ("id1") == steepNow && getSteepById ("id2") == steepNow)
  {
    winBlock = ["id0", "id1", "id2"];

    return true;
  }
  if (getSteepById ("id3") == steepNow &&  getSteepById ("id4") == steepNow && getSteepById ("id5") == steepNow)
  {
    winBlock = ["id3", "id4", "id5"];

    return true;
  }
  if (getSteepById ("id6") == steepNow &&  getSteepById ("id7") == steepNow && getSteepById ("id8") == steepNow)
  {
    winBlock = ["id6", "id7", "id8"];
    return true;
  }

  if (getSteepById ("id0") == steepNow &&  getSteepById ("id3") == steepNow && getSteepById ("id6") == steepNow)
  {
    winBlock = ["id0", "id3", "id6"];
    return true;
  }
  if (getSteepById ("id1") == steepNow &&  getSteepById ("id4") == steepNow && getSteepById ("id7") == steepNow)
  {
    winBlock = ["id1", "id4", "id7"];
    return true;
  }
  if (getSteepById ("id2") == steepNow &&  getSteepById ("id4") == steepNow && getSteepById ("id7") == steepNow)
  {
    winBlock = ["id2", "id4", "id7"];
    return true;
  }

  if (getSteepById ("id0") == steepNow && getSteepById ("id4") == steepNow && getSteepById ("id8") == steepNow)
  {
    winBlock = ["id0", "id4", "id8"];
    return true;
  }

  if (getSteepById ("id2") == steepNow &&  getSteepById ("id4") == steepNow && getSteepById ("id6") == steepNow)
  {
    winBlock = ["id2", "id4", "id6"];
    return true;
  }


}

function clickBlock(event, id)
{
  if (!winNow) {
    var elem_ = document.getElementById(id);
    if (checkPart_(elem_))
    {
      elem_.steep = returnSteep();
      part_.unshift(elem_);
      var ctx_ = elem_.getContext("2d");
      var img_ = document.getElementById(elem_.steep);
      ctx_.drawImage(img_, 1,1, 70, 70);
      if (checkWiner(elem_.steep))
      {
        console.log(winBlock);
         for (var wb in winBlock) {
           console.log(wb);
           console.log(winBlock[wb]);
           var bctx = document.getElementById(winBlock[wb]).getContext("2d");
           bctx.font = "40px serif";
           bctx.fillStyle = "blue";
           bctx.fillText("Winer", 1 , 50);
           winNow = true;
         }
      }
    }
  }
}
