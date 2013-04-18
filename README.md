jquery-zoomme
==================

jQuery plugin add map-style zoom to elements (Mouse-scroll-zoom and mouse-drag-pan). The project is under development.

## How to use it
Currently depends on [jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel) and jquery-UI.

Below is an example that creates a zoomable image file.

```html
<div id="zoomme-container" style="position: relative; overflow: hidden; height: 400px; width: 700px;">
	<div id="zoomme" style="position: absolute;">
		<img src="image" style="width: 100%;" />
	</div>
</div>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
<script src="js/jquery.mousewheel.js"></script>
<script src="js/jquery.zoomme.js"></script>
<script>
	$(document).ready(function() {
		$("#zoomme-container").zoomme('zoomme');
	});
</script>
```

## Demo:
- [Demos](http://barntarnst.com/zoomme/demo.html)

## Compatability:
- Works in ie8+
