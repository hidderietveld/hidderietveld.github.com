var coll = document.getElementsByClassName("collapsible");
  var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          collapibles = document.getElementsByClassName("content")
          for (i = 0; i < collapibles.length; i++) {
            collapibles[i].style.display = "none";
    }
    content.style.display = "block";
    }
    });
    }
    function openMenu(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
    }
