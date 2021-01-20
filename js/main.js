import data from '../data/data.js'
    
    
    console.log(data)
    var products = "",
    makes = "",
    models = "",
    types = "";
    let filter_array=[];
    
    for (var i = 0; i < data.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      var make = data[i].make,
      model = data[i].model,
      type = data[i].type,
      Link = data[i].Link,
      rawLink = Link.replace("$", ""),
      rawLink = parseInt(rawLink.replace(",", "")),
      image = data[i].image;
    
      //create product cards
      products += "<div  class='card-viewer  col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-Link='" + rawLink + "'><div class='product-inner text-center'><br />SubReddit : " + make + "<br /><br>Tags : <span class=tag-type>" + type + "</span><br /><br><div class='tag'><a href='https://www.reddit.com"+Link+"' rel=noreferrer>"+Link+"</a></div></div></div>";
    

    

    
      //create dropdown of types
      if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
        if(filter_array.includes(type))
        {
          types += "<option value='" + type + "'>" + type + "</option>";
        }
          filter_array.push(type)
         
       
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

 