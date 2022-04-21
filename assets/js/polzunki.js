

  const MyRange = () => {
    sliders();

    function sliders() {
      var tracks = ["-webkit-slider-runnable-track"];
      var thumbs = ["-webkit-slider-thumb"];

      initSliders();
      var sliderGroups = document.querySelectorAll(
          "section[data-type=slider-group]"
      );
      // for (var i = 0; i < sliderGroups.length; i += 1) {
      //   initSliderGroup(sliderGroups[i]);
      // }

      function initSliders() {
        var sliders = document.querySelectorAll("input[type=range]");
        var testAndWK = window.getComputedStyle(
            sliders[0],
            "::-webkit-slider-thumb"
        ).background;
        for (var i = 0; i < sliders.length; i += 1) {
          if (!testAndWK) {
            sliders[i].style.WebkitAppearance = "slider-horizontal";
          }

          // prepare a <style> tag that will be used by handleSlider()

          var st = document.createElement("style");
          st.id = "s" + sliders[i].id;
          document.head.appendChild(st);

          sliders[i].addEventListener(
              "input",
              function () {
                handleSlider(this);
              },
              false
          );
          sliders[i].addEventListener(
              "change",
              function () {
                handleSlider(this);
              },
              false
          );

          sliders[i].output = sliders[i].parentNode.querySelector("output");
          var dataSpan = sliders[i].parentNode.querySelector("span");
          if (dataSpan && dataSpan.getAttribute("data-labels")) {
            sliders[i].values = [];
            var values = dataSpan.getAttribute("data-labels").split(";");
            for (var j = 0; j < values.length; j += 1) {
              sliders[i].values.push(values[j]);
            }
          }

          if (sliders[i].value * 1) {
            handleSlider(sliders[i]);
          }
        }
      }

      function handleSlider(slider) {

        let max = slider.getAttribute("max")

        var gradValue = Math.round(
            (slider.value / max) * 100
        );

        let newValue = gradValue * 1.6 - 61
        var grad =
            "linear-gradient(to right," +
            "#B18223 " +
            newValue +
            "%, #ECECEC " +
            newValue +
            "%)";
        var rangeSelector = "input[id=" + slider.id + "]::";
        var styleString = "";
        var printedValue = slider.values
            ? slider.values[slider.value]
            : slider.value;
        slider.output.innerHTML = printedValue;

        for (var j = 0; j < tracks.length; j += 1) {
          styleString +=
              rangeSelector + tracks[j] + "{background: " + grad + ";} ";
        }
        document.getElementById("s" + slider.id).textContent = styleString;

        let output = document.querySelector('.calculator-section__double')
        output.value = document.querySelector('.calculator-section__number output').innerHTML
        output.setAttribute("disabled", "disabled")
        output.style.cssText = `left: ${newValue}%`
      }
    }


  };


var sliderGroups = document.querySelectorAll(
    "section[data-type=slider-group]"
);
if(sliderGroups.length){
  MyRange();
}
