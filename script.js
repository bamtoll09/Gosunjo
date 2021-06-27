window.onload = function() {
	var animList = [];
	var monitorImg = document.getElementsByClassName("monitorImg")[0];
	var homeTextImg = document.getElementsByClassName("homeTextImg")[0];
	var downArrow = document.getElementsByClassName("downArrow")[0];
	
	animList.push(monitorImg);
	animList.push(homeTextImg);
	animList.push(downArrow);
	
	for (var i=0; i<animList.length; ++i) {
		animList[i].classList.add("loaded");
	}
	
	downArrow.classList.add("arrowAnim");
	
	// Observer
	let target = document.querySelector('.processContent');
	let options = {
	  rootMargin: '0px',
	  threshold: 0.25
	}
	
	let callback = (entries, observer) => {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				for (var i=0; i<target.children[0].childElementCount; ++i) {
					target.children[0].children[i].classList.add("loaded");
				}
			}
		});
	}

	let observer = new IntersectionObserver(callback, options);
	observer.observe(target);
}

