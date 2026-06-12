function elevator(left, right, call){
   const leftEle = Math.abs( left - call );
   const rightEle = Math.abs( right - call );

  return  rightEle > leftEle ? "left" : "right" ;
}