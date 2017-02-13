var simpleListSearch = {
  init: function(options) {
    simpleListSearch.searchField = document.getElementById(options.searchFieldId);
    simpleListSearch.items = document.getElementsByClassName(options.itemClass);
    simpleListSearch.displayType = options.displayType || "block";
    simpleListSearch.setEventListener();
  },
  setEventListener: function() {
    simpleListSearch.searchField.addEventListener("keyup", function(event) {
      var value = event.target.value;
      if(value.length < 3) {
        simpleListSearch.showAllListItems();
      } else {
        simpleListSearch.filterListItems(value);
      }
    });
  },
  showAllListItems: function() {
    var listItems = simpleListSearch.items;
    for (var item = 0; item < listItems.length; item++) {
      listItems[item].setAttribute("style", "display:" + simpleListSearch.displayType + ";");
    }
  },
  filterListItems: function(value) {
    var listItems = simpleListSearch.items;
    for (var item = 0; item < listItems.length; item++) {
      if (listItems[item].innerHTML.toLowerCase().replace(/<\/?[^>]+(>|$)/g, " ").indexOf(value) === -1) {
        listItems[item].setAttribute("style", "display:none;");
      } else {
        listItems[item].setAttribute("style", "display:" + simpleListSearch.displayType + ";");
      }
    }
  }
};