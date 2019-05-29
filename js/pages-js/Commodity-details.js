layui.use(['table', 'form', 'element'], function() {
	var element = layui.element;
	var table = layui.table;
	var form = layui.form;

	function UrlSearch() { //获取url里面的参数
		var name, value;
		var str = location.href; //取得整个地址栏
		var num = str.indexOf("?")
		str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
		var arr = str.split("="); //各个参数放到数组里
		return arr[1];
	}
	var id = UrlSearch();
	//setVal(id);
	var jsonId=sessionStorage.getItem('jsonId');
	var toUrl = "../json/Headwear1.json";
	if(jsonId == "1") {
		toUrl = "../json/Headwear1.json"
	} else if(jsonId == "2") {
		toUrl = "../json/Headwear2.json"
	} else if(jsonId == "3") {
		toUrl = "../json/data3.json"
	}else if(jsonId == "4") {
		toUrl = "../json/material2.json"
	}else if(jsonId == "5") {
		toUrl = "../json/Sundry2.json"
	}else if(jsonId == "6") {
		toUrl = "../json/Sundry1.json"
	}else if(jsonId == "7") {
		toUrl = "../json/Jewelry1.json"
	}else if(jsonId == "8") {
		toUrl = "../json/Jewelry2.json"
	}
	getData();

	function getData() {
		$.ajax({
			type: "get",
			url: toUrl,
			async: false,
			success: function(res) {
				console.log(res)
				var arr = res.data.list;
				var param=arr[id-1]
				form.val('test', {
					"number": param.number,
					"classification": param.classification,
					"name":param.name ,
					"supplier": param.supplier
				});
				$('#img').attr("src", param.pic)
			}
		});
	}

	function setVal(id) {
		if(id == "1") {
			form.val('test', {
				"number": "19F-DPY-JS011",
				"classification": "金属",
				"name": "戒指",
				"supplier": "海亿金属材料公司"
			});
			$('#img').attr("src", "../images/1557221809(1).png")
		} else if(id == "2") {
			form.val('test', {
				"number": "19F-DPY-SL023",
				"classification": "石料",
				"name": "大理石浴缸",
				"supplier": "2号石料材料公司"
			});
			$('#img').attr("src", "../images/1557373832(1).png")
		} else if(id == "3") {
			form.val('test', {
				"number": "19F-DPY-SL023",
				"classification": "橡胶",
				"name": "橡胶手环",
				"supplier": "3号橡胶材料公司"
			});
			$('#img').attr("src", "../images/1557374061(1).png")
		}
	}

	//客户列表
	table.render({
		elem: '#demo',
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
					type: 'numbers',
					align: 'center'
				},
				{
					field: 'sellerNumber',
					align: 'center',
					title: '客户编号'
				},
				{
					field: 'customerName',
					align: 'center',
					title: '客户名称'
				},
				// {
				// 	field: 'address',
				// 	align: 'center',
				// 	title: '地址'
				// },
				{
					field: 'money',
					align: 'center',
					title: '出货价格(/元)'
				},
				// {
				// 	field: 'phone',
				// 	align: 'center',
				// 	title: '类型电话'
				// },
				// {
				// 	field: 'charge',
				// 	align: 'center',
				// 	title: '负责人'
				// }
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
	//物料列表
	table.render({
		elem: '#materiel',
		method: "get",
		async: false,
		cellMinWidth: 80,
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
					align: 'center',
					type: 'numbers'
				},
				{
					field: 'materielNumber',
					align: 'center',
					title: '物料编号'
				},
				{
					field: 'name',
					align: 'center',
					title: '物料名称'
				},
				{
					field: 'color',
					align: 'center',
					title: '物料颜色'
				},
				{
					field: 'specifications',
					align: 'center',
					title: '物料规格'
				},
				{
					field: 'number',
					align: 'center',
					title: '产品编号'
				},
				{
					field: 'money',
					align: 'center',
					title: '物料价格'
				},
				{
					field: 'supplier',
					align: 'center',
					title: '供货商'
				},
				{
					field: 'purchase',
					align: 'center',
					title: '采购小组'
				},
				{
					field: 'charge',
					align: 'center',
					title: '负责人'
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
	//供货商列表
	table.render({
		elem: '#supplier',
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
					type: 'numbers',
					align: 'center'
				},
				{
					field: 'sellerNumber',
					align: 'center',
					title: '供货商编号'
				},
				{
					field: 'supplier',
					align: 'center',
					title: '供货商名称'
				},
				{
					field: 'money',
					align: 'center',
					title: '当前价格'
				},
				// {
				// 	field: 'nearMoney',
				// 	align: 'center',
				// 	title: '近期价格'
				// },
				// {
				// 	field: 'address',
				// 	align: 'center',
				// 	title: '地址'
				// },
				// {
				// 	field: 'status',
				// 	align: 'center',
				// 	title: '目前状态'
				// },
				// {
				// 	field: 'date',
				// 	align: 'center',
				// 	title: '生效日期'
				// },
				// {
				// 	field: 'phone',
				// 	align: 'center',
				// 	title: '类型电话'
				// },
				// {
				// 	field: 'charge',
				// 	align: 'center',
				// 	title: '负责人'
				// }
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
	//商品参数列表
	table.render({
		elem: '#parameter',
		method: "get",
		async: false,
		url: "../json/parameter.json",
		//		contentType: 'application/json',
		//		headers: {
		//			'accessToken': getToken()
		//		},
		page: true,
		cols: [
			[{
					field: 'id',
					title: '序号',
					type: 'numbers',
					align: 'center'
				},
				{
					field: 'color',
					align: 'center',
					title: '颜色'
				},
				{
					field: 'shape',
					align: 'center',
					title: '形状'
				},
				{
					field: 'size',
					align: 'center',
					title: '尺寸'
				},
				{
					field: 'classification',
					align: 'center',
					title: '材质'
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

	//为了表格好看重新加载一遍适应大小
	element.on('collapse(test)', function(data) {
		table.reload('demo');
		table.reload('materiel');
		table.reload('supplier');
		table.reload('parameter');
	});

});