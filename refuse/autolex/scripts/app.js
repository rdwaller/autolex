/* $(document).ready(function() {
  $("#text_form").submit(text_splitter);
});

function SplitText() {
  function text_splitter(e) {
    e.preventDefault();

    var entered_text = document.getElementById("enter_text").value;

    var stripped_text = entered_text.replace(/[^\w\s]/gi, '')
    console.log(stripped_text);

    var split_text = stripped_text.split(" ");
    console.log(split_text);
  };
}

*/

$(document).ready(function(){
  $("#btn1").click(function(){
      $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
      $("ol").append("<li>Appended item</li>");
  });
});

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));