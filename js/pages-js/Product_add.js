layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
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
					field: 'money',
					align: 'center',
					title: '价格'
				},
				{
					field: 'supplier',
					align: 'center',
					title: '供货商'
				},
				{
					field: 'purchase',
					title: '采购小组'
				},
				{
					field: 'charge',
					title: '负责人'
				},
				{
					field: 'appearance',
					title: '删除',
					toolbar: "#materiel_del"
				},
				{
					field: 'appearance',
					title: '修改',
					toolbar: "#materiel_update"
				},
				{
					field: 'appearance',
					title: '加入产品',
					toolbar: "#materiel_product"
				}
			]
		],
		toolbar: "#materiel_add",
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
	form.on('select(city)', function(data) {
		var param = data.value;
		console.log(param.city)
		if(param != "-1") {
			$(document).on('click', '#add', function() {
				splicing();
			});
		}
	});
	$(document).on('click', '.zxc', function() {
				reduce(this);
			});
	$(document).on('click', '#add2', function() {
		setSupplier();
	});
	$(document).on('click', '.Supplier', function() {
		reduceSupplier(this);
	});
	$(document).on('click', '#add3', function() {
		setCustomerName();
	});
	$(document).on('click', '.CustomerName', function() {
		reduceCustomerNamer(this);
	});
	var count = 1;
	//添加
	function splicing() {
		var divContent = "";
		count++
		divContent += '<div class="layui-form-item" dataid="' + count + '">';
		divContent += '<label class="layui-form-label">规格</label>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">颜色</option>';
		divContent += '<option value="0">金色</option>';
		divContent += '<option value="1">银色</option>';
		divContent += '<option value="2">蓝色</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">尺寸</option>';
		divContent += '<option value="0">S</option>';
		divContent += '<option value="1">M</option>';
		divContent += '<option value="2">L</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<select name="city" lay-verify="required">';
		divContent += '<option value="">形状</option>';
		divContent += '<option value="0">圆形</option>';
		divContent += '<option value="1">半圆形</option>';
		divContent += '<option value="2">正方形</option>';
		divContent += '</select>';
		divContent += '</div>';
		divContent += '<div class="layui-form-mid layui-word-aux"><i class="layui-icon layui-icon-close add zxc"></i> </div>'
		divContent += '</div>';
		$('#product_color').append(divContent);
		form.render('select');
		reduce(obj);
	}
	//减少
	function reduce(obj) {
		var div = $(obj.parentNode.parentNode).attr('dataid')
		var str = $('#product_color').find('.layui-form-item').length;
		for(var i = 0; i < str; i++) {
			if($('#product_color').find('.layui-form-item').eq(i).attr('dataid') == div) {
				console.log(789)
				$('#product_color').find('.layui-form-item').eq(i).remove()
			}

		}
	}
	var number = 1;

	function setSupplier() {
		var divContent = "";
		number++
		divContent += '<div class="layui-form-item" dataid1="' + number + '">';
		divContent += '<label class="layui-form-label">供应商：</label>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="供应商名称">';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="联系方式">';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="地址">';
		divContent += '</div>';
		divContent += '<div class="layui-form-mid layui-word-aux"><i class="layui-icon layui-icon-close add Supplier"></i> </div>';
		divContent += '</div>';
		$('#gys').append(divContent);
		console.log(21212)
		//reduceSupplier(obj);
	}

	function reduceSupplier(obj) {
		var div = $(obj.parentNode.parentNode).attr('dataid1')
		var str = $('#gys').find('.layui-form-item').length;
		for(var i = 0; i < str; i++) {
			if($('#gys').find('.layui-form-item').eq(i).attr('dataid1') == div) {
				console.log(456)
				$('#gys').find('.layui-form-item').eq(i).remove()
			}

		}
	}

	var number2 = 1;

	function setCustomerName() {
		var divContent = "";
		number2++;
		divContent += '<div class="layui-form-item" dataid2="' + number2 + '">';
		divContent += '<label class="layui-form-label">客户：</label>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="客户名称">';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="联系方式">';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 80px;">';
		divContent += '<input type="text" name="address" class="layui-input " placeholder="地址">';
		divContent += '</div>';
		divContent += '<div class="layui-form-mid layui-word-aux"><i class="layui-icon layui-icon-close add CustomerName"></i> </div>';
		divContent += '</div>';
		$('#kh').append(divContent);
		console.log(212)
		//reduceSupplier(obj);
	}

	function reduceCustomerNamer(obj) {
		var div = $(obj.parentNode.parentNode).attr('dataid2')
		var str = $('#kh').find('.layui-form-item').length;
		for(var i = 0; i < str; i++) {
			if($('#kh').find('.layui-form-item').eq(i).attr('dataid2') == div) {
				console.log(123)
				$('#kh').find('.layui-form-item').eq(i).remove()
			}

		}
	}
	/*//获取金属属性
	function getMetal() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="颜色" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}
	//获取石料属性
	function getStoneMaterial() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="重量" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}
	//获取橡胶属性
	function getRubber() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="颜色" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}*/
	$(document).on('click', '#add', function() {
		table.reload('supplier');
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
					field: 'address',
					align: 'center',
					title: '地址'
				},
				{
					field: 'status',
					align: 'center',
					title: '目前状态'
				},
				{
					field: 'money',
					align: 'center',
					title: '价格'
				},
				{
					field: 'nearMoney',
					align: 'center',
					title: '近期价格'
				},
				{
					field: 'date',
					align: 'center',
					title: '生效日期'
				},
				{
					field: 'phone',
					align: 'center',
					title: '类型电话'
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

});