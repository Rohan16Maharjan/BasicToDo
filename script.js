// crud
let index = '';

showData();

function createData() {
	let input = document.getElementById('task').value;
	if (input == '') {
		// input null
		alert('Please add the task!!');
	} else {
		if (index === '') {
			// user add the task
			let arr = JSON.parse(localStorage.getItem('items'));
			if (arr === null) {
				// new array
				let data = [input];
				localStorage.setItem('items', JSON.stringify(data));
			} else {
				// push the data to existing storage
				arr.push(input);
				localStorage.setItem('items', JSON.stringify(arr));
			}
		} else {
			// user came for edit
			let arr = JSON.parse(localStorage.getItem('items'));
			arr[index] = input;
			localStorage.setItem('items', JSON.stringify(arr));
			index = '';
		}
		// to make the input tag empty
		document.getElementById('task').value = '';
		showData();
		document.getElementById('adding').value = 'Add';
		document.getElementById('task').style.outline = '1px solid #63e6be';
	}
}

function showData() {
	let arr = JSON.parse(localStorage.getItem('items'));
	if (arr != null) {
		let html = '';
		arr.forEach((item, i) => {
			html =
				html +
				`<li class='list' >${arr[i]}
				<div>
                <a class='edit' href='javascript:void(0)' onclick='editTask(${i})'><i class="fa-solid fa-pen-to-square" style="color: #63E6BE;"></i></a>
                &nbsp;
                <a href='javascript:void(0)' onclick='deleteTask(${i})'><i id="trash" class="fa-solid fa-trash" style="color:#63E6BE;" ></i></a>
				</div>  </li>`;
		});
		document.getElementById('text').innerHTML = html;
	}
}

function deleteTask(rid) {
	let arr = JSON.parse(localStorage.getItem('items'));
	arr.splice(rid, 1);
	localStorage.setItem('items', JSON.stringify(arr));
	showData();
}

function editTask(rid) {
	index = rid;
	// alert('hello');
	document.getElementById('adding').value = 'Submit';
	let arr = JSON.parse(localStorage.getItem('items'));
	document.getElementById('task').value = arr[rid];
	document.getElementById('task').style.outline = '1px solid red';
}

function deleteAll() {
	localStorage.clear();
	document.getElementById('text').innerHTML = ' ';
}
