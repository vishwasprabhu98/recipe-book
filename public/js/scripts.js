const getCategoriesArray = () => {
	arr = ['starters', 'maincourse', 'deserts', 'juices'];
	return arr;
}

const allDishes = () => {
	dishes = [
		{
			id: 0,
			type: "nonveg",
			category: "starter",
			title: "Kabab",
			ingredients: "300 gms chicken,2 tbsp of any pickle,Salt 2taste,1 tsp ginger garlic paste, 5 ml lemon juice, 1/4 tsp turmeric powder, 1/2 tsp chilly powder, 1/2 tsp coriander powder, 1/4 tsp garam masala powder",
			description: "Marinate the chicken with all the above ingredients for min 30 mins, Deep fry till the chicken pieces are cooked.",
			image: "img/kabab.jpg"
		},
		{
			id: 1,
			type: "veg",
			category: "starter",
			title: "Panner Tikka",
			ingredients: "Paneer: 400 grams,Red Onion: 1,Bell pepper (Any color): 1,Tomato: 1,Thick yogurt: 4 Tablespoons,Vinegar: 1 tablespoon,Tandoori BBQ masala: 2 Teaspoons,Kashmiri Chili powder: 2 Teaspoons,Turmeric powder: 1 Teaspoon,Salt: 1 Teaspoon/as per taste,Chaat masala: 1 Teaspoon,Ginger paste: 1 Teaspoon,Garlic paste: 1 Teaspoon,Cooking oil: 1 Teaspoon (For greasing)",
			description: "Cut the Paneer into thick rectangles, Soak the Paneer pieces in hot water for about 10 minutes. Cut the Bell Pepper & Onion into large chunks. Cut the Tomatoes in quarters & deseed it. Flake the Onions., Keep aside. Prepare the marinade by combining the yogurt, vinegar, ginger paste, garlic paste, salt, turmeric, chili powder & tandoori masala. Drain the water. Prick the paneer pieces with the help of a toothpick. Drain the water. Prick the paneer pieces with the help of a toothpick. Add the marinade. Mix well to coat. Keep covered until you are ready to grill. Preheat Electric Grill or heat a Grill Pan. I used an Indoor Electric Grill for the Paneer & a Grill Pan for the Veggies. Grease the plates of the Grill &/or the Grill Pan with the cooking oil. Cook for 5-7 minutes or until grill marks appear on the Tikkas & the Veggies are slightly charred. Sprinkle Chaat Masala. Enjoy hot with Green Chutney!",
			image: "img/panner-tikka.jpg"
		},
		{
			id: 2,
			type: "nonveg",
			category: "starter",
			title: "Chicken 65",
			ingredients: "500gm Boneless chicken, 1 tbsp Ginger garlic paste, 1/2 tbsp Green chilli paste1 tbsp Red chilli powder, 1/4 tsp Turmeric powder, 1/2 tbsp Coriander and cumin powder, 1/2 tbsp Garam masala, 1 tsp chaat masala, 1 tbsp Lemon juice, 1/4 tsp Red orange food colour, 1 tbsp Corn flour Rice flour, 1 /2 tsp Salt, 1 /4 cup Oil, 10 - 15 Curry leaves",
			description: "In a bowl take all ingredients except oil and curry leaves. Mix it well. Add 1 tbsp oil to it. Keep it aside for 5 - 6 hours. In a pan take oil and add marinated chicken to it. Shallow fry it. When chicken cooked completely add curry leaves to it. Serve with Scezwan chutney , lemon slices and onion rings.",
			image: "img/chicken-lolipop.jpg"
		},
		{
			id: 3,
			type: "nonveg",
			category: "starter",
			title: "Malop Chicken Tikka",
			ingredients: "Chicken boneless 500 gms, Roasted gram flour 2 tbsp, Corn Flour 1 tsp, Ginger garlic and green Chilli paste 3 tbsp, Hung Curd 4 tbsp, Whole Spices Masala 2 tbsp, Kasturi Methi 3 tsp, Kashmiri Red Chilli Powder 1 tbsp, turmeric powder 1 tsp, Salt to taste 1 tsp, Butter 4 tbsp",
			description: "Clean the chicken and keep it aside. Remove the moisture from them using disposable tissues. Or set them side for a while to take away the dripping water. Now let's make the whole spices powder(can use shop brought gram Masala too) 4cloves 2 bay leaf 6 green cardamom 2 black cardamom 1/4 tsp nutmeg powder Javetri 1 petal Coriander 1tsp Cumin 1 tsp Pepper corn 8 Roast dry on Skillet and grind to fine powder. Now add all ingredients except butter to chicken and marinate for 2 hours. After 2hours thread them in metal or wooden Skewers. Place your Skillet,once heated grease with little butter and place those skewers with marinated chicken. And cook till it turn Golden brown in color by Turing both all sides and applying butter occasionally in all sides and Sprinkle kasturi Meethi. And cook till it turn Golden brown in color by Turing both all sides and applying butter occasionally in all sides and Sprinkle kasturi Meethi. Now take hand grill stand and Roast cooked chicken from all sides...Which give a smoky flavours to chicken tikka like restaurant",
			image: "img/chickentikka.jpg"
		},
		{
			id: 4,
			type: "veg",
			category: "maincourse",
			title: "Palav with Raita",
			ingredients:"Rice 2 cups, Chop gobhi florets 1 cups, Chop carrot 1 nos, Chop beans 1 cups, sweet corn 1/2 cups, Peas 1 cups, potato 1 nos, Sliced onion 2 nos, Chop garlic 1 tsp, Jeera 1 tsp, Cloves 2 nos, Peppercorn 1/2 tsp, Brown elaichi 1 nos, Cinnamon stick 1 nos, Hing 2 pinch, Red chilli 1/2 tsp, Haldi 2 pinch, Salt.as taste 1 tsp, Oil 2 tsp. For Raita tomatoes, onion, curd, salt, chillies and cucumber.",
			description: "Take a bowl add rice washed and soaked. Chop veggies. Whole masala coarsely grind. Take a wok add oil then oil heat add hing and jeera crackle then add garlic and onion saute add coarsely grind masala salt and red chilli saute . Then add veggies and covered for 5 minutes . Then veggies half done soft add rice and water cooked rice. Take a bowl and add finely chopped tomatoes, onion, chillies, cucumber and add curd, salt as per taste and mix well. After 10 minutes rice cooked and serve along with the Raita.",
			image: "img/palav.jpg"
		},
		{
			id: 5,
			type: "nonveg",
			category: "maincourse",
			title: "Chicken Butter Masala",
			ingredients:"Chicken 1/2 kg, oil 4 tsp, Butter 100 gram, ginger garlic paste 2 tsp, Tomato 1 medium size, Red chilli 2 tps, Tumeric 2 tsp, Curry powder 2 tsp, Kasoori mathi 4 tsp, Fresh cream 300 gram, Ginger 1 pieces, Red chilli flakes 1 tsp",
			description: "Heat oil in a pan. Add ginger garlic paste. Then add chicken and butter. fry upto it colour change. Add blended tomato stir 3 mins. Add chilli powder,tumeric, salt and curry powder upto oil separate stir well. Add kastoori mathi in chicken masala. Add giner pieces and chilli flakes cover for few mins. Ready to serve",
			image: "img/chickenbuttermasala.jpg"
		},
		{
			id: 6,
			type: "veg",
			category: "dessert",
			title: "Rasmalai",
			ingredients:"Milk 1 litre, Sugar 4 tsp, Cardamom 1 pinch, Malai chap 6 piece",
			description: "Make rabri with milk, milk powder, sugar and custard powder. Sprinkle over malai chops. Rasmalaii is ready.",
			image: "img/rasmalai.jpg"
		},
		{
			id: 7,
			type: "veg",
			category: "dessert",
			title: "Shahi Tukda",
			ingredients:"3 bread slice, 2 tbsp rabri, 1/4 cup sugar syrup, 1 tbsp chopped badam, 1 spoon ghee",
			description: "Cut bread in heart shape cutter. Heat non stick pan and grease it with ghee. Roast it golden brown from both sides. Arrange slice on a plate,pour syrup on it. Apply rabri on bread slice and sprinkle chopped nuts over it and serve it",
			image: "img/shahitukda.jpg"
		},
		{
			id: 8,
			type: "veg",
			category: "juice",
			title: "Pineapple Juice",
			ingredients:"Pineapple (small one) 1 nos, Water 2 cups, Sugar 4 tbsp, Salt 1 tsp",
			description: "Wash and peel pineapples. Mix it with mixer and to form a puree. filter it and move to a bowl. Stir in some sugar,and also add some salt. serve it cool",
			image: "img/pineapllejuice.jpg"
		},
		{
			id: 9,
			type: "veg",
			category: "juice",
			title: "Lemon Juice",
			ingredients:"water 500 ml, lemon 1 nos, salt 1 pinch, green chillies 2 nos",
			description: " Take water in a jar and slit chillies in between. Keep chillies in water for few minutes. Squeeze some lemon juice. Remove chilli and add some salt. Stir it well. Garnish with lemon n chilli and drink in summers. It is best drink to cut calories in summer as chilly keeps body cool.",
			image: "img/lemonjuice.jpg"
		}
	]
	return dishes;
}

