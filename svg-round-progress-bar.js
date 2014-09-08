$(function() {
  var makeSVGRoundProgressBar = function($this) {
    var   progress = $this.attr("data-progress")
        , gradientStart = $this.attr("data-progress-gradient-start")
        , gradientStop = $this.attr("data-progress-gradient-stop")
        , background = $this.attr("data-progress-background")
        , strokeWidth = parseInt($this.attr("data-progress-stroke-width"))
        , size = parseInt($this.attr("data-progress-size"));

    var progressID = "progress-bar-" + Math.round(Math.random() * 10000);

    // Calculate Size
    if (progress > 99.9999) {
      progress = 99.9999;
    } else if (progress < 0) {
      progress = 0;
    }

    var degrees = ((progress / 100) * 360) - 90;

    var radians = (Math.PI * degrees) / 180;

    var offsetX = size / 2;
    var offsetY = strokeWidth;
    var radius = (size / 2) - strokeWidth;

    var x = Math.cos(radians) * radius + offsetX;
    var y = Math.sin(radians) * radius + (radius + offsetY);

    var arc = 0;

    if (progress > 50) {
      // Large Arc
      arc = 1;
    } else {
      // Small Arc
      arc = 0;
    }

    var path = [
      "M " + offsetX + ", " + offsetY,
      "A " + radius  + ", " + radius, 0, arc, 1, x, y
    ].join(",");

    // Render Template
    var svgTemplate = ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="',size,'px" height="',size,'px">'];

    if (gradientStart && gradientStop) {
      svgTemplate.push('<defs>',
                        '<linearGradient id="',progressID,'-gradient" x1="50%" y1="0%" x2="50%" y2="100%">',
                          '<stop offset="0%" style="stop-color:',gradientStart,';stop-opacity:1" />',
                          '<stop offset="100%" style="stop-color:',gradientStop,';stop-opacity:1" />',
                        '</linearGradient>',
                      '</defs>',
                      '<path id="',progressID,'" d="',path,'" fill="none" stroke="url(#',progressID,'-gradient)" stroke-width="',strokeWidth,'" />');
    } else if (background) {
      svgTemplate.push('<path id="',progressID,'" d="',path,'" fill="none" stroke="',background,'" stroke-width="',strokeWidth,'" />');
    } else {
      svgTemplate.push('<path id="',progressID,'" d="',path,'" fill="none" stroke="url(#',progressID,'-gradient)" stroke-width="',strokeWidth,'" />');
    }

    svgTemplate.push('</svg>');

    svgTemplate = svgTemplate.join("");

    $this.html(svgTemplate);
    var   $circle = $this.find("#" + progressID)
        , pathSize = $circle[0].getTotalLength();

    $circle.css("stroke-dasharray",pathSize);
    $circle.css("stroke-dashoffset",pathSize);

    setTimeout(function() {
      $circle.css("transition","stroke-dashoffset 1s ease-in-out");
      $circle.css("stroke-dashoffset",0);
    },0);
  };

  $(".progress").each(function() {
    makeSVGRoundProgressBar($(this));
  });
});
