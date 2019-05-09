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
			$(document).on('click', '.layui-icon-close', function() {
				reduce(this);
			});
		}
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
		divContent += '<div class="layui-input-inline" style="width: 60px">';
		divContent += '<input type="text" name="address" class="layui-input "placeholder="数量">';
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