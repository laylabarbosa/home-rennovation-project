var kitchen = ["images/p-kitchen/before_after.jpeg", "images/p-kitchen/before_after6.jpeg", "images/p-kitchen/before_after6.jpg", "images/p-kitchen/before_after2.jpeg","images/p-kitchen/before_after7.jpeg"];
var bath = ["images/p-bathroom/before_after3.jpg","images/p-bathroom/before_after4.jpeg","images/p-bathroom/before_after5.jpg","images/p-bathroom/before-after8.jpeg","images/p-bathroom/before-after9.jpeg"];
var house = ["images/p-wholehouse/before_after1.jpg","images/p-wholehouse/before-after.jpeg","images/p-wholehouse/before-after10.jpeg","images/p-wholehouse/before-after11.jpeg","images/p-wholehouse/before-after12.jpeg","images/p-wholehouse/construction_kitchen.jpg"];
var currentIndex = 0;

		function changeKitchen(direction) {
			var image = document.getElementById("myKitchen");
			if (direction === "next") {
				currentIndex = (currentIndex + 1) % kitchen.length;
			} else if (direction === "prev") {
				currentIndex = (currentIndex - 1 + kitchen.length) % kitchen.length;
			}
			image.src = kitchen[currentIndex];
		}


		function changeBath(direction) {
			var image = document.getElementById("myBath");
			if (direction === "next") {
				currentIndex = (currentIndex + 1) % bath.length;
			} else if (direction === "prev") {
				currentIndex = (currentIndex - 1 + bath.length) % bath.length;
			}
			image.src = bath[currentIndex];
		}

		function changeHouse(direction) {
			var image = document.getElementById("myHouse");
			if (direction === "next") {
				currentIndex = (currentIndex + 1) % house.length;
			} else if (direction === "prev") {
				currentIndex = (currentIndex - 1 + house.length) % house.length;
			}
			image.src = house[currentIndex];
		}

		document.getElementById("quote-btn").onclick = function () {
			location.href = "contact.html"
		  }



