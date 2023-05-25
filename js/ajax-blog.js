"use strict";

$(function () {
  $.get("data/blog.json").done(function (data) {
    $.each(data, function () {
      $("#posts").append(
        `<div class="card m-5" style="width: 18rem;">
  <div class="card-body">

  <div class="card-body">
  <img src="../img/${this.image}" class="card-img-top" alt="...">
    <p class="card-text">${this.content}</p>
    <p>Catagories: ${this.categories}</p></p>
  </div>
</div>
  
  </div>
</div>`
      );
    });
  });
});
