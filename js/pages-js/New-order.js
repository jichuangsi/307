layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
	table.render({
		elem: '#product',
		method: "get",
		async: false,
		url: "../json/Headwear1.json",
		//		contentType: 'application/json',
		//		headers: {
		//			'accessToken': getToken()
		//		},
		page: true,
		cols: [
			[{
					field: 'id',
					title: '序号',
					type: 'numbers'
				},
				{
					field: 'number',
					title: '编号'
				},
				{
					field: 'classification',
					title: '品名'
				},
				{
					field: 'name',
					title: '品名'
				},
				{
					field: 'money',
					title: '价格'
				},
				{
					field: 'supplier',
					title: '供应商'
				},
				{
					field: 'userNumber',
					title: '客户编号'
				},
				{
					field: 'appearance',
					title: '加入订单',
					toolbar: "#order_add"
				}
			]
		],
		toolbar: "#product_add",
		loading: true,
		parseData: function(res) {
			var arr;
			var code;
			var total;
			if(res.code == "0010") {
				code = 0;
				arr = res.data.list;
				total = res.data.total;
			}
			return {
				"code": 0,
				"msg": res.msg,
				"count": total,
				"data": arr
			};
		}
	})

	table.on('row(product)', function(data) {
		var param = data.data;
		//renderTable();
		form.val('test2', {
			"id": param.id,
			"number": param.number,
			"name": param.name,
			"userNumber": param.userNumber
		})
	});
	var arr = {
		"id": "",
		"number": "",
		"name": "",
		"userNumber": "",
		"userProductNmber": "",
		"count": ""
	}
	var list = [];
	form.on('submit(orderadd)', function(data) {
		var param = data.field;
		arr.id = param.id;
		arr.number = param.number;
		arr.name = param.name;
		arr.userNumber = param.userNumber;
		arr.userProductNmber = param.userProductNmber;
		arr.count = param.count;
		list.push(arr);
		console.log(list)
		getTable(list);
		layer.close(index);
	})

	function getTable(list) {
		$("#order").empty();
		var divContent = "";
		var count=1;
		var str = $("#order").find('tbody').length;
		divContent += '<thead>';
		divContent += '<tr>';
		divContent += '<th>序号</th>';
		divContent += '<th>编号</th>';
		divContent += '<th>品名</th>';
		divContent += '<th>客户编号</th>';
		divContent += '<th>客户产品编号</th>';
		divContent += '<th>数量</th>';
		divContent += '</tr>';
		divContent += '</thead>';
		divContent += '<tbody>';
		for(var i = 0; i < list.length; i++) {
			divContent += '<tr>';
			divContent += '<td>' +  count+ '</td>';
			divContent += '<td>' + list[i].number + '</td>';
			divContent += '<td>' + list[i].name + '</td>';
			divContent += '<td>' + list[i].userNumber + '</td>';
			divContent += '<td>' + list[i].userProductNmber + '</td>';
			divContent += '<td>' + list[i].count + '</td>';
			divContent += '</tr>';
			count++;
		}
		divContent += '</tbody>';
		$("#order").append(divContent);

	}

	/*	renderTable=function(data){
			console.log(data)
			table.render({
			elem: '#order',
			method: "get",
			async: false,
			url: data,
			//contentType: 'application/json',
			page: false,
			cols: [
				[{
						field: 'id',
						title: '序号',
						type: 'numbers'
					},
					{
						field: 'number',
						title: '编号'
					},
					{
						field: 'name',
						title: '品名'
					},
					{
						field: 'userNumber',
						title: '客户编号'
					},
					{
						field: 'userProductNmber',
						title: '客户产品编号'
					},
					{
						field: 'count',
						title: '数量'
					}
				]
			],
			loading: true,
			parseData: function(data) {
				var arr;
				var code;
				var total;
				if(res.code == "0010") {
					code = 0;
					arr = res.data.list;

					total = res.data.total;
				}
				return {
					"code": 0,
					"msg": res.msg,
					"count": total,
					"data": data
				};
			}
		})
		}*/
});