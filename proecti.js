function click (){
    const day = document.getElementById("good").value.toLowerCase();
     let activity;

switch (day) {
case "ორშაბათი":
 activity = "დაიწყე ორშაბათს ახალი აქტივობებბი და გახდი პოზიტიური"
break;

case "სამშაბათი":
activity = "ეს დღე დაუთმე გონებრივ აზროვნებას"
break;

case "ოთხშაბათი":
activity = "ეს დღე დაუთმე მეგობრებთან გართობა"
break;

case "ხუთშაბათი":
activity = "ეს დღე დაუთმე მოგზაურობას"
break;

case "პარასკევი":
activity = "გააგრძელე ისევ ვარდიში"
break;

case "შაბათი":
activity = " ეს დღე დასვენების დღეა"
break;


case "კვირა":
activity = "ეს დღე დაუთმე მუშაობას"
break;

default:
activity = "ჰმმ რაღას არ მეცნობა ეს დღეები"

}



if (["შაბათი", "კვირა"].includes(day)){
  activity += "ეს დღეები არის დასვენების დღე!";

} else if (["ორაბათი", "სამშაბათი","ოთხშაბათი","პარასკევი","კვირა"].includes(day)) {
    activity += "ეს დღეები არის მუშაობის და ვარდიშის დღეები"
}
document.getElementById("text").textContent = activity;
}





const btn = document.getElementById("click")
btn.addEventListener('click', () =>  {
    click();
    
})











