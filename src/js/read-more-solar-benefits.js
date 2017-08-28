function readMore(e) {
  var mainInfoContainer = e.parentNode.parentNode.children[1],
  	bodyInfo = mainInfoContainer.children[2];

  if (window.getComputedStyle(bodyInfo, 'display').display === 'none') {
  	bodyInfo.style.display = 'block';
  } else {
  	bodyInfo.style.display = 'none';
  }
}

function resetValues () {
	document.querySelectorAll('.why-layer-info').forEach(function (layer) {
		if (layer.id) {
			layer.style.display = 'none';		
		}
	});

}