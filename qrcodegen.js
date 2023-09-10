
const generator=()=>{

    const genvalue=document.getElementById("qrvalue").value;
    if(genvalue==""){
        alert("please your data")
    }else{
    const qrWidth=parseInt(document.getElementById("widthvalue").value);
    const qrHeight=parseInt(document.getElementById("heightvalue").value);
    const qr_img=document.getElementById("qr-img");

    console.log(typeof(qrHeight));
    const fetchQR=`https://api.qrserver.com/v1/create-qr-code/?size=${qrWidth}x${qrHeight}&data=${genvalue}`;
    qr_img.src=fetchQR;
    }}

const qrdownload=()=>{
   const chooseformat= document.getElementById("inlineFormCustomSelect").value;
  const qrdown= document.getElementById("qrdown-btn");
  const qr_img=document.getElementById("qr-img").src;
  console.log(qr_img);
    qrdown.href=qr_img;
}