window.onload = function(event) {
	var tabLinks = document.querySelectorAll(".services-link"),
		tabContents = document.querySelectorAll(".services-text-item");
	var showTabs = function(e) {
		e.preventDefault();
		var getAttr = this.getAttribute('href');
		if(getAttr !== null) {
			var getTabContentNumber = this.getAttribute('data-tab-number');

		  	for (i = 0; i < tabContents.length; i++) {
		  	    tabContents[i].classList.remove('tab-open');
		  	}
		
			for (i = 0; i < tabLinks.length; i++) {
			  tabLinks[i].classList.remove('services-link-active');
			  tabLinks[i].setAttribute("href", "#");
			}
		
			this.classList.add('services-link-active');
			this.removeAttribute("href");
			tabContents[getTabContentNumber-1].classList.add("tab-open");
			return;
	  	}
	  	return;
	};
	for (i = 0; i < tabLinks.length; i++) {
	  tabLinks[i].addEventListener('click', showTabs);
	}
};