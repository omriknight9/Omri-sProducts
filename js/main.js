
var productsArr = [
{id: 1, name: 'Lenovo Laptop', image: './images/product.png', description: 'The Best Laptop', price: '5600'},
{id: 2, name: 'OnePlus 5T', image: './images/product.png', description: 'The Best Smartphone', price: '1600'},
{id: 3, name: 'Samsung Galaxy S9', image: './images/product.png', description: 'A Great Phone', price: '2900'},
{id: 4, name: 'Samsung TV', image: './images/product.png', description: '4k TV', price: '6600'},

];


build();

addProduct();

function addProduct() {
	$('.addBtn').click((event) => {
		var addDiv = $('<div>', {
			class: 'addDiv',
		}).appendTo($('.container'))

		var addNameLbl = $('<lable>', {
			class: 'addNameLbl',
			text: 'Name:',
		}).appendTo(addDiv);

		var addNameInput = $('<input>', {
			class: 'addNameInput',
			placeholder: 'Name',
		}).appendTo(addDiv);

		var addDescLbl = $('<lable>', {
			class: 'addDescLbl',
			text: 'Description:',
		}).appendTo(addDiv);

		var addDescInput = $('<input>', {
			class: 'addDescInput',
			placeholder: 'Description',
		}).appendTo(addDiv);

		var addPriceLbl = $('<lable>', {
			class: 'addPriceLbl',
			text: 'Price:',
		}).appendTo(addDiv);

		var addPriceInput = $('<input>', {
			class: 'addPriceInput',
			placeholder: 'Price',
			type: 'number'
		}).appendTo(addDiv);
		var addProductBtn = $('<button>', {
			class: 'btn addProductBtn',
			text: 'Add',
			click: ((e) => {
				pushToArr()
				console.log(productsArr)
				$('.addDiv').empty()
				build()
			})
		}).appendTo(addDiv)
	});
	


}

function pushToArr() {
	productsArr.push({
		id: productsArr.length + 1,
		name: $('.addNameInput').val(), 
		image: './images/product.png',
		description: $('.addDescInput').val(),
		price: $('.addPriceInput').val()
	})

}

function build() {
	$('.productDiv').empty();
	$.each(this.productsArr, (index, val) => {
		var productBox = $('<div>', {
			class: 'productBox',

		}).appendTo($('.productDiv'));

		var productDetails = $('<div>', {
			class: 'productDetails',
				click: ((e) => {
				editProduct(val.image, val.name, val.description, val.price);
			})
		}).appendTo(productBox);

		var productImg = $('<img>', {
			class: 'productImg',
			src: val.image,
		}).appendTo(productDetails);

		var productName = $('<p>', {
			class: 'productName',
			text: val.name
		}).appendTo(productDetails);

		var productDescription = $('<p>', {
			class: 'productDescription',
			text: val.description
		}).appendTo(productDetails);

		var productPrice = $('<p>', {
			class: 'productPrice',
			text: val.price
		}).appendTo(productDetails);

		var deleteBtn = $('<button>', {
			class: 'btn deleteBtn',
			text: 'Delete',
			click: ((e) => {
				console.log(e.target.parentElement);
				e.target.parentElement.remove();
				$('.editDiv').empty();
			})
		}).appendTo(productBox)
	});
}

function editProduct(img, name, description, price) {
	$('.editDiv').empty();

	var editBox = $('<div>', {
		class: 'editBox',
	}).appendTo($('.editDiv'))

	var editBoxImg = $('<img>', {
		class: 'editBoxImg',
		src: img
	}).appendTo($(editBox))

	var editBoxNameLbl = $('<lable>', {
		class: 'editBoxNameLbl',
		text: 'Name:'
	}).appendTo($(editBox))

	var editBoxNameInput = $('<input>', {
		class: 'editBoxNameInput',
		value: name
	}).appendTo($(editBox))

	var editBoxDescLbl = $('<lable>', {
		class: 'editBoxDescLbl',
		text: 'Description:'
	}).appendTo($(editBox))

	var editBoxDescInput = $('<input>', {
		class: 'editBoxDescInput',
		value: description
	}).appendTo($(editBox))

	var editBoxPriceLbl = $('<lable>', {
		class: 'editBoxPriceLbl',
		text: 'Price:'
	}).appendTo($(editBox))

	var editBoxPriceInput = $('<input>', {
		class: 'editBoxPriceInput',
		value: price,
		type: 'number'
	}).appendTo($(editBox))

	var saveBtn = $('<button>', {
		class: 'btn saveBtn',
		text: 'Save',
		click: ((e) => {
			console.log('***********Before Changes*****************')
			console.log(name);
			console.log(description);
			console.log(price);

			name = $('.editBoxNameInput').val();
			description = $('.editBoxDescInput').val();
			price = $('.editBoxPriceInput').val();

			console.log('***********After Changes*****************')
			console.log(name);
			console.log(description);
			console.log(price);

			build();
		})
	}).appendTo(editBox)
}


