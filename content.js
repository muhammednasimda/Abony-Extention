console.log("hhhhhhi");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const address = document.getElementsByName("address")[0];
  const phoneNumber = document.getElementsByName("phoneNumber")[0];
  const contactName = document.getElementsByName("contactName")[0];
  const pincode = document.getElementsByName("pincode")[1];
  const packageType = document.getElementsByName("packageType");
  const orderNumber = document.getElementsByName("orderNumber")[0];
  const description = document.getElementsByName("description")[0];
  const commodity = document.getElementsByName("commodity")[0];
  const tax = document.getElementsByName("tax")[0];
  const quantity = document.getElementsByName("quantity")[0];
  const weight = document.getElementsByName("weight")[0];
  const category = document.getElementsByName("category")[0];

  pincode.focus();
  document.execCommand("insertText", false, request.pincode);

  contactName.focus();
  document.execCommand("insertText", false, request.name);

  address.focus();
  document.execCommand("insertText", false, request.address);

  phoneNumber.focus();
  document.execCommand("insertText", false, request.phone);

  if (request.type === "COD") packageType[0].click();
  else packageType[1].click();

  orderNumber.focus();
  document.execCommand("insertText", false, request.id);

  description.focus();
  document.execCommand("insertText", false, request.description);

  commodity.focus();
  document.execCommand("insertText", false, request.price);

  tax.focus();
  document.execCommand("insertText", false, request.tax);

  quantity.focus();
  document.execCommand("insertText", false, request.quantity);

  category.focus();
  document.execCommand("insertText", false, request.category);

  weight.focus();
  document.execCommand("insertText", false, request.weight);
});
