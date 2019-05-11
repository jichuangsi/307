layui.use(['table', 'form'], function() {
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
	var classification;
	var id = UrlSearch();
	var toUrl = "../json/Headwear1.json"
	if(id == "1") {
		toUrl = "../json/Headwear1.json"
	} else if(id == "2") {
		toUrl = "../json/Headwear2.json"
	} else if(id == "3") {
		toUrl = "../json/material1.json"
	} else if(id == "4") {
		toUrl = "../json/material2.json"
	} else if(id == "5") {
		toUrl = "../json/Sundry2.json"
	} else if(id == "6") {
		toUrl = "../json/Sundry1.json"
	} else if(id == "7") {
		toUrl = "../json/Jewelry1.json"
	} else if(id == "8") {
		toUrl = "../json/Jewelry2.json"
	}
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		cellMinWidth: 80,
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
					type: 'numbers',
					align: 'center'
				},
				{
					field: 'number',
					align: 'center',
					title: '商品编号'
				},
				{
					field: 'classification',
					align: 'center',
					title: '类别'
				},
				{
					field: 'name',
					align: 'center',
					title: '品名'
				},

				{
					field: 'money',
					align: 'center',
					title: '近期价格(/元)'
				},
				{
					field: 'supplier',
					align: 'center',
					title: '供货商'
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
					title: '查看商品',
					align: 'center',
					toolbar: "#productr_see2"
				},
				//				{
				//					field: 'appearance',
				//					title: '查看物料',
				//					align: 'center',
				//					toolbar: "#productr_see"
				//				},
				{
					field: 'appearance',
					title: '删除',
					align: 'center',
					toolbar: "#product_del"
				},
				{
					field: 'appearance',
					title: '修改',
					align: 'center',
					toolbar: "#product_update"
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
				classification = arr[1].classification;
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
		//		$(document).on('click', '#look', function() {
		//			renderTable();
		//		})
		$(document).on('click', '#look2', function() {
			var toUrl = "Commodity-details.html?id=" + param.id
			sessionStorage.setItem('jsonId', id);
			window.open(toUrl, '_self');
		})

		form.val('test', {
			"number": param.number,
			"name": param.name,
			"supplier": param.supplier
		});
	});
	$(document).on('click', '#add_product', function() {
		sessionStorage.setItem('classification', classification);
	})
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
						field: 'number',
						title: '产品编号'
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

	$(document).on('click', '#add', function() {
		splicing();
	});
	$(document).on('click', '.layui-icon-close', function() {
		reduce(this);
	});
	var count = 1;
	//添加
	function splicing() {
		var divContent = "";
		count++
		divContent += '<div class="layui-form-item" dataid="' + count + '">';
		divContent += '<label class="layui-form-label">规格</label>';
		divContent += '<div class="layui-input-inline" style="width: 70px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">颜色</option>';
		divContent += '<option value="0">金色</option>';
		divContent += '<option value="1">银色</option>';
		divContent += '<option value="2">蓝色</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 70px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">尺寸</option>';
		divContent += '<option value="0">S</option>';
		divContent += '<option value="1">M</option>';
		divContent += '<option value="2">L</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 70px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">形状</option>';
		divContent += '<option value="0">圆形</option>';
		divContent += '<option value="1">半圆形</option>';
		divContent += '<option value="2">正方形</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-form-mid layui-word-aux"><i class="layui-icon layui-icon-close add"></i> </div>'
		divContent += '</div>';
		$('#product_color').append(divContent);
		form.render('select');
		reduce(obj);
	}
	//减少
	function reduce(obj) {
		console.log(obj.parentNode.parentNode.value)
		var div = $(obj.parentNode.parentNode).attr('dataid')
		console.log(div)
		//		 $('#product_color').find('.layui-form-item').eq(div- 1).remove();

		var str = $('#product_color').find('.layui-form-item').length;
		for(var i = 0; i < str; i++) {
			if($('#product_color').find('.layui-form-item').eq(i).attr('dataid') == div) {
				console.log(1)
				$('#product_color').find('.layui-form-item').eq(i).remove()
			}

		}
	}
});