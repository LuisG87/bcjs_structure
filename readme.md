<a href="blastcoding.com">blastcoding.com</a>

<h1>bcjs_structure</h1>
<p>this function helps you to crate an structure of html objects with javascript, lets see a little example of use</p>
  
 <h2>How to use</h2>
 <p>As simple as use another script of javascript just use <strong>js_structure</strong>
  
  ```
  <script src="js_structure"></script>
  ```
  now we have the script loaded, so lets use it, you can use it invoking bcjs_structure function that is an object.So if you wonna make an element like this
```
<div class="a_class">
    <button>submit</button>
  </div>
 ```
you can do that with this
```
bcjs_structure("div(class:a_class)>button[submit]");
```
As you can imagine you need to create a parent element, and append this as a child. There is a bad thing in this little script and is that you cant do this.

-element
  -childElement
  -childElement

but you can do this kind of things

>element(atributes)[text] > child(atributes)[text] > childofchild(atributes)[text]
    
you can easily select a child with an id and apend another child
