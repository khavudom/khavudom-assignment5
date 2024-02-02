export const formSubscription = document.querySelector("form");
export const formInputValue = formSubscription.querySelectorAll("div>input");

export function disountFuc() {
  if (formInputValue[0].value != "" && formInputValue[1].value != undefined) {
    console.log("true");
    return true;
  } else return false;
}
