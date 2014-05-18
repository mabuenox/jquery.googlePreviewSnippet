jquery.googlePreviewSnippet
===========================

googlePreviewSnippet is a jQuery plugin that creates a simulation preview of Google's search engine results pages (SERPs)

How to use
==========

Add jQuery, the script file and css file to the document, and call plugin over an html element:

```javascript
$(document).ready(function(){
  $("#snippet").serpSnippet({
    title: "This is an Example of a Title Tag that is Seventy Characters in Length",
		url: "www.example.com/example",
	  description: "Here is an example of what a snippet looks like in Google's SERPs. The content that appears here is usually taken from the Meta Description tag if relevant.",
	  search: ""
	});
});
```
The "search" option remarks on bold the word or words passed like Google. This is important because title long change and some words could be truncated on the result snippet.

