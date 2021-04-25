const orderDetails = document.getElementById("order_details");

document.getElementById("fill_button").addEventListener("click", function () {
  varuserinfo = JSON.parse(orderDetails.value);
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      id: 101,
      name: "start",
      address: "vavad",
      phone: 9400410406,
      pincode: 673571,
      type: "BANK",
      price: 1299,
    });
  });
});

function changeValue() {
  console.log("hai");
}
