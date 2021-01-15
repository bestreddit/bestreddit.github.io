import data from '../data/data.js'
    
    
    console.log(data)
    var products = "",
    makes = "",
    models = "",
    types = "";
    
    for (var i = 0; i < data.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      var make = data[i].make,
      model = data[i].model,
      type = data[i].type,
      Link = data[i].Link,
      rawLink = Link.replace("$", ""),
      rawLink = parseInt(rawLink.replace(",", "")),
      image = data[i].image;
    
      //create product cards
      products += "<div onclick='doalert(this)' class='card-viewer col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-Link='" + rawLink + "'><div class='product-inner text-center'><img src='" + image + "'><br />SubReddit: " + make + "<br />Type: " + type + "<br />Link:<a href="+Link+">Here</a></div></div>";
    
      //create dropdown of makes
      if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
        makes += "<option value='" + make + "'>" + make + "</option>";
      }
    

    
      //create dropdown of types
      if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
        types += "<option value='" + type + "'>" + type + "</option>";
      }
    }window.CP.exitedLoop(0);
    
    $("#products").html(products);
    $(".filter-make").append(makes);
    $(".filter-model").append(models);
    $(".filter-type").append(types);
    
    var filtersObject = {};
    
    //on filter change
    $(".filter").on("change", function () {
      var filterName = $(this).data("filter"),
      filterVal = $(this).val();
    
      if (filterVal == "") {
        delete filtersObject[filterName];
      } else {
        filtersObject[filterName] = filterVal;
      }
    
      var filters = "";
    
      for (var key in filtersObject) {
        if (filtersObject.hasOwnProperty(key)) {
          filters += "[data-" + key + "='" + filtersObject[key] + "']";
        }
      }
    
      if (filters == "") {
        $(".product").show();
      } else {
        $(".product").hide();
        $(".product").hide().filter(filters).show();
      }
    });
    
    //on search form submit
    $("#search-form").submit(function (e) {
      e.preventDefault();
      var query = $("#search-form input").val().toLowerCase();
    
      $(".product").hide();
      $(".product").each(function () {
        var make = $(this).data("make").toLowerCase(),
        model = $(this).data("model").toLowerCase(),
        type = $(this).data("type").toLowerCase();
    
        if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
          $(this).show();
        }
      });
    });
    $(".form-control").keypress(() => {
        let test_value=document.getElementById("form-imput").value
        if(test_value==""){}
    })
    //# sourceURL=pen.js
 