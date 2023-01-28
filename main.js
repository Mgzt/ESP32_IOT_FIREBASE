//==============================firebase

const firebaseConfig = {
  apiKey: "AIzaSyD4obmL1qj_oKBKojdeU3Qzpp6i8PWpJoo",
  authDomain: "esp32-firebase-cd3b1.firebaseapp.com",
  databaseURL:
    "https://esp32-firebase-cd3b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-firebase-cd3b1",
  storageBucket: "esp32-firebase-cd3b1.appspot.com",
  messagingSenderId: "729559524364",
  appId: "1:729559524364:web:5251410be1fbbdda653a29",
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//================Header
const icon_sun = document.querySelector(
  ".HeaderApp .Navbar .Navbar_feature .Navbar_feature--options li:nth-child(1)"
);
const icon_moon = document.querySelector(
  ".HeaderApp .Navbar .Navbar_feature .Navbar_feature--options li:nth-child(2)"
);

function onClickSun() {
  icon_sun.style.display = "none";
  icon_moon.style.display = "block";
  document.querySelector("html").style.backgroundColor = "#3c3e41";
}
function onClickMoon() {
  icon_moon.style.display = "none";
  icon_sun.style.display = "block";
  document.querySelector("html").style.backgroundColor = " rgb(246, 246, 246)";
}
/////======================================================BODY
///===============================LED1
const icon_ON_led1 = document.querySelector(
  ".BodyApp .listDevice .LED1 .LED1_icon .LED1_icon--ON"
);
const icon_OFF_led1 = document.querySelector(
  ".BodyApp .listDevice .LED1 .LED1_icon .LED1_icon--OFF"
);
const LED1_checked = document.getElementById("flexSwitchCheckChecked_LED1");
LED1_checked.addEventListener("change", function () {
  if (this.checked) {
    icon_ON_led1.style.display = "block";
    icon_OFF_led1.style.display = "none";
    firebase.database().ref("/esp32_fireBase_test").update({ LED1: 1 });
  } else {
    icon_ON_led1.style.display = "none";
    icon_OFF_led1.style.display = "block";
    firebase.database().ref("/esp32_fireBase_test").update({ LED1: 0 });
  }
});
//==================================LED2
const icon_ON_led2 = document.querySelector(
  ".BodyApp .listDevice .LED1 .LED1_icon .LED2_icon--ON"
);
const icon_OFF_led2 = document.querySelector(
  ".BodyApp .listDevice .LED1 .LED1_icon .LED2_icon--OFF"
);
const LED2_checked = document.getElementById("flexSwitchCheckChecked_LED2");
LED2_checked.addEventListener("change", function () {
  if (this.checked) {
    icon_ON_led2.style.display = "block";
    icon_OFF_led2.style.display = "none";
    database.ref("/esp32_fireBase_test").update({ LED2: 1 });
  } else {
    icon_ON_led2.style.display = "none";
    icon_OFF_led2.style.display = "block";
    database.ref("/esp32_fireBase_test").update({ LED2: 0 });
  }
});

//==================================IR
const IR_div = document.querySelector(
  ".BodyApp .listDevice .IR .IR_status"
);
const IR_icon = document.querySelector(
  ".BodyApp .listDevice .IR .IR_icon"
);

database.ref("/esp32_fireBase_test/IR").on("value",(snapshot)=>{
  var sttIR=snapshot.val();
  console.log(sttIR);
  if(sttIR=="kHONG PHAT HIEN VAT")
  {
    IR_div.innerHTML="Safe"
    IR_icon.style.color="greenyellow"
  }
  else{
    IR_div.innerHTML="Warning !!!"
    IR_icon.style.color="red"

  }
})
////============ temp
const temp_div = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_status .nhietdo"
);
const icon_snow = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon .TEMP_icon--snow"
);
const icon_low = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon .TEMP_icon--low"
);
const icon_half = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon .TEMP_icon--half"
);
const icon_high = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon .TEMP_icon--high"
);
const icon_sunTemp = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon .TEMP_icon--sun"
);

const icon_snow1 = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon li:not(.BodyApp .listDevice .TEMP .TEMP_icon li:nth-child(1)"
);
const icon_low1 = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon li:not(.BodyApp .listDevice .TEMP .TEMP_icon li:nth-child(2)"
);
const icon_half1 = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon li:not(.BodyApp .listDevice .TEMP .TEMP_icon li:nth-child(3)"
);
const icon_high1 = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon li:not(.BodyApp .listDevice .TEMP .TEMP_icon li:nth-child(4)"
);
const icon_sunTemp1 = document.querySelector(
  ".BodyApp .listDevice .TEMP .TEMP_icon li:not(.BodyApp .listDevice .TEMP .TEMP_icon li:nth-child(5)"
);

database.ref("/esp32_fireBase_test/Temp/C").on("value", (snapshot) => {
  var temp = snapshot.val();
  temp_div.innerHTML = temp;
  if (temp == 0) {
    icon_snow.style.display = "block";
    icon_low.style.display = "none";
    icon_half.style.display = "none";
    icon_high.style.display = "none";
    icon_sunTemp.style.display = "none";
  }
  if (temp >= 10 && temp <= 28) {
    icon_snow.style.display = "none";
    icon_low.style.display = "block";
    icon_half.style.display = "none";
    icon_high.style.display = "none";
    icon_sunTemp.style.display = "none";
  }
  if (temp > 28 && temp <= 50) {
    icon_snow.style.display = "none";
    icon_low.style.display = "none";
    icon_half.style.display = "block";
    icon_high.style.display = "none";
    icon_sunTemp.style.display = "none";
  }
  if (temp > 50 && temp <= 70) {
    icon_snow.style.display = "none";
    icon_low.style.display = "none";
    icon_half.style.display = "none";
    icon_high.style.display = "block";
    icon_sunTemp.style.display = "none";
  }
  if (temp > 70) {
    icon_snow.style.display = "none";
    icon_low.style.display = "none";
    icon_half.style.display = "none";
    icon_high.style.display = "none";
    icon_sunTemp.style.display = "block";
  }
});
