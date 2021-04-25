const orderDetails = document.getElementById("order_details");

document.getElementById("fill_button").addEventListener("click", async () => {
  const dataObject = await JSON.parse(orderDetails.value);
  console.log(dataObject);
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, dataObject);
  });
});
