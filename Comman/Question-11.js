//: What is the purpose of void 0

/* Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. When you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression. */

<a href="JavaScript:void(0);" onclick="alert('Well done!')">
  Click Me
</a>;