$(document).ready(function() {

	$('.carousel').carousel( { interval : 2000 });
	$(".carousel").carousel('cycle');

	function showitems(val) {
		let ids = getCategoriesArray();

		ids.forEach(element => {
			$('#' + element).hide();
		});

		$('#' + val).show();
	}

	//hide all
	showitems();

	$('#1').click( function() {
		showitems("starters");
	});

	$('#2').click( function() {
		showitems("maincourse");
	});

	$('#3').click( function() {
		showitems("deserts");
	});

	$('#4').click( function() {
		showitems("juices");
	});
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id_num = urlParams.get('id');


const dish = allDishes();


function displayFilter(category) {
	let listDish = "<ul class=\"list-unstyled\">";
	dish.forEach(element => {
		if(element.category === category){
			listDish += "<li class=\"mt-2\"><a href=\"recipes.html?id="+element.id+"\">"+element.title+"</a></li>";
		}
	});
	listDish += "</ul>";
	document.getElementById('enter-field').innerHTML = listDish;
}


function searchResults() {
	let i = 0;
	const searched = document.getElementById('searchField').value;
	if(searched === "") {
		document.getElementById('search-results').innerHTML = "Enter Valid values";
	}
	else{
		let searchresults = "";
		for(let index = 0; index < dish.length; index++){
			let title = dish[index].title;
			const lowertitle = title.toLowerCase();
			const searchedlower = searched.toLowerCase();
			if(lowertitle.includes(searchedlower)){
				if(i == 0){
					searchresults += "<ul class=\"list-unstyled\">";
					searchresults += "<li><a href=\"recipes.html?id="+dish[index].id+"\">"+dish[index].title+"</a></li>";
					i=1;
				}else{
					searchresults += "<li><a href=\"recipes.html?id="+dish[index].id+"\">"+dish[index].title+"</a></li>";
				}
			}
		}
		if(i == 0){
			document.getElementById('search-results').innerHTML = "No Results";
		}
		else{
			searchresults += "</ul>";
			document.getElementById('search-results').innerHTML = searchresults;
		}
	}
}

let innerstring = "";
var shownarray = [];

for (let i = 0; i < 4; i++) {
	
	var x = Math.floor(Math.random() * 10);
	if(x == id_num || shownarray.includes(x)){
		i--;
		continue;
	}
	shownarray.push(x);
	innerstring += "<br>";
	innerstring += "<div class=\"row\" id=\""+dish[x].id+"\" onclick=\"displaybyclick('"+ dish[x].id +"')\" style=\"cursor: default;\">";
	innerstring +=	"<div class=\"col-6\"><img width=\"100%\" src=\""+dish[x].image+"\" alt=\"Card image cap\"></div>";
	innerstring +=	"<p class=\"col-6\"><b>" + dish[x].title + "</b></p>";
	innerstring += "</div>";
}
document.getElementById("featuredsection").innerHTML = innerstring;


function displaybyclick(idnumber) {
	location.replace("recipes.html?id=" + idnumber);
}


const image = "<img width=\"100%\" src=\""+dish[id_num].image+"\">"
if(dish[id_num].type === "nonveg"){
	document.getElementById("title").innerHTML = dish[id_num].title + "<h5><span class=\"badge badge-pill badge-danger\">Non Veg</span></h5>";				
}else{
	document.getElementById("title").innerHTML = dish[id_num].title + "<h5><span class=\"badge badge-pill badge-success\">Veg</span></h5>";
}
document.getElementById("image").innerHTML = image;
document.getElementById("materials").innerHTML = "<h4>Ingredients Required</h4>" + dish[id_num].ingredients;
document.getElementById("description").innerHTML ="<h4> Making Procedure </h4>" + dish[id_num].description;





