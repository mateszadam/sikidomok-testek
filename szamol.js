function SzámolRombusz() {
  var RombuszA = parseFloat(document.getElementById("RombuszA").value);
  var RombuszM = parseFloat(document.getElementById("RombuszM").value);
  var TerületRombusz = 0;
  var KerületRombusz = 0;
  if (RombuszA <= 0 || RombuszM <= 0) {
    alert("Nullával és annál kisebb számmal nem lehet számolni");
  } else {
    TerületRombusz = RombuszA * RombuszM;
    KerületRombusz = 4 * RombuszA;
    TerületRombusz = TerületRombusz.toFixed(2);
    KerületRombusz = KerületRombusz.toFixed(2);
    document.getElementById("RombuszEredmenyKerület").value =
      KerületRombusz + "cm";
    document.getElementById("RombuszEredmenyTerület").value =
      TerületRombusz + "cm2";
  }
}
function SzámolTrapéz() {
  var TrapézA = parseFloat(document.getElementById("TrapézA").value);
  var TrapézB = parseFloat(document.getElementById("TrapézB").value);
  var TrapézC = parseFloat(document.getElementById("TrapézC").value);
  var TrapézD = parseFloat(document.getElementById("TrapézD").value);
  var TrapézM = parseFloat(document.getElementById("TrapézM").value);
  var TerületTrapéz = 0;
  var KerületTrapéz = 0;
  if (
    TrapézA <= 0 ||
    TrapézB <= 0 ||
    TrapézC <= 0 ||
    TrapézD <= 0 ||
    TrapézM <= 0
  ) {
    alert("Nullával és annál kisebb számmal nem lehet számolni");
  } else {
    TerületTrapéz = ((TrapézA + TrapézB) * TrapézM) / 2;
    KerületTrapéz = TrapézA + TrapézB + TrapézC + TrapézD;
    TerületTrapéz = TerületTrapéz.toFixed(2);
    KerületTrapéz = KerületTrapéz.toFixed(2);
    document.getElementById("TrapézEredmenyKerület").value =
      KerületTrapéz + "cm";
    document.getElementById("TrapézEredmenyTerület").value =
      TerületTrapéz + "cm2";
  }
}
function SzámolHenger() {
  var HengerM = parseFloat(document.getElementById("HengerM").value);
  var HengerR = parseFloat(document.getElementById("HengerR").value);
  var HengerTérfogat = 0;
  var HengerFelszín = 0;
  if (HengerM <= 0 || HengerR <= 0) {
    alert("Nullával és annál kisebb számmal nem lehet számolni");
  } else {
    HengerTérfogat = 3.14 * Math.pow(HengerR, 2) * HengerM;
    HengerFelszín = 2 * 3.14 * HengerR * (HengerR + HengerM);
    HengerFelszín = HengerFelszín.toFixed(2);
    HengerTérfogat = HengerTérfogat.toFixed(2);
    document.getElementById("HengerEredmenyTérfogat").value =
      HengerTérfogat + "cm3";
    document.getElementById("HengerEredmenyFelszín").value =
      HengerFelszín + "cm2";
  }
}
function SzámolKúp() {
  var kúpM = parseFloat(document.getElementById("kúpM").value);
  var KúpR = parseFloat(document.getElementById("kúpR").value);
  var KúpS = parseFloat(document.getElementById("kúpS").value);
  var KúpTérfogat = 0;
  var KúpFelszín = 0;
  if (kúpM <= 0 || KúpR <= 0 || KúpS <= 0) {
    alert("Nullával és annál kisebb számmal nem lehet számolni");
  } else if (KúpS > kúpM + KúpR) {
    alert("Ez a kúp nem szerkeszthető");
  } else {
    KúpTérfogat = (1 / 3) * 3.14 * Math.pow(KúpR, 2) * kúpM;
    KúpFelszín = 3.14 * KúpR * (KúpR + KúpS);
    KúpTérfogat = KúpTérfogat.toFixed(2);
    KúpFelszín = KúpFelszín.toFixed(2);
    document.getElementById("KúpEredmenyTérfogat").value = KúpTérfogat + "cm3";
    document.getElementById("KúpEredmenyFelszín").value = KúpFelszín + "cm2";
  }
}
