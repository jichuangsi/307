layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
	
var id=sessionStorage.getItem('jsonId');
	var toUrl = "../json/Headwear1.json"
	if(id == "1") {
		toUrl = "../json/Headwear1.json"
	} else if(id == "2") {
		toUrl = "../json/Headwear2.json"
	} else if(id == "3") {
		toUrl = "../json/material1.json"
	}else if(id == "4") {
		toUrl = "../json/material2.json"
	}else if(id == "5") {
		toUrl = "../json/Sundry2.json"
	}else if(id == "6") {
		toUrl = "../json/Sundry1.json"
	}else if(id == "7") {
		toUrl = "../json/Jewelry1.json"
	}else if(id == "8") {
		toUrl = "../json/Jewelry2.json"
	}
	
	
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		url: toUrl,
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
					title: '客户产品编号'
				},
					{
					field: 'classification',
					title: '类别'
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
					title: '供货商'
				},
				{
					field: 'count',
					title: '数量'
				},
				{
					field: 'pic',
					title: '图片',
					templet: '#img',
					align: 'center',
					style: 'height:100px;'
				},
				{
					field: 'appearance',
					title: '查看物料',
					align: 'center',
					toolbar: "#productr_see"
				}
			]
		],
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
	table.on('row(demo)', function(data) {
		var param = data.data;
		$(document).on('click', '#look', function() {
			renderTable();
		})
	});
	renderTable = function() {
		table.render({
			elem: '#materiel',
			method: "get",
			async: false,
			url: "../json/test1.json",
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
						title: '物料编号'
					},
					{
						field: 'name',
						title: '物料名称'
					},
					{
						field: 'color',
						title: '物料颜色'
					},
					{
						field: 'specifications',
						title: '物料规格'
					},
					{
						field: 'charge',
						title: '负责人'
					},
					{
						field: 'purchase',
						title: '采购小组'
					}
				]
			],
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
	}

});