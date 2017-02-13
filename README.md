Simple List Search
===

A small tiny JavaScript file delivering a simple way to implement a "search" filtering a list of any kind shown on your site.
The list can be everything from a html ordered or unordered list, to a list of div's or a table with rows.
Since it searches thru the entire innerHTML of the list item, it can have child elements as well, even hidden.

### Usage

Include `simpleListSearch.js` on your page.

Init the search
```JavaScript
simpleListSearch.init({
  searchFieldId: "search",
  itemClass: "listitem"
});
```

### Init options

* `searchFieldId`, **require**, the ID of the input field used for searching.
* `itemClass`, **require**, the class that all the list items has, the items which will be shown and hidden.
* `displayType`, the type which should be set as css display type. Default is `block`, but this need to be set to `table-row` when filtering tables for instance.